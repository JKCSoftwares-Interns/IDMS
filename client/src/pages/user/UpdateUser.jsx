import { useParams } from "react-router-dom";
import PageAnimate from "../../components/PageAnimate";
import MuiFormUpdate from "../../components/MuiFormUpdate";

const UpdateUser = () => {
	
  /* Fields are defined below */

  const { userId } = useParams();

	return (
		<PageAnimate className={"w-full"}>
			<MuiFormUpdate
        title={"users"}
        id={userId}
				readonly={readOnlyFields}
				fields={fields}
				categories={categories}
			/>
		</PageAnimate>
	);
};

export default UpdateUser;

/*---------Fields-----------------*/

const categories = [
		"Basic Info",
		
	];

const readOnlyFields = [
	{ label: "User Name", name: "username", type: "text" },
	{ label: "Name ", name: "name", type: "text" },
	{ label: "Mobile", name: "mobile", type: "number" },
	{ label: "Email", name: "email", type: "text" },
    { label: "Passward", name: "password", type: "password" },
	{ label: "Role", name: "role", type: "text" },
    { label: "Status", name: "status", type: "text" },
    
];

const fields = [
	{
		label: "User Name",
		name: "userName",
		type: "text",
		category: "Basic Info",
	},
	{
		label: "Name",
		name: "name",
		type: "text",
		category: "Basic Info",
	},
	{
		label: "Mobile",
		name: "mobile",
		type: "number",
		category: "Basic Info",
	},
	{
		label: "Email",
		name: "email",
		type: "text",
		category: "Basic Info",
	},
	{
		label: "Password",
		name: "password",
		type: "password",
		category: "Basic Info",
	},
    {
		label: "Role",
		name: "Role",
		type: "text",
		category: "Basic Info",
	},
	
    {
		label: "Status",
		name: "status",
		type: "text",
		category: "Basic Info",
	},
	
	
	
];
