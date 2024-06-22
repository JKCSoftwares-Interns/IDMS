import { useParams } from "react-router-dom";
import PageAnimate from "../../components/PageAnimate";
import MuiFormUpdate from "../../components/MuiFormUpdate";

// Define the parameter types for the component props
type Params = {
  offerId: string;
};

const EditOffer: React.FC = () => {
  // Use type inference for useParams
  const { offerId } = useParams<Params>();

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

// Define types for fields and categories
type Field = {
  label: string;
  name: string;
  type: "text" | "number"; // Specify the possible types for the field
  category: string;
};

const readOnlyFields: string[] = [
  "offerId",
  "dateAdded",
  "addedBy",
  "lastEditedDate",
  "lastEditedBy",
];

const categories: string[] = [
  "Basic Info",
  "Offer Details",
  "Discount Details",
];

const fields: Field[] = [
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
