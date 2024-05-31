import PageAnimate from "../../components/PageAnimate";
import MuiFormAdd from "../../components/MuiFormAdd";

const AddVendors = () => {

    /* Fields Defined below */

    return (
        <PageAnimate className={"w-full flex flex-col items-center justify-center"}>

            {/* <p className="text-slate-500">Fill the form</p> */}

            <div
                className="w-3/4 grid place-items-center p-6 mb-5"
            >
                <MuiFormAdd
                    title={"vendors"}
                    categories={categories}
                    fields={fields}
                />

            </div>
        </PageAnimate>
    );
};

export default AddVendors;


/*-------------------------FIELDS----------------*/

const categories = [
    "Basic Info",
    "Address Details",
    "Registration Details",
];

const fields = [
    /* Basic Info */
    {
        label: "Vendor ID",
        name: "vendorId",
        type: "text",
        category: "Basic Info",
    },
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
        type: "email",
        category: "Basic Info",
    },
    {
        label: "Mobile Number",
        name: "mobileNumber",
        type: "tel",
        maxLength: 10,
        category: "Basic Info",
    },
    {
        label: "Alternate Mobile Number",
        name: "alternateMobileNumber",
        type: "tel",
        maxLength: 10,
        category: "Basic Info",
    },
    {
      label: "Status",
      name: "status",
      type: "text",
      category: "Basic Info",
  },

    /* Address Details */
    {
        label: "Address Line 1",
        name: "addressLine1",
        type: "text",
        category: "Address Details",
    },
    {
        label: "Address Line 2",
        name: "addressLine2",
        type: "text",
        category: "Address Details",
    },
    {
        label: "Landmark",
        name: "landmark",
        type: "text",
        category: "Address Details",
    },
    {
        label: "City",
        name: "city",
        type: "text",
        category: "Address Details",
    },
    {
        label: "District",
        name: "district",
        type: "text",
        category: "Address Details",
    },
    {
        label: "State",
        name: "state",
        type: "text",
        category: "Address Details",
    },
    {
        label: "Pin Code",
        name: "pinCode",
        type: "number",
        maxLength: 6,
        category: "Address Details",
    },

    /* Registration Details */
    {
        label: "GSTIN",
        name: "gstin",
        type: "text",
        category: "Registration Details",
    },
    {
        label: "FSSAI",
        name: "fssai",
        type: "text",
        category: "Registration Details",
    },
    {
        label: "Registration Number",
        name: "registrationNumber",
        type: "text",
        category: "Registration Details",
    },
    {
        label: "Aadhar Number",
        name: "aadharNumber",
        type: "number",
        maxLength: 12,
        category: "Registration Details",
    },
    {
        label: "PAN Number",
        name: "panNumber",
        type: "text",
        category: "Registration Details",
    },
    {
        label: "Other Documents",
        name: "otherDocuments",
        type: "text",
        category: "Registration Details",
    },
];