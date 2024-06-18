import { FC, useEffect, useState } from "react";
import TableGenerator from "../../components/TableGeneration";
import { AddCircleRounded, SearchOff } from "@mui/icons-material";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { getAllData } from "../../data/basic";

/* Order to `labels` and `interface` should match. */

interface Vendor {
    vendorId: string;
    vendorName: string;
    businessName: string;
    email: string;
    mobileNumber: number;
    alternateMobileNumber: number;
    addressLine1: string;
    addressLine2: string;
    landmark: string;
    city: string;
    district: string;
    state: string;
    pinCode: number;
    gstin: number;
    fssai: number;
    registrationNumber: number;
    aadharNumber: number;
    panNumber: number;
    otherDocuments: string;
    status: string;
    dateAdded: string;
    addedBy: string;
    lastEditedDate: string;
    lastEditedBy: string;
}

const labels = [
    "Vendor ID",
    "Vendor Name",
    "Business Name",
    "Email",
    "Mobile Number",
    "Alternate Mobile Number",
    "Address Line 1",
    "Address Line 2",
    "Landmark",
    "City",
    "District",
    "State",
    "Pin Code",
    "GSTIN",
    "FSSAI",
    "Registration Number",
    "Aadhar Number",
    "PAN Number",
    "Other Documents",
    "Status",
    "Date Added",
    "Added By",
    "Last Edited Date",
    "Last Edited By",
];

const ViewVendors: FC = () => {
	const [vendors, setVendors] = useState<Vendor[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			const response: Vendor[] = await getAllData("/vendors");
			setVendors(response);
			return response;
		};

		fetchData();
	}, []);

	return (
		<>
			{vendors.length > 0 ? (
				<TableGenerator title="vendors" label={labels} data={vendors} />
			) : (
				<div className="w-full grid place-items-center">
					<div className="flex flex-col justify-center items-center gap-10">
						<SearchOff sx={{ fontSize: 150 }} />
						<h1 className="text-2xl">No vendors found</h1>
						<NavLink to={`/vendors/add`}>
						<div className="flex flex-col justify-center gap-3">
						<Button size="large" variant="contained" color="success">
							<AddCircleRounded />
						</Button>
						<p>Click to add vendor</p>
						</div>
					</NavLink>
					</div>
				</div>
			)}
		</>
	);
};

export default ViewVendors;
