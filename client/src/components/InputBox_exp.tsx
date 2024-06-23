import { FC, ChangeEvent } from 'react';

interface InputBoxProps {
  index: number;
  field: string;
  value: string | number | Date;
  placeholder: string[];
  handleChange: (type: 'string' | 'number' | 'date', field: string) => (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputBox: FC<InputBoxProps> = ({ index, field, value, placeholder, handleChange }) => {
    
  return (
    <input
      className="p-3 bg-slate-700 focus:outline-none  border-none rounded-lg"
      id={field}
      placeholder={placeholder[index]}
      name={field}
      onChange={(e) => {
        if (typeof value === "string")
            handleChange("string", field)(e);
        else if (typeof value === "number")
            handleChange("number", field)(e);
        else handleChange("date", field)(e);
    }}
      {...(typeof value === "number" && { type: "number" })}
      {...(value instanceof Date && { type: "date" })}
      {...(field === "password" && { type: "password" })}
      {...(field === "email" && { type: "email" })}
    />
  );
};

export default InputBox;