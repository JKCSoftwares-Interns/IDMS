import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const MuiAutocomplete = ({ field, options, target, react }) => {

	console.log("options:", options)

	return (
		<>
			<Autocomplete
				options={options}
				renderInput={(params) => (
					<TextField {...params} label={field.label} variant="outlined" fullWidth />
				)}
				value={target}
				onChange={react}
			/>
		</>
	);
};

export default MuiAutocomplete;
