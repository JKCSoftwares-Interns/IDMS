import { useParams } from "react-router-dom";
import PageAnimate from "../../components/PageAnimate";
import MuiFormUpdate from "../../components/MuiFormUpdate";

const UpdateSupplier = () => {
	
  /* Fields are defined below */

  const { supplierId } = useParams();

	return (
		<PageAnimate className={"w-full"}>
			<MuiFormUpdate
        title={"suppliers"}
        id={supplierId}
				readonly={readOnlyFields}
				fields={fields}
				categories={categories}
			/>
		</PageAnimate>
	);
};

export default UpdateSupplier;

/*---------Fields-----------------*/

const categories = [
    "Basic Info",
    "Contact Info",
    "Address",
    "Legal Info",
    "Status Info",
];

const readOnlyFields = [
    { label: "Supplier ID", name: "supplierId", type: "text" },
    { label: "Date Added", name: "dateAdded", type: "date" },
    { label: "Added By", name: "addedBy", type: "text" },
    { label: "Last Edited Date", name: "lastEditedDate", type: "date" },
    { label: "Last Edited By", name: "lastEditedBy", type: "text" },
];

const fields = [
    {
        label: "Name",
        name: "name",
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
        label: "City",
        name: "city",
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
        label: "Beneficiary Name",
        name: "beneficiaryName",
        type: "text",
        category: "Legal Info",
    },
    {
        label: "Account Number",
        name: "accountNumber",
        type: "number",
        category: "Legal Info",
    },
    {
        label: "IFSC Code",
        name: "ifscCode",
        type: "number",
        category: "Legal Info",
    },
    {
        label: "Virtual Payment Address",
        name: "virtualPaymentAddress",
        type: "text",
        category: "Legal Info",
    },
    {
        label: "Remarks",
        name: "remarks",
        type: "text",
        category: "Status Info",
    },
];