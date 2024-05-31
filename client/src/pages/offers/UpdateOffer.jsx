import { useParams } from "react-router-dom";
import PageAnimate from "../../components/PageAnimate";
import MuiFormUpdate from "../../components/MuiFormUpdate";

const EditOffer = () => {
	/* Fields are defined below */

	const { productId } = useParams();

	return (
		<PageAnimate className={"w-full"}>
			<MuiFormUpdate
				title={"offers"}
				id={productId}
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

const fields = [
	{ label: "Offer ID", name: "offerid", type: "text" },
	{ label: "Offer Type", name: "offertype", type: "text" },
	{ label: "Offer Name", name: "offername", type: "text" },
	{ label: " Start Date", name: "startdate", type: "number" },
	{ label: "End Date", name: "enddate", type: "number" },
	{ label: "Products", name: "products", type: "number" },
	{ label: " Discount Value", name: "discountvalue", type: "number" },
	{ label: "Discount Percentage", name: "discountpercentage", type: "text" },
	{
		label: " Maximum Discount Value",
		name: "maximumdiscountvalue",
		type: "text",
	},
	{ label: "Minimum Purchase", name: "minimumpurchase", type: "text" },
	{
		label: "Offer Applicability Frequency",
		name: "offerapplicabilityfrequency",
		type: "number",
	},
	{ label: "Applicable To", name: "applicableto", type: "number" },
	{ label: " Status", name: "status", type: "number" },
	{ label: "Date Added", name: "dateadded", type: "number" },
	{ label: "Added By", name: "igst", type: "addedby" },
	{ label: "Last Edited Date", name: "lastediteddate", type: "number" },
	{ label: "Last Edited By", name: "lasteditedby", type: "number" },
];
