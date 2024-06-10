import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const MuiAutocomplete = ({ label, options, value, setValue }) => {
	return (
		<Autocomplete
			value={value}
			onChange={(event, newValue) => {
				setValue(newValue);
			}}
			options={options}
			renderInput={(params) => <TextField {...params} label={label} />}
		/>
	);
};

export default MuiAutocomplete;