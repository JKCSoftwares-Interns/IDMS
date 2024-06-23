import PageAnimate from "../../components/PageAnimate";
import { useParams } from "react-router-dom";
import UpdateForm from "../../components/UpdateForm";
import { FieldUpdater } from "../../utils/formHelper";
import { useState } from "react";

interface Offer {
	offerId: string;
    offerType: string;
    offerName: string;
    startDate: string;
    endDate: string;
    offers: string;
    discountValue: number;
    discountPercentage: number;
    maximumDiscountValue: number;
    minimumPurchase: number;
    offerApplicabilityFrequency: string;
    applicableTo: string;
    status: string;
    dateAdded: string;
    addedBy: string;
    lastEditedDate: string;
    lastEditedBy: string;
}

const UpdateOffer: React.FC = () => {
	const { offerId } = useParams();

	const [data, setData] = useState({} as Offer[]);

	if (!offerId) {
		return <h1>Offer ID not found</h1>;
	}

	return (
		<PageAnimate className={"w-full"}>
			<UpdateForm
				title={"offers"}
				id={offerId}
				data={data}
				metadata={metadata}
				setData={setData}
			/>
		</PageAnimate>
	);
};

export default UpdateOffer;

const metadata: FieldUpdater<Offer>[] = [
	/* Basic Info */
	{
		name: "offerId",
		type: "string",
		label: "Offer ID",
		placeholder: "Offer ID",
		category: "Basic Info",
		readonly: true,
	},
	{
		name: "offerType",
		type: "string",
		label: "Offer Type",
		placeholder: "Offer Type",
		category: "Basic Info",
		readonly: false,
	},
	{
		name: "offerName",
		type: "string",
		label: "Offer Name",
		placeholder: "Offer Name",
		category: "Basic Info",
		readonly: false,
	},
	{
		name: "startDate",
		type: "date",
		label: "Start Date",
		placeholder: "Start Date",
		category: "Basic Info",
		readonly: false,
	},
	{
		name: "endDate",
		type: "date",
		label: "End Date",
		placeholder: "End Date",
		category: "Basic Info",
		readonly: false,
	},

	/* Offer Details */
	{
		name: "offerApplicabilityFrequency",
		type: "number",
		label: "Offer Applicability Frequency",
		placeholder: "Offer Applicability Frequency",
		category: "Offer Details",
		readonly: false,
	},
	{
		name: "applicableTo",
		type: "number",
		label: "Applicable To",
		placeholder: "Applicable To",
		category: "Offer Details",
		readonly: false,
	},
	{
		name: "status",
		type: "number",
		label: "Status",
		placeholder: "Status",
		category: "Offer Details",
		readonly: false,
	},

	/* Discount Details */
	{
		name: "discountValue",
		type: "number",
		label: "Discount Value",
		placeholder: "Discount Value",
		category: "Discount Details",
		readonly: false,
	},
	{
		name: "discountPercentage",
		type: "string",
		label: "Discount Percentage",
		placeholder: "Discount Percentage",
		category: "Discount Details",
		readonly: false,
	},
	{
		name: "maximumDiscountValue",
		type: "string",
		label: "Maximum Discount Value",
		placeholder: "Maximum Discount Value",
		category: "Discount Details",
		readonly: false,
	},
	{
		name: "minimumPurchase",
		type: "string",
		label: "Minimum Purchase",
		placeholder: "Minimum Purchase",
		category: "Discount Details",
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
