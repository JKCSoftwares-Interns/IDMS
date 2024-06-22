import { useParams } from "react-router-dom";
import PageAnimate from "../../components/PageAnimate";
import MuiFormUpdate from "../../components/MuiFormUpdate";

// Define the type for URL parameters
type Params = {
  vendorId: string;
};

const UpdateVendor: React.FC = () => {
  // Use type inference for useParams
  const { vendorId } = useParams<Params>();

  return (
    <PageAnimate className={"w-full"}>
      <MuiFormUpdate
        title={"vendors"}
        id={vendorId}
        readonly={readOnlyFields}
        fields={fields}
        categories={categories}
      />
    </PageAnimate>
  );
};

export default UpdateVendor;

// Define types for fields and categories
type Field = {
  label: string;
  name: string;
  type: "text" | "number" | "date"; // Define possible field types
  category?: string; // Category is optional since it's not present in readOnlyFields
};

const categories: string[] = [
  "Basic Info",
  "Contact Info",
  "Address",
  "Legal Info",
  "Status Info",
];

const readOnlyFields: Field[] = [
  { label: "Vendor ID", name: "vendorId", type: "text" },
  { label: "Date Added", name: "dateAdded", type: "date" },
  { label: "Added By", name: "addedBy", type: "text" },
  { label: "Last Edited Date", name: "lastEditedDate", type: "date" },
  { label: "Last Edited By", name: "lastEditedBy", type: "text" },
];

const fields: Field[] = [
  {
    label: "Vendor Name",
    name: "vendorName",
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
    type: "text",
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
  {
    label: "Address Line 1",
    name: "addressLine1",
    type: "text",
    category: "Address",
  },
  {
    label: "Address Line 2",
    name: "addressLine2",
    type: "text",
    category: "Address",
  },
  {
    label: "Landmark",
    name: "landmark",
    type: "text",
    category: "Address",
  },
  {
    label: "City",
    name: "city",
    type: "text",
    category: "Address",
  },
  {
    label: "District",
    name: "district",
    type: "text",
    category: "Address",
  },
  {
    label: "State",
    name: "state",
    type: "text",
    category: "Address",
  },
  {
    label: "Pin Code",
    name: "pinCode",
    type: "number",
    category: "Address",
  },
  {
    label: "GSTIN",
    name: "gstin",
    type: "number",
    category: "Legal Info",
  },
  {
    label: "FSSAI",
    name: "fssai",
    type: "number",
    category: "Legal Info",
  },
  {
    label: "Registration Number",
    name: "registrationNumber",
    type: "number",
    category: "Legal Info",
  },
  {
    label: "Aadhar Number",
    name: "aadharNumber",
    type: "number",
    category: "Legal Info",
  },
  {
    label: "PAN Number",
    name: "panNumber",
    type: "number",
    category: "Legal Info",
  },
  {
    label: "Other Documents",
    name: "otherDocuments",
    type: "text",
    category: "Legal Info",
  },
  {
    label: "Status",
    name: "status",
    type: "text",
    category: "Status Info",
  },
];
