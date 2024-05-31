import { useParams } from "react-router-dom";
import PageAnimate from "../../components/PageAnimate";
import MuiFormUpdate from "../../components/MuiFormUpdate";

const UpdateTransport = () => {
	
  /* Fields are defined below */

  const { transportId } = useParams();

	return (
		<PageAnimate className={"w-full"}>
			<MuiFormUpdate
        title={"transports"}
        id={transportId}
				readonly={readOnlyFields}
				fields={fields}
				categories={categories}
			/>
		</PageAnimate>
	);
};

export default UpdateTransport;

/*---------Fields-----------------*/

const categories = [
    "Basic Info",
    "Contact Info",
    "Address",
    "Legal Info",
    "Driver Info",
    "Status Info",
];

const readOnlyFields = [
    { label: "Transport ID", name: "transportId", type: "text" },
    { label: "Date Added", name: "dateAdded", type: "date" },
    { label: "Added By", name: "addedBy", type: "text" },
    { label: "Last Edited Date", name: "lastEditedDate", type: "date" },
    { label: "Last Edited By", name: "lastEditedBy", type: "text" },
];

const fields = [
    {
        label: "Transport Name",
        name: "transportName",
        type: "text",
        category: "Basic Info",
    },
    {
        label: "Business Name",
        name: "businessName",
        type: "text",
        category: "Basic Info",
    },
    {
        label: "Vehicle Name",
        name: "vehicleName",
        type: "text",
        category: "Basic Info",
    },
    {
        label: "Email",
        name: "email",
        type: "text",
        category: "Contact Info",
    },
    {
        label: "Mobile Number",
        name: "mobileNumber",
        type: "number",
        category: "Contact Info",
    },
    {
        label: "Alternate Mobile Number",
        name: "alternateMobileNumber",
        type: "number",
        category: "Contact Info",
    },
    {
        label: "Address Line 1",
        name: "addressLine1",
        type: "text",
        category: "Address",
    },
    {
        label: "Address Line 2",
        name: "addressLine2",
        type: "text",
        category: "Address",
    },
    {
        label: "Landmark",
        name: "landmark",
        type: "text",
        category: "Address",
    },
    {
        label: "City",
        name: "city",
        type: "text",
        category: "Address",
    },
    {
        label: "District",
        name: "district",
        type: "text",
        category: "Address",
    },
    {
        label: "State",
        name: "state",
        type: "text",
        category: "Address",
    },
    {
        label: "Pin Code",
        name: "pinCode",
        type: "number",
        category: "Address",
    },
    {
        label: "Branch Office",
        name: "branchOffice",
        type: "text",
        category: "Address",
    },
    {
        label: "Aadhar Number",
        name: "aadharNumber",
        type: "number",
        category: "Legal Info",
    },
    {
        label: "PAN Number",
        name: "panNumber",
        type: "number",
        category: "Legal Info",
    },
    {
        label: "Driver Name",
        name: "driverName",
        type: "text",
        category: "Driver Info",
    },
    {
        label: "Driver Mobile Number",
        name: "driverMobileNumber",
        type: "number",
        category: "Driver Info",
    },
    {
        label: "Driver Alternate Number",
        name: "driverAlternateNumber",
        type: "number",
        category: "Driver Info",
    },
    {
        label: "Status",
        name: "status",
        type: "text",
        category: "Status Info",
    },
];