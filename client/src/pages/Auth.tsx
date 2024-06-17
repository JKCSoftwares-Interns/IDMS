import { useState } from "react";
import PageAnimate from "../components/PageAnimate";
import InputBox from "../components/InputBox";

const AuthPage = () => {

  const [newUser, setNewUser] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPassword(e.target.value);
  };

  return newUser ? (
    <PageAnimate className={"w-full"}>
      <form className="p-4 flex flex-col justify-center items-center gap-5 border-2">
        <h1 className="text-3xl font-bold"> Sign Up </h1>
        <p> Already have an account? <span onClick={() => setNewUser(false)} className="text-blue-500"> Continue with it </span> </p>
        <input className="py-2 px-4 bg-blue-500 hover:bg-blue-700 transition rounded-xl text-slate-300 font-semibold" type="submit" />
      </form>
    </ PageAnimate>
  ) : (
    <PageAnimate className={"w-full"}>
      <form className="p-4 flex flex-col justify-center items-center gap-5 border-2">
        <h1 className="text-3xl font-bold"> Login </h1>
        <InputBox label="Email" field="email" handleChange={handleEmailChange} placeholder="example@xxx.com" value={email} key={"email"} />
        <InputBox label="Password" field="password" handleChange={handlePasswordChange} placeholder="..." value={password} key={"password"} />
        <input className="py-2 px-4 bg-blue-500 hover:bg-blue-700 transition rounded-xl text-slate-300 font-semibold" type="submit" />
        <p> New here? <span onClick={() => setNewUser(true)} className="text-blue-500"> Register </span> </p>
      </form>
    </ PageAnimate>
  );
}

export default AuthPage;