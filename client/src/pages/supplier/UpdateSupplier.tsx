import PageAnimate from "../../components/PageAnimate";
import { useParams } from "react-router-dom";
import UpdateForm from "../../components/UpdateForm";
import { FieldUpdater } from "../../utils/formHelper";
import { useState } from "react";

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

const UpdateSupplier = () => {
	
    const { supplierId } = useParams();

	const [data, setData] = useState({} as Supplier[]);

	if (!supplierId) {
		return <h1>Product ID not found</h1>;
	}

	return (
		<PageAnimate className={"w-full"}>
			<UpdateForm
				title={"suppliers"}
				id={supplierId}
				data={data}
				metadata={metadata}
				setData={setData}
			/>
		</PageAnimate>
	);

};

export default UpdateSupplier;

/*---------Fields-----------------*/

const metadata: FieldUpdater<Supplier>[] = [
    /* Basic Info */
    {
		name: "supplierId",
		type: "string",
		label: "Supplier ID",
		placeholder: "ID",
		category: "Basic Info",
		readonly: true,
	},
    {
        name: "supplierName",
        type: "string",
        label: "Supplier Name",
        placeholder: "Supplier Name",
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
        name: "city",
        type: "string",
        label: "City",
        placeholder: "City",
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
        label: "PIN Code",
        placeholder: "PIN Code",
        category: "Address Details",
        readonly: false,
    },

    /* Payment Details */
    {
        name: "beneficiaryName",
        type: "string",
        label: "Beneficiary Name",
        placeholder: "Beneficiary Name",
        category: "Payment Details",
        readonly: false,
    },
    {
        name: "accountNumber",
        type: "string",
        label: "Account Number",
        placeholder: "Account Number",
        category: "Payment Details",
        readonly: false,
    },
    {
        name: "ifscCode",
        type: "string",
        label: "IFSC Code",
        placeholder: "IFSC Code",
        category: "Payment Details",
        readonly: false,
    },
    {
        name: "virtualPaymentAddress",
        type: "string",
        label: "Virtual Payment Address",
        placeholder: "Virtual Payment Address",
        category: "Payment Details",
        readonly: false,
    },

    /* Status Info */
    {
        name: "remarks",
        type: "string",
        label: "Remarks",
        placeholder: "Remarks",
        category: "Status Info",
        readonly: false,
    },
    /* Additional Fields */
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