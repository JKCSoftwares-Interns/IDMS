import { TextField } from "@mui/material";

const MuiField = ({field, react, target}) => {

	return (
			<TextField
				name={field.name}
				label={field.label}
				type={field.type}
				value={target}
				onChange={react}
				variant="outlined"
				fullWidth
				InputLabelProps={field.type === "date" ? { shrink: true } : {}}
				inputProps={field.type === "number" ? { min: 0 } : {}}
			/>
	);
};

export default MuiField;
