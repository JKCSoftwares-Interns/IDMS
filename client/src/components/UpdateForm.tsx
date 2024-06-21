import { FC, useEffect, useState } from "react";
import InputBox from "./InputBox";
import { groupByCategory, Field } from "../utils/formHelper";
import { addMoreShit, fetchInfo } from "../data/basic";
import AlertBox from "./AlertBar";
import { TextField } from "@mui/material";

/* goal: omit these `any` */
interface UpdateFormProps {
	title: string;
	id: string;
	data: any;
	metadata: Field<any>[];
	setData: React.Dispatch<React.SetStateAction<never[]>>;
}

const UpdateForm: FC<UpdateFormProps> = ({
	title,
	id,
	data,
	metadata,
	setData,
}) => {
	// Alert Box
	const [open, setOpen] = useState(false);

	const [formData, setFormData] = useState(data);

	useEffect(() => {
		const fetchData = async () => {
			const data = await fetchInfo(`/${title}/edit/${id}`);
			setData(data);
			setFormData(
				metadata.reduce(
					(obj, item) => ({
						...obj,
						[item.name]: data.find((d) => d.name === item.name)?.value || "",
					}),
					{}
				)
			);
		};
		fetchData();
	}, [title, id, setData, metadata]);

	const groupedData = groupByCategory(metadata);

	function handleChange(type: string, target: string) {
		return function (
			e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
		) {
			if (type === "number") {
				setFormData({ ...formData, [target]: Number(e.target.value) });
			} else if (type === "string") {
				setFormData({ ...formData, [target]: e.target.value });
			} else {
				console.error("Invalid type encountered: " + type + " for " + target);
			}
		};
	}

	const handleSubmit = (e: any) => {
		e.preventDefault();
		console.log("data:", formData);
		addMoreShit(`/${title}/add`, formData)
			.then(() => {
				setOpen(true);
				setTimeout(() => {
					setOpen(false);
				}, 3000);
			})
			.catch((error) => {
				console.error("An error occurred:", error);
			});
	};

	return (
		<>
			<AlertBox
				title={title}
				message={`${title} Updated Successfully`}
				navigateTo={title}
				active={open}
			/>

			<form className="w-full flex gap-3">
				{metadata
					.filter((field) => field.readonly)
					.map((field, index) => (
						<>
							<h1>{formData[field.name]}</h1>
							<TextField
								key={index}
								name={field.name}
								label=""
								type={field.type}
								value={data[field.name] || ""}
								variant="standard"
								inputProps={{ min: 0 }}
								disabled
							/>
						</>
					))}
			</form>

			<form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
				<div className="grid grid-cols-3 grid-rows-2 gap-4">
					{Object.entries(groupedData)
						.filter(([_, items]) => !items.some((item: any) => item.readonly))
						.map(([category, items]: [string, any]) => (
							<div
								className="flex flex-col h-fit items-center gap-3 border rounded-2xl p-6 backdrop-filter backdrop-blur-lg bg-white bg-opacity-90"
								key={category} // Assuming category is unique
							>
								<h2 className="font-semibold">{category}</h2>
								{items.map((item: any) => {
									return (
										<div key={item.name} className="">
											{" "}
											<InputBox
												label={item.label}
												field={item.name}
												value={formData[item.name]}
												placeholder={item.placeholder}
												handleChange={handleChange}
											/>
										</div>
									);
								})}
							</div>
						))}
				</div>
				<div className="flex justify-center">
					<input
						type="submit"
						className="p-3 w-[10rem] hover:bg-rose-700 text-slate-100 transition border-none font-semibold rounded-lg bg-rose-500"
					/>
				</div>
			</form>
		</>
	);
};

export default UpdateForm;
