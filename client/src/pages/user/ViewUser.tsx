import { FC, useEffect, useState } from "react";
import TableGenerator from "../../components/TableGeneration";
import { AddCircleRounded, SearchOff } from "@mui/icons-material";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { getAllData } from "../../data/basic";

/* Order to `labels` and `interface` should match. */

interface User {
	userId: string;
	userName: string;
	name: string;
	mobile: number;
	email: string;
	role: string;
	password: string;
	status: string;
	dateAdded: Date;
	addedBy: string;
	lastEditedDate: Date;
	lastEditedBy: string;
}

const labels = [
	"User ID",
    "User Name",
    "Name",
    "Mobile",
    "Email",
    "Role",
    "Password",
    "Status",
    "Date Added",
    "Added By",
    "Last Edited Date",
    "Last Edited By",
];

const ViewUsers: FC = () => {
	const [users, setUser] = useState<User[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			const response: User[] = await getAllData("/users");
			setUser(response);
			return response;
		};

		fetchData();
	}, []);

	return (
		<>
			{users.length > 0 ? (
				<TableGenerator title="users" label={labels} data={users} />
			) : (
				<div className="w-full grid place-items-center">
					<div className="flex flex-col justify-center items-center gap-10">
						<SearchOff sx={{ fontSize: 150 }} />
						<h1 className="text-2xl">No users found</h1>
						<NavLink to={`/users/add`}>
						<div className="flex flex-col justify-center gap-3">
						<Button size="large" variant="contained" color="success">
							<AddCircleRounded />
						</Button>
						<p>Click to add user</p>
						</div>
					</NavLink>
					</div>
				</div>
			)}
		</>
	);
};

export default ViewUsers;
