import React, {FC, useState} from "react";
import InputBox from "../../components/InputBox";

interface Fields {
	name: string,
	email: string,
	mobile: number,
	role: string,
	password: string,
	confirmPassword: string,
}

const label = [
	"Full Name",
	"Email",
	"Mobile Number",
	"Role",
	"Password",
	"Confirm Password",
]

const placeholder = [
	"First-name Last-name", // change this if you feels so
	"example@address.com",
	"xxxxxxxxx",
	"Admin, default",
	"********",
	"********",
]

interface Props {
	toggle: React.Dispatch<React.SetStateAction<boolean>>,
}

const SignupForm: FC<Props> = ({ toggle }) => {

	const [formData, setFormData] = useState<Fields>({
		name: '',
		email: '',
		mobile: 0,
		role: '',
		password: '',
		confirmPassword: '',
	})

	function handleChange(type: string, target: string) {
		return function (e: React.ChangeEvent<HTMLInputElement>) {
			if (type === "number") {
				setFormData({ ...formData, [target]: Number(e.target.value) });
			} else if (type === "date") {
				setFormData({ ...formData, [target]: new Date(e.target.value) });
			} else if (type === "string") {
				setFormData({ ...formData, [target]: e.target.value });
			}
		};
	}

	return (

		/* Fix this layout someday */

		<form className="p-4 flex flex-col items-center gap-8">
			<h1 className="text-3xl font-bold"> Sign Up </h1>

			{Object.entries(formData).map(([field, value], index) => (
				<React.Fragment key={index}>

					<InputBox
						label={label[index]}
						field={field}
						handleChange={handleChange}
						placeholder={placeholder[index]}
						value={value}
						key={index}
					/>
				</React.Fragment>
			))}

			<input
				className="py-2 px-4 bg-blue-500 hover:bg-blue-700 transition rounded-xl text-slate-300 font-semibold"
				type="submit"
			/>

			<p>
				{" "}
				Already a member?{" "}
				<span onClick={() => toggle(false)} className="text-blue-500">
					{" "}
					Back to login{" "}
				</span>{" "}
			</p>

		</form>
	);
};

export default SignupForm;