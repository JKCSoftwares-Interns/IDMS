import { FC, useEffect, useState } from "react";
import InputBox from "./InputBox";
import { groupByCategory, Field } from "../utils/formHelper";
import { addMoreShit, fetchInfo, updateThatShit } from "../data/basic";
import AlertBox from "./AlertBar";
import ReadonlyInput from "./ReadonlyInput";
import { CircularProgress } from "@mui/material";

/* goal: omit these `any` */
interface UpdateFormProps {
	title: string;
	id: string;
	data: any;
	metadata: Field<any>[];
	setData: React.Dispatch<React.SetStateAction<any[]>>;
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
	const [loading, setLoading] = useState(true); // Add this line
	const [formData, setFormData] = useState(data);

	useEffect(() => {
		const fetchData = async () => {
			const result = await fetchInfo(`/${title}/edit/${id}`);
			setData(result[0]);
			setFormData(result[0]);
			setLoading(false);
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
		const dataToSend = { ...formData };
		delete dataToSend.lastEditedDate;
		delete dataToSend.lastEditedBy;
		delete dataToSend.dateAdded;
		delete dataToSend.addedBy;
		console.log("sending", dataToSend);
		updateThatShit(`/${title}/edit/${id}`, dataToSend)
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

	if (loading) {
		return (
			<div className="w-full h-screen grid place-items-center">
				<CircularProgress />
			</div>
		);
	} else {
		return (
			<>
				<AlertBox
					title={title}
					message={`${title} updated successfully`}
					navigateTo={title}
					active={open}
				/>

				<form className="w-full flex gap-3 p-4 justify-center">
					{metadata
						.filter((field) => field.readonly)
						.map((field, index) => {
							const value = data[field.name];
							return (
								<div 
								className="shadow-sm flex flex-col w-fit h-fit items-center gap-4 border rounded-2xl p-4 backdrop-filter backdrop-blur-lg bg-white bg-opacity-90"
								key={index}>
									<ReadonlyInput
										field={field.name}
										label={field.label}
										type={field.type}
										value={value}
										variant="standard"
										inputProps={{ min: 0 }}
										disabled
									/>
								</div>
							);
						})}
				</form>

				<form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
					<div className="grid grid-cols-3 grid-rows-2 place-items-center">
						{Object.entries(groupedData)
							.filter(([category, items]: [string, any]) =>
								items.some((item: any) => !item.readonly)
							)
							.map(([category, items]: [string, any]) => (
								<div
									className="hover:shadow-xl transition flex flex-col w-fit h-fit items-center gap-4 border rounded-2xl p-8 backdrop-filter backdrop-blur-lg bg-white bg-opacity-90"
									key={category}
								>
									<h2 className="font-semibold">{category}</h2>
									{items
										.filter((item: any) => !item.readonly)
										.map((item: any) => (
											<div key={item.name} className="">
												<InputBox
													label={item.label}
													field={item.name}
													value={data[item.name]}
													placeholder={item.placeholder}
													handleChange={handleChange}
												/>
											</div>
										))}
								</div>
							))}
					</div>
					<div className="flex justify-center">
						<input
							type="submit"
							className="p-3 m-5 w-[10rem] cursor-pointer hover:bg-rose-700 text-slate-100 transition border-none font-semibold rounded-lg bg-rose-500"
						/>
					</div>
				</form>
			</>
		);
	}
};

export default UpdateForm;
