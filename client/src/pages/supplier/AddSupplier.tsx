import { useState } from "react";
import PageAnimate from "../../components/PageAnimate";
import AddForm from "../../components/AddForm";
import { Field, initializeFormData } from "../../utils/formHelper";

/* Order to `data` and `interface` should match. */

interface Supplier {
	supplierName: string;
	businessName: string;
	email: string;
	mobileNumber: number;
	alternateMobileNumber: number;
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
	// [key: string | number ]: React.ReactNode;
}
const metadata: Field<Supplier>[] = [
    /* BASIC INFO */
	{ name: "supplierName", type: "string", label: "Supplier Name", placeholder: "The Supplier", category: "Basic Info" },
	{ name: "businessName", type: "string", label: "Business Name", placeholder: "The Business", category: "Basic Info" },


	// Contact Info
	{ name: "email", type: "string", label: "Email", placeholder: "temp123@gmail.com", category: "Contact Info" },
	{ name: "mobileNumber", type: "number", label: "Mobile Number", placeholder: "XXXXXXXXXX", category: "Contact Info" },
	{ name: "alternateMobileNumber", type: "number", label: "Alternate Mobile Number", placeholder: "XXXXXXXXXX", category: "Contact Info" },



	/* Address Details */
	{ name: "addressLine1", type: "string", label: "Address Line 1", placeholder: "The Address", category: "Address Details" },
	{ name: "addressLine2", type: "string", label: "Address Line 2", placeholder: "The Address", category: "Address Details" },
	{ name: "city", type: "string", label: "City", placeholder: "The City", category: "Address Details" },
	{ name: "state", type: "string", label: "State", placeholder: "The State", category: "Address Details" },
	{ name: "pinCode", type: "number", label: "Pin Code", placeholder: "XXXXXX", category: "Address Details" },


	/* Legal Info */
	{ name: "beneficiaryName", type: "string", label: "Beneficiary Name", placeholder: "The Name", category: "Legal Info" },
	{ name: "accountNumber", type: "string", label: "Account Number", placeholder: "XXXXXXXXXXXX", category: "Legal Info" },
	{ name: "ifscCode", type: "string", label: "IFSC Code", placeholder: "XXXXXXXXXX", category: "Legal Info" },
	{ name: "virtualPaymentAddress", type: "string", label: "Virtual Payment Address", placeholder: "XXXXXXXXXX", category: "Legal Info" },
	/* Status Info */
	{ name: "remarks", type: "string", label: "Remarks", placeholder: "Remarks", category: "Status Info" },
];

const AddSuppliers = () => {
	const [formData, setFormData] = useState<Supplier>(initializeFormData(metadata));

	// console.log("formData: ", formData);

	return (
		<PageAnimate className={"w-full"}>
			<div className="w-full p-6 flex justify-center items-center gap-5">
				<div className="bg-opacity-30 p-4 h-fit rounded-md items-center justify-center flex-col flex gap-5">
					<h1 className="font-extrabold text-2xl border-b w-fit pb-2">
						Add to Suppliers List
					</h1>

					<AddForm
						title="suppliers"
						formData={formData}
						setFormData={setFormData}
						metadata={metadata}
					/>
				</div>
			</div>
		</PageAnimate>
	);
};

export default AddSuppliers;
