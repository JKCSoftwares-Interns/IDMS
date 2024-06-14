import { FC, ChangeEvent, ReactNode } from 'react';
import TextField from '@mui/material/TextField';

interface InputBoxProps {
  label: string | undefined,
  field: string;
  value: ReactNode;
  placeholder: string | undefined;
  handleChange: (type: 'string' | 'number' | 'Date' | 'password' | 'email', field: string) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const InputBox: FC<InputBoxProps> = ({ label, field, value, placeholder, handleChange }) => {
  let type = "text";
  if (typeof value === "number") type = "number";
  else if (field.includes("date")) type = "date";
  else if (field === "password") type = "password";
  else if (field === "email") type = "email";

  // console.log(value)
  // console.log(placeholder)

  return (
    <TextField
      variant="outlined"
      id={field}
      label={label}
      placeholder={placeholder}
      name={field}
      type={type}
      inputProps={{
        min: 0,
      }}
      onChange={(e) => {
        if (type === "text")
            handleChange("string", field)(e);
        else if (type === "number")
            handleChange("number", field)(e);
        else if (type === "date") handleChange("Date", field)(e);
        else if (type === "password") handleChange("password", field)(e);
        else if (type === "email") handleChange("email", field)(e);
      }}
    />
  );
};

export default InputBox;
