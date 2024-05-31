import { useParams } from "react-router-dom";
import PageAnimate from "../../components/PageAnimate";
import MuiFormUpdate from "../../components/MuiFormUpdate";

const EditOffer = () => {
	/* Fields are defined below */

	const { offerId } = useParams();

	return (
		<PageAnimate className={"w-full"}>
			<MuiFormUpdate
				title={"offers"}
				id={offerId}
				readonly={readOnlyFields}
				fields={fields}
				categories={categories}
			/>
		</PageAnimate>
	);
};

export default EditOffer;

/*-------------Fields---------------------*/

const readOnlyFields = [
	"offerId",
	"dateAdded",
	"addedBy",
	"lastEditedDate",
	"lastEditedBy",
];

const categories = [
    "Basic Info",
    "Offer Details",
    "Discount Details",
];


const fields = [
    /* Basic Info */
    {
        label: "Offer Type",
        name: "offerType",
        type: "text",
        category: "Basic Info",
    },
    {
        label: "Offer Name",
        name: "offerName",
        type: "text",
        category: "Basic Info",
    },
    {
        label: "Start Date",
        name: "startDate",
        type: "number",
        category: "Basic Info",
    },
    {
        label: "End Date",
        name: "endDate",
        type: "number",
        category: "Basic Info",
    },

    /* Offer Details */
    {
        label: "Products",
        name: "products",
        type: "number",
        category: "Offer Details",
    },
    {
        label: "Offer Applicability Frequency",
        name: "offerApplicabilityFrequency",
        type: "number",
        category: "Offer Details",
    },
    {
        label: "Applicable To",
        name: "applicableTo",
        type: "number",
        category: "Offer Details",
    },
    {
        label: "Status",
        name: "status",
        type: "number",
        category: "Offer Details",
    },

    /* Discount Details */
    {
        label: "Discount Value",
        name: "discountValue",
        type: "number",
        category: "Discount Details",
    },
    {
        label: "Discount Percentage",
        name: "discountPercentage",
        type: "text",
        category: "Discount Details",
    },
    {
        label: "Maximum Discount Value",
        name: "maximumDiscountValue",
        type: "text",
        category: "Discount Details",
    },
    {
        label: "Minimum Purchase",
        name: "minimumPurchase",
        type: "text",
        category: "Discount Details",
    }
];