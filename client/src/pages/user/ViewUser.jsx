import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Container } from "@mui/material";

import { MuiTable } from "../../components/MuiTable";

import PageAnimate from "../../components/PageAnimate";
import serverInstance from "../../data/init";
const tableFields = [
	{ key: "userId", label: "User ID" },
	{ key: "userName", label: "User Name" },
	{ key: "name", label: "Name" },
	{ key: "mobile", label: "Mobile" },
	{ key: "email", label: "Email" },

	{ key: "role", label: "Role" },
	{ key: "password", label: "Password" },
	{ key: "status", label: "Status" },
	{ key: "dateAdded", label: "Date Added" },
	{ key: "addedBy", label: "Added By" },
    { key: "lastEditedDate", lable1: "Last Edited Date"},
	{ key: "lastEditedBy", label: "Last Edited By" },

	// { key: 'marketer', label: 'Marketer'},
	// { key: "manufacturer", label: "Manufacturer" },

	// { key: 'upc', label: 'UPC'},
	// { key: 'hsn', label: 'HSN'},

	// { key: 'cgst', label: 'CGST'},
	// { key: 'sgst', label: 'SGST'},
	// { key: 'igst', label: 'IGST'},
	// { key: 'cess', label: 'CESS'},

	// { key: 'dateAdded', label: 'Date Added'},
	// { key: 'addedBy', label: 'Added By'},
	// { key: 'lastEditedDate', label: 'Last Edited Date'},
	// { key: 'lastEditedBy', label: 'Last Edited By'}
];

const UserList = () => {
	const [data, setData] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await serverInstance.get("/user");
				const processedData = response.data.map(item => {
					const newItem = { ...item };
					tableFields.forEach(field => {
						if (!newItem[field.key]) {
							newItem[field.key] = 'N/A' || 0;
						}
					});
					return newItem;
				});

				setData(processedData);
			} catch (error) {
				console.error("Failed to fetch user:", error);
			}
		};

		fetchData();
	}, []);

	const filteredData = data.filter((user) =>
		user.userName.toLowerCase().includes(searchTerm.toLowerCase()));

	return (
		<PageAnimate className={"w-full"}>
			<Container sx={{ p: 2 }}>
				<div className="flex p-8 justify-between items-center w-full">
					<h1 className="text-4xl font-bold">User List</h1>
					<input
						className="px-4 py-2 border max-w-max rounded-lg"
						placeholder="Search Product..."
						value={searchTerm}
						onChange={(event) => setSearchTerm(event.target.value)}
					/>
					<NavLink to="/user/add">
						<Button size="large" variant="contained" color="success">
							<AddCircleIcon />
						</Button>
					</NavLink>
				</div>

				{/*  
        
        REQUIREMENTS:-
        
          > Data fetch from server 
          > Model your fields
      
      */}

				<MuiTable
					title={"user"}
					tableFields={tableFields}
					tableData={filteredData}
					setTableData={setData}
				/>
			</Container>
		</PageAnimate>
	);
};

export default UserList;
