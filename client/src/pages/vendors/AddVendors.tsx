import { useState } from "react";
import PageAnimate from "../../components/PageAnimate";
import AddForm from "../../components/AddForm";
import { Field, initializeFormData } from "../../utils/formHelper";

/* Order to `data` and `interface` should match. */

interface Vendor {
	vendorName: string;
	businessName: string;
	email: string;
	mobileNumber: number;
	alternateMobileNumber: number;
	status: string;
	addressLine1: string;
	addressLine2: string;
	landmark: string;
	city: string;
	district: string;
	state: string;
	pinCode: number;
	gstin: string;
	fssai: string;
	registrationNumber: string;
	aadharNumber: number;
	panNumber: string;
	otherDocuments: string;
	// [key: string | number ]: React.ReactNode;
}

const metadata: Field<Vendor>[] = [	
	/* BASIC INFO */
	{ name: "vendorName", type: "string", label: "Vendor Name", placeholder: "The Vendor", category: "Basic Info" },
	{ name: "businessName", type: "string", label: "Business Name", placeholder: "The Business", category: "Basic Info" },
	{ name: "email", type: "string", label: "Email", placeholder: "temp123@gmail.com", category: "Basic Info" },
	{ name: "mobileNumber", type: "number", label: "Mobile Number", placeholder: "1234567890", category: "Basic Info" },
	{ name: "alternateMobileNumber", type: "number", label: "Alternate Mobile Number", placeholder: "1324567890", category: "Basic Info" },
	{ name: "status", type: "string", label: "Status", placeholder: "Active/Inactive", category: "Basic Info" },
	/* ADDRESS DETAILS*/
	{ name: "addressLine1", type: "string", label: "Address Line 1", placeholder: "The Address", category: "Address" },
	{ name: "addressLine2", type: "string", label: "Address Line 2", placeholder: "The Address", category: "Address" },
	{ name: "landmark", type: "string", label: "Landmark", placeholder: "The Landmark", category: "Address" },
	{ name: "city", type: "string", label: "City", placeholder: "The City", category: "Address" },
	{ name: "district", type: "string", label: "District", placeholder: "The District", category: "Address" },
	{ name: "state", type: "string", label: "State", placeholder: "The State", category: "Address" },
	{ name: "pinCode", type: "number", label: "Pin Code", placeholder: "123456", category: "Address" },
	/* REGISTRATION DETAILS */
	{ name: "gstin", type: "string", label: "GSTIN", placeholder: "GSTIN", category: "Registration" },
	{ name: "fssai", type: "string", label: "FSSAI", placeholder: "FSSAI", category: "Registration" },
	{ name: "registrationNumber", type: "string", label: "Registration Number", placeholder: "Registration Number", category: "Registration" },
	{ name: "aadharNumber", type: "number", label: "Aadhar Number", placeholder: "Aadhar Number", category: "Registration" },
	{ name: "panNumber", type: "string", label: "PAN Number", placeholder: "PAN Number", category: "Registration" },
	{ name: "otherDocuments", type: "string", label: "Other Documents", placeholder: "Other Documents", category: "Registration" },
    
];

const AddVendors = () => {
	const [formData, setFormData] = useState<Vendor>(initializeFormData(metadata));

	// console.log("formData: ", formData);

	return (
		<PageAnimate className={"w-full"}>
			<div className="w-full p-6 flex justify-center items-center gap-5">
				<div className="bg-opacity-30 p-4 h-fit rounded-md items-center justify-center flex-col flex gap-5">
					<h1 className="font-extrabold text-2xl border-b w-fit pb-2">
						Add to Vendors List
					</h1>

					<AddForm
						title="vendors"
						formData={formData}
						setFormData={setFormData}
						metadata={metadata}
					/>
				</div>
			</div>
		</PageAnimate>
	);
};

export default AddVendors;
