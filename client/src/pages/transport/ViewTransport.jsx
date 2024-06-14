import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Container } from "@mui/material";
import { MuiTable } from "../../components/MuiTable";

import PageAnimate from "../../components/PageAnimate";
import serverInstance from "../../data/init";

const tableFields = [
	{ key: "transportId", label: "Transport ID" },
	{ key: "transportName", label: "Transport Name" },
	{ key: "businessName", label: "Business Name" },
	{ key: "vehicleName", label: "Vehicle Name" },
	{ key: "email", label: "Email" },
	// { key: "mobileNumber", label: "Mobile Number" },
	// { key: "alternatemobileNumber", label: "Alternate Mobile Number" },
	// { key: "addressline1", label: "Address Line 1" },
	// { key: "addressline2", label: "Address Line 2" },
	// { key: "landmark", label: "Landmark" },
	{ key: "city", label: "City" },
	// { key: "district", label: "District" },
	// { key: "state", label: "State" },
	{ key: "pincode", label: "Pincode" },
	{ key: "branchoffice", label: "Branch Office" },
	// { key: "aadharNumber", label: "Aadhar Number" },
	// { key: "panNumber", label: "PAN Number" },
	// { key: "driverName", label: "Driver Name" },
	// { key: "drivermobileNumber", label: "Driver Mobile Number" },
	// { key: "driveralternateNumber", label: "Driver Alternate Number" },
	{ key: "status", label: "Status" },
	// { key: "dateAdded", label: "Date Added" },
	// { key: "addedBy", label: "Added By" },
	// { key: "lasteditedDate", label: "Last Edited Date" },
	// { key: "lasteditedBy", label: "Last Edited By" },
];

const TransportList = () => {
	const [data, setData] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await serverInstance.get("/transport");
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
				console.error("Failed to fetch transport:", error);
			}
		};

		fetchData();
	}, []);

	const filteredData = data.filter((transport) =>
		transport.transportName.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<PageAnimate className={"w-full"}>
			<Container sx={{ p: 2 }}>
				<div className="flex p-8 justify-between items-center w-full">
					<h1 className="text-4xl font-bold">Transport List</h1>
					<input
						className="px-4 py-2 border max-w-max rounded-lg"
						placeholder="Search Transport..."
						value={searchTerm}
						onChange={(event) => setSearchTerm(event.target.value)}
					/>
					<NavLink to="/transport/add">
						<Button size="large" variant="contained" color="success">
							<AddCircleIcon />
						</Button>
					</NavLink>
				</div>

				<MuiTable
					title={"transport"}
					tableFields={tableFields}
					tableData={filteredData}
					setTableData={setData}
				/>
			</Container>
		</PageAnimate>
	);
};

export default TransportList;
