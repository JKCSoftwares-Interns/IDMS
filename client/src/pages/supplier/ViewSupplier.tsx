import { FC, useEffect, useState } from "react";
import TableGenerator from "../../components/TableGeneration";
import { AddCircleRounded, SearchOff } from "@mui/icons-material";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { getAllData } from "../../data/basic";

/* Order to `labels` and `interface` should match. */

interface Supplier {
	supplierId: string;
	supplierName: string;
	businessName: string;
	mobileNumber: number;
	alternateMobileNumber: number;
	email: string;
	addressLine1: string;
	addressLine2: string;
	city: string;
	state: string;
	pinCode: number;
	beneficiaryName: string;
	accountNumber: string;
	ifscCode: string;
	virtualPaymentAddress: string;
	remarks: string;
	dateAdded: Date;
	addedBy: string;
	lastEditedDate: Date;
	lastEditedBy: string;
}

const labels = [
	"Supplier ID",
    "Supplier Name",
    "Business Name",
    "Mobile Number",
    "Alternate Mobile Number",
    "Email",
    "Address Line 1",
    "Address Line 2",
    "City",
    "State",
    "Pin Code",
    "Beneficiary Name",
    "Account Number",
    "IFSC Code",
    "Virtual Payment Address",
    "Remarks",
    "Date Added",
    "Added By",
    "Last Edited Date",
    "Last Edited By",
];

const ViewSuppliers: FC = () => {
	const [suppliers, setSupplier] = useState<Supplier[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			const response: Supplier[] = await getAllData("/suppliers");
			setSupplier(response);
			return response;
		};

		fetchData();
	}, []);

	return (
		<>
			{suppliers.length > 0 ? (
				<TableGenerator title="suppliers" label={labels} data={suppliers} setData={setSupplier} />
			) : (
				<div className="w-full grid place-items-center">
					<div className="flex flex-col justify-center items-center gap-10">
						<SearchOff sx={{ fontSize: 150 }} />
						<h1 className="text-2xl">No suppliers found</h1>
						<NavLink to={`/suppliers/add`}>
						<div className="flex flex-col justify-center gap-3">
						<Button size="large" variant="contained" color="success">
							<AddCircleRounded />
						</Button>
						<p>Click to add Supplier</p>
						</div>
					</NavLink>
					</div>
				</div>
			)}
		</>
	);
};

export default ViewSuppliers;
