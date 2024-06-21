import {FC, useState} from "react";
import InputBox from "./InputBox";
import { groupByCategory, Field } from "../utils/formHelper";
import { addMoreShit } from "../data/basic";
import AlertBox from "./AlertBar";

/* goal: omit these `any` */
interface AddFormProps {
	formData: any;
	setFormData: React.SetStateAction<any>;
	metadata: Field<any>[];
	title: string;
}

const AddForm: FC<AddFormProps> = ({
	title,
	formData,
	setFormData,
	metadata,
}) => {
	// Alert Box
	const [open, setOpen] = useState(false);

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
				message={`${title} Added Successfully`}
				navigateTo={title}
				active={open}
			/>

			<form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
				<div className="grid grid-cols-3 grid-rows-2 gap-4">
					{Object.entries(groupedData).map(
						([category, items]: [string, any]) => (
							<div
								className="flex flex-col h-fit items-center gap-3 border rounded-2xl p-6 backdrop-filter backdrop-blur-lg bg-white bg-opacity-90"
								key={category}
							>
								<h2 className="font-semibold">{category}</h2>
								{items.map((item: any, index: number) => {
									// console.log("index: ", index)
									return (
										<div key={index} className="">
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
						)
					)}
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

export default AddForm;
