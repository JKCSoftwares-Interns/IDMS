import { useState } from "react";
import PageAnimate from "../../components/PageAnimate";
import LoginForm from "./Login";
import SignupForm from "./Signup";

const AuthPage = () => {

  const [newUser, setNewUser] = useState(false);

  return newUser ? (
    <PageAnimate className={"w-full"}>
      <SignupForm toggle={setNewUser} />
    </ PageAnimate>
  ) : (
    <PageAnimate className={"w-full"}>
      <LoginForm toggle={setNewUser} />
    </ PageAnimate>
  );
}

export default AuthPage;
