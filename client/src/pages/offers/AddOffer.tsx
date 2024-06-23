import { useState } from "react";
import PageAnimate from "../../components/PageAnimate";
import AddForm from "../../components/AddForm";
import { Field, initializeFormData } from "../../utils/formHelper";

/* Order to `data` and `interface` should match. */

interface Offer {
    offerName: string;
	offerType: string;
    startDate: string;
    endDate: string;
    offers: string;
    offerApplicabilityFrequency: string;
    applicableTo: string;
    status: string;
    discountValue: number;
    discountPercentage: number;
    maximumDiscountValue: number;
    minimumPurchase: number;
	// [key: string | number ]: React.ReactNode;
}

const metadata: Field<Offer>[] = [
    /* BASIC INFO */
    { name: "offerName", type: "string", label: "Offer Name", placeholder: "The Offer", category: "Basic Info" },
    { name: "offerType", type: "string", label: "Offer Type", placeholder: "Discount/Combo", category: "Basic Info" },
    { name: "startDate", type: "string", label: "Start Date", placeholder: "DD/MM/YYYY", category: "Basic Info" },
    { name: "endDate", type: "string", label: "End Date", placeholder: "DD/MM/YYYY", category: "Basic Info" },

    /* Offer Details */

    { name: "offers", type: "string", label: "Offers", placeholder: "Buy 1 Get 1", category: "Offer Details" },
    { name: "offerApplicabilityFrequency", type: "string", label: "Offer Applicability Frequency", placeholder: "Daily/Weekly/Monthly", category: "Offer Details" },
    { name: "applicableTo", type: "string", label: "Applicable To", placeholder: "All/Selected", category: "Basic Info" },
    { name: "status", type: "string", label: "Status", placeholder: "Active/Inactive", category: "Basic Info" },

    /* Discount Details */
    { name: "discountValue", type: "number", label: "Discount Value", placeholder: "₹", category: "Discount Details" },
    { name: "discountPercentage", type: "number", label: "Discount Percentage", placeholder: "%", category: "Discount Details" },
    { name: "maximumDiscountValue", type: "number", label: "Maximum Discount Value", placeholder: "₹", category: "Discount Details" },
    { name: "minimumPurchase", type: "number", label: "Minimum Purchase", placeholder: "₹", category: "Discount Details" },
];

const AddOffers = () => {
	const [formData, setFormData] = useState<Offer>(initializeFormData(metadata));

	// console.log("formData: ", formData);

	return (
		<PageAnimate className={"w-full"}>
			<div className="w-full p-6 flex justify-center items-center gap-5">
				<div className="bg-opacity-30 p-4 h-fit rounded-md items-center justify-center flex-col flex gap-5">
					<h1 className="font-extrabold text-2xl border-b w-fit pb-2">
						Add to Offers List
					</h1>

					<AddForm
						title="offers"
						formData={formData}
						setFormData={setFormData}
						metadata={metadata}
					/>
				</div>
			</div>
		</PageAnimate>
	);
};

export default AddOffers;
