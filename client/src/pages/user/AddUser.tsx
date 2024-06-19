import { useState } from "react";
import PageAnimate from "../../components/PageAnimate";
import AddForm from "../../components/AddForm";
import { Field, initializeFormData } from "../../utils/formHelper";

/* Order to `data` and `interface` should match. */

interface User {
	userName: string;
	name: string;
	password: string;
	role: string;
	mobile: number;
	email: string;
	status: string;
    // [key: string | number ]: React.ReactNode;
}

const metadata: Field<User>[] = [
    /* BASIC INFO */
    { name: "userName", type: "string", label: "User Name", placeholder: "The User", category: "Basic Info" },
    { name: "name", type: "string", label: "Name", placeholder: "The Name", category: "Basic Info" },
    { name: "password", type: "string", label: "Password", placeholder: "The Password", category: "Basic Info" },
    { name: "role", type: "string", label: "Role", placeholder: "The Role", category: "Basic Info" },
    // Contact Info
    { name: "mobile", type: "number", label: "Mobile", placeholder: "XXXXXXXXXX", category: "Contact Info" },
    { name: "email", type: "string", label: "Email", placeholder: "temp123@gmail.com" , category: "Contact Info" },
    
    // Status Info
    { name: "status", type: "string", label: "Status", placeholder: "The Status", category: "Status Info"},
];

const AddUser = () => {
	const [formData, setFormData] = useState<User>(initializeFormData(metadata));

	// console.log("formData: ", formData);

	return (
		<PageAnimate className={"w-full"}>
			<div className="w-full p-6 flex justify-center items-center gap-5">
				<div className="bg-opacity-30 p-4 h-fit rounded-md items-center justify-center flex-col flex gap-5">
					<h1 className="font-extrabold text-2xl border-b w-fit pb-2">
						Add to Users List
					</h1>

					<AddForm
						title="users"
						formData={formData}
						setFormData={setFormData}
						metadata={metadata}
					/>
				</div>
			</div>
		</PageAnimate>
	);
};

export default AddUser;
