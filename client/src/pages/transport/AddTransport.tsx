import { useState } from "react";
import PageAnimate from "../../components/PageAnimate";
import AddForm from "../../components/AddForm";
import { Field, initializeFormData } from "../../utils/formHelper";


/* Order to `data` and `interface` should match. */

interface Transport {
	transportName: string;
	businessName: string;
	vehicleName: string;
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
	branchOffice: string;
	aadharNumber: number;
	panNumber: number;
	driverName: string;
	driverMobileNumber: number;
	driverAlternateNumber: number;
	// [key: string | number ]: React.ReactNode;
}

const metadata: Field<Transport>[] = [
    /* BASIC INFO */
    { name: "transportName", type: "string", label: "Transport Name", placeholder: "The Transport", category: "Basic Info" },
    { name: "businessName", type: "string", label: "Business Name", placeholder: "The Business", category: "Basic Info" },
    { name: "vehicleName", type: "string", label: "Vehicle Name", placeholder: "The Vehicle", category: "Basic Info" },
    { name: "email", type: "string", label: "Email", placeholder: "temp123@gmail.com", category: "Basic Info" },
    {name:"mobileNumber", type:"number", label:"Mobile Number", placeholder:"1234567890", category:"Basic Info"},
    {name:"alternateMobileNumber", type:"number", label:"Alternate Mobile Number", placeholder:"1324567890", category:"Basic Info"},
    {name:"status", type:"string", label:"Status", placeholder:"Active/Inactive", category:"Basic Info"},
    /* ADDRESS DETAILS*/
    {name:"addressLine1", type:"string", label:"Address Line 1", placeholder:"The Address", category:"Address"},
    {name:"addressLine2", type:"string", label:"Address Line 2", placeholder:"The Address", category:"Address"},
    {name:"landmark", type:"string", label:"Landmark", placeholder:"The Landmark", category:"Address"},
    {name:"city", type:"string", label:"City", placeholder:"The City", category:"Address"},
    {name:"district", type:"string", label:"District", placeholder:"The District", category:"Address"},
    {name:"state", type:"string", label:"State", placeholder:"The State", category:"Address"},
    {name:"pinCode", type:"number", label:"Pin Code", placeholder:"123456", category:"Address"},
    {name:"branchOffice", type:"string", label:"Branch Office", placeholder:"The Branch Office", category:"Address"},

    /* Driver Details */
    {name:"aadharNumber", type:"number", label:"Aadhar Number", placeholder:"1234567890", category:"Driver Details"},
    {name:"panNumber", type:"number", label:"Pan Number", placeholder:"1234567890", category:"Driver Details"},
    {name:"driverName", type:"string", label:"Driver Name", placeholder:"The Driver Name", category:"Driver Details"},
    {name:"driverMobileNumber", type:"number", label:"Driver Mobile Number", placeholder:"1234567890", category:"Driver Details"},
    {name:"driverAlternateNumber", type:"number", label:"Driver Alternate Number", placeholder:"1234567890", category:"Driver Details"},
];

const AddTransport = () => {
	const [formData, setFormData] = useState<Transport>(initializeFormData(metadata));

	// console.log("formData: ", formData);

	return (
		<PageAnimate className={"w-full"}>
			<div className="w-full p-6 flex justify-center items-center gap-5">
				<div className="bg-opacity-30 p-4 h-fit rounded-md items-center justify-center flex-col flex gap-5">
					<h1 className="font-extrabold text-2xl border-b w-fit pb-2">
						Add to Transports List
					</h1>

					<AddForm
						title="transport"
						formData={formData}
						setFormData={setFormData}
						metadata={metadata}
					/>
				</div>
			</div>
		</PageAnimate>
	);
};

export default AddTransport;
