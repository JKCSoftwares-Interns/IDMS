import PageAnimate from "../../components/PageAnimate";
import { useParams } from "react-router-dom";
import UpdateForm from "../../components/UpdateForm";
import { FieldUpdater } from "../../utils/formHelper";
import { useState } from "react";

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

const UpdateVendor: React.FC = () => {
	const { vendorId } = useParams();

	const [data, setData] = useState({} as Vendor[]);

	if (!vendorId) {
		return <h1>Product ID not found</h1>;
	}

	return (
		<PageAnimate className={"w-full"}>
			<UpdateForm
				title={"vendors"}
				id={vendorId}
				data={data}
				metadata={metadata}
				setData={setData}
			/>
		</PageAnimate>
	);
};

export default UpdateVendor;

const metadata: FieldUpdater<Vendor>[] = [
	/* Basic Info */
	{
		name: "vendorId",
		type: "string",
		label: "Supplier ID",
		placeholder: "ID",
		category: "Basic Info",
		readonly: true,
	},
	{
		name: "vendorName",
		type: "string",
		label: "Vendor Name",
		placeholder: "Vendor Name",
		category: "Basic Info",
		readonly: false,
	},
	{
		name: "businessName",
		type: "string",
		label: "Business Name",
		placeholder: "Business Name",
		category: "Basic Info",
		readonly: false,
	},

	/* Contact Info */
	{
		name: "email",
		type: "string",
		label: "Email",
		placeholder: "Email",
		category: "Contact Info",
		readonly: false,
	},
	{
		name: "mobileNumber",
		type: "number",
		label: "Mobile Number",
		placeholder: "Mobile Number",
		category: "Contact Info",
		readonly: false,
	},
	{
		name: "alternateMobileNumber",
		type: "number",
		label: "Alternate Mobile Number",
		placeholder: "Alternate Mobile Number",
		category: "Contact Info",
		readonly: false,
	},

	/* Address Details */
	{
		name: "addressLine1",
		type: "string",
		label: "Address Line 1",
		placeholder: "Address Line 1",
		category: "Address Details",
		readonly: false,
	},
	{
		name: "addressLine2",
		type: "string",
		label: "Address Line 2",
		placeholder: "Address Line 2",
		category: "Address Details",
		readonly: false,
	},
	{
		name: "landmark",
		type: "string",
		label: "Landmark",
		placeholder: "Landmark",
		category: "Address Details",
		readonly: false,
	},
	{
		name: "city",
		type: "string",
		label: "City",
		placeholder: "City",
		category: "Address Details",
		readonly: false,
	},
	{
		name: "district",
		type: "string",
		label: "District",
		placeholder: "District",
		category: "Address Details",
		readonly: false,
	},
	{
		name: "state",
		type: "string",
		label: "State",
		placeholder: "State",
		category: "Address Details",
		readonly: false,
	},
	{
		name: "pinCode",
		type: "number",
		label: "Pin Code",
		placeholder: "Pin Code",
		category: "Address Details",
		readonly: false,
	},

	/* Legal Info */
	{
		name: "gstin",
		type: "string",
		label: "GSTIN",
		placeholder: "GSTIN",
		category: "Legal Info",
		readonly: false,
	},
	{
		name: "fssai",
		type: "string",
		label: "FSSAI",
		placeholder: "FSSAI",
		category: "Legal Info",
		readonly: false,
	},
	{
		name: "registrationNumber",
		type: "string",
		label: "Registration Number",
		placeholder: "Registration Number",
		category: "Legal Info",
		readonly: false,
	},
	{
		name: "aadharNumber",
		type: "string",
		label: "Aadhar Number",
		placeholder: "Aadhar Number",
		category: "Legal Info",
		readonly: false,
	},
	{
		name: "panNumber",
		type: "string",
		label: "PAN Number",
		placeholder: "PAN Number",
		category: "Legal Info",
		readonly: false,
	},
	{
		name: "otherDocuments",
		type: "string",
		label: "Other Documents",
		placeholder: "Other Documents",
		category: "Legal Info",
		readonly: false,
	},

	/* Status Info */
	{
		name: "status",
		type: "string",
		label: "Status",
		placeholder: "Status",
		category: "Status Info",
		readonly: false,
	},

	/* Additional Info */
	{
		name: "dateAdded",
		type: "date",
		label: "Date Added",
		placeholder: "Date",
		category: "Additional Info",
		readonly: true,
	},
	{
		name: "addedBy",
		type: "string",
		label: "Added By",
		placeholder: "Name",
		category: "Additional Info",
		readonly: true,
	},
	{
		name: "lastEditedDate",
		type: "date",
		label: "Last Edited Date",
		placeholder: "Date",
		category: "Additional Info",
		readonly: true,
	},
	{
		name: "lastEditedBy",
		type: "string",
		label: "Last Edited By",
		placeholder: "Name",
		category: "Additional Info",
		readonly: true,
	},
];
