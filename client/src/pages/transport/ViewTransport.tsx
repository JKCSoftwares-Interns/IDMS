import { FC, useEffect, useState } from "react";
import TableGenerator from "../../components/TableGeneration";
import { AddCircleRounded, SearchOff } from "@mui/icons-material";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { getAllData } from "../../data/basic";

/* Order to `labels` and `interface` should match. */

interface Transport {
	tranportId: string;
	transportName: string;
	businessName: string;
	vehicleName: string;
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
	branchOffice: string;
	aadharNumber: number;
	panNumber: number;
	driverName: string;
	driverMobileNumber: number;
	driverAlternateNumber: number;
	status: string;
	dateAdded: string;
	addedBy: string;
	lastEditedDate: string;
	lastEditedBy: string;
}

const labels = [
	"Transport ID",
    "Transport Name",
    "Business Name",
    "Vehicle Name",
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
    "Branch Office",
    "Aadhar Number",
    "PAN Number",
    "Driver Name",
    "Driver Mobile Number",
    "Driver Alternate Number",
    "Status",
    "Date Added",
    "Added By",
    "Last Edited Date",
    "Last Edited By",
];

const ViewTransports: FC = () => {
	const [transports, setTransport] = useState<Transport[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			const response: Transport[] = await getAllData("/transport");
			setTransport(response);
			return response;
		};

		fetchData();
	}, []);

	return (
		<>
			{transports.length > 0 ? (
				<TableGenerator title="transport" label={labels} data={transports} />
			) : (
				<div className="w-full grid place-items-center">
					<div className="flex flex-col justify-center items-center gap-10">
						<SearchOff sx={{ fontSize: 150 }} />
						<h1 className="text-2xl">No transports found</h1>
						<NavLink to={`/transport/add`}>
						<div className="flex flex-col justify-center gap-3">
						<Button size="large" variant="contained" color="success">
							<AddCircleRounded />
						</Button>
						<p>Click to add transport</p>
						</div>
					</NavLink>
					</div>
				</div>
			)}
		</>
	);
};

export default ViewTransports;
