import InputBox from "../../components/InputBox";
import serverInstance from "../../data/init";
import React, {FC, useState} from "react";

interface Fields {
    email: string,
    password: string,
}

interface Props {
    toggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginForm: FC<Props> = ({ toggle }) => {

    const [formData, setFormData] = useState<Fields>({
        email: '',
        password: '',
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

    const HandleLogin = async () => {

        // This code will be shifted to DAL (read more in Docs)
        const response = await serverInstance.post('/auth/login', {
            email: formData.email,
            password: formData.password,
        })

        if (response.status !== 200) {
            console.log("Failed Login: ", response.statusText)
        }

    }

    return (
        <form onSubmit={HandleLogin} className="p-4 flex flex-col justify-center items-center gap-5 border-2">
            <h1 className="text-3xl font-bold"> Login </h1>

            <InputBox label="Email" field="email" handleChange={handleChange} placeholder="example@xxx.com" value={formData.email} key={"email"} />
            <InputBox label="Password" field="password" handleChange={handleChange} placeholder="..." value={formData.password} key={"password"} />

            <input className="py-2 px-4 bg-blue-500 hover:bg-blue-700 transition rounded-xl text-slate-300 font-semibold" type="submit" />

            <p> New here? <span onClick={() => toggle(true)} className="text-blue-500"> Register </span> </p>
      </form>
    )
}

export default LoginForm;