
import PageAnimate from "../../components/PageAnimate";
import MuiFormAdd from "../../components/MuiFormAdd";

const AddUser = () => {

	return (
		<PageAnimate className={"w-full flex flex-col items-center justify-center"}>

			{/* <p className="text-slate-500">Fill the form</p> */}

			<div
				className="w-3/4 grid place-items-center p-6 mb-5"
			>
				<MuiFormAdd
					title={"user"}
					categories={categories}
					fields={fields}
				/>

			</div>
		</PageAnimate>
	);
};

export default AddUser;


/*-------------------------FIELDS-------------------*/

const categories = [
	"Basic Info",
	
];

const fields = [
	/* Basic Info */
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
		label: "Role",
		name: "role",
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
        label: "Status",
		name: "status",
		type: "text",
		category: "Basic Info",



	},

	
];