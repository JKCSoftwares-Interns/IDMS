import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Container } from "@mui/material";

import serverInstance from "../../services/serverInstance";
import { MuiTable } from "../../components/MuiTable";

import PageAnimate from "../../components/PageAnimate";

const tableFields = [
	{key: "supplierId", label: "Supplier ID"},
	{key: "supplierName", label: "Supplier Name"},
	{key: "businessName", label: "Business Name"},
	{key: "mobileNumber", label: "Mobile Number"},
	// {key: "alternateMobileNumber", label: "Alternate Mobile Number"},
	{key: "email", label: "Email"},
	// {key: "addressLine1", label: "Address Line 1"},
	// {key: "addressLine2", label: "Address Line 2"},
	{key: "city", label: "City"},
	// {key: "state", label: "State"},
	// {key: "pinCode", label: "PIN Code"},
	// {key: "beneficiaryName", label: "Beneficiary Name"},
	{key: "accountNumber", label: "Account Number"},
	{key: "ifscCode", label: "IFSC Code"},
	{key: "virtualPaymentAddress", label: "Virtual Payment Address"},
	// {key: "remarks", label: "Remarks"},
	// {key: "dateAdded", label: "Date Added"},
	// {key: "addedBy", label: "Added By"},
	// {key: "lastEditedDate", label: "Last Edited Date"},
	// {key: "lastEditedBy", label: "Last Edited By"}
];

const SupplierList = () => {
	const [data, setData] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await serverInstance.get("/suppliers");
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
				console.error("Failed to fetch suppliers:", error);
			}
		};

		fetchData();
	}, []);

	const filteredData = data.filter((supplier) =>
		supplier.supplierName.toLowerCase().includes(searchTerm.toLowerCase()));

	return (
		<PageAnimate className={"w-full"}>
			<Container sx={{ p: 2 }}>
				<div className="flex p-8 justify-between items-center w-full">
					<h1 className="text-4xl font-bold">Supplier List</h1>
					<input
						className="px-4 py-2 border max-w-max rounded-lg"
						placeholder="Search Supplier..."
						value={searchTerm}
						onChange={(event) => setSearchTerm(event.target.value)}
					/>
					<NavLink to="/suppliers/add">
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
					title={"suppliers"}
					tableFields={tableFields}
					tableData={filteredData}
					setTableData={setData}
				/>
			</Container>
		</PageAnimate>
	);
};

export default SupplierList;
