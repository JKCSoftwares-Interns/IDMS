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
    "Address Details",
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
    /* Basic Info */
    {
        label: "Supplier Name",
        name: "supplierName",
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
        type: "email",
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


    /* Address Details */
    {
        label: "Address Line 1",
        name: "addressLine1",
        type: "text",
        category: "Address Details",
    },
    {
        label: "Address Line 2",
        name: "addressLine2",
        type: "text",
        category: "Address Details",
    },
    {
        label: "City",
        name: "city",
        type: "text",
        category: "Address Details",
    },
    {
        label: "State",
        name: "state",
        type: "text",
        category: "Address Details",
    },
    {
        label: "PIN Code",
        name: "pinCode",
        type: "number",
        category: "Address Details",
    },

    /* Legal Info */
    {
        label: "Beneficiary Name",
        name: "beneficiaryName",
        type: "text",
        category: "Payment Details",
    },
    {
        label: "Account Number",
        name: "accountNumber",
        type: "text",
        category: "Payment Details",
    },
    {
        label: "IFSC Code",
        name: "ifscCode",
        type: "text",
        category: "Payment Details",
    },
    {
        label: "Virtual Payment Address",
        name: "virtualPaymentAddress",
        type: "text",
        category: "Payment Details",
    },

    /* Status Info */
    {
        label: "Remarks",
        name: "remarks",
        type: "text",
        category: "Status Info",
    },
];