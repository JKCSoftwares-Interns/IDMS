import { FC, ReactNode } from "react";
import TextField from "@mui/material/TextField";

interface ReadonlyInputProps {
	label: string | undefined;
	field: string;
	value: ReactNode;
}

const ReadonlyInput: FC<ReadonlyInputProps> = ({ label, field, value }) => {
	/* `field` is basically the `name`. */

	let date = false;
	let newvalue = "";
	let type = "text";
	if (!field.toLowerCase().includes("date") && value === null) {
		value = "N/A";
	}
	if (typeof value === "number") {
		type = "number";
	} else if (field.toLowerCase().includes("date")) {
		date = true;
		// console.log(field, value, typeof value);
		if (value === null) {
			newvalue = "N/A";
		}
		if (typeof value === "string") {
			newvalue = new Date(value)
				.toLocaleDateString("en-GB", {
					day: "2-digit",
					month: "2-digit",
					year: "numeric",
				})
				.replace(/\//g, "-");
		}
	}

	return (
		<TextField
			variant="outlined"
			id={field}
			label={label}
			name={field}
			type={type}
			defaultValue={date ? newvalue : value}
			InputProps={{
				readOnly: true,
			}}
		/>
	);
};

export default ReadonlyInput;
