import PageAnimate from "../../components/PageAnimate";
import MuiFormAdd from "../../components/MuiFormAdd";

const AddSupplier = () => {

    /* Fields Defined below */

    return (
        <PageAnimate className={"w-full flex flex-col items-center justify-center"}>

            {/* <p className="text-slate-500">Fill the form</p> */}

            <div
                className="w-3/4 grid place-items-center p-6 mb-5"
            >
                <MuiFormAdd
                    title={"transporsupplier"}
                    categories={categories}
                    fields={fields}
                />

            </div>
        </PageAnimate>
    );
};

export default AddTransport;


/*-------------------------FIELDS-------------------*/

const categories = [
    "Basic Info",
    "Address Details",
    "Payment Details",
];

const fields = [
    /* Basic Info */
    {
        label: "Supplier ID",
        name: "supplierid",
        type: "text",
        category: "Basic Info",
    },
    {
        label: "Name",
        name: "name",
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
        label: "Mobile Number",
        name: "mobilenumber",
        type: "number",
        category: "Basic Info",
    },
    {
        label: "Alternate Mobile Number",
        name: "alternatemobilenumber",
        type: "number",
        category: "Basic Info",
    },
    {
        label: "Email",
        name: "email",
        type: "email",
        category: "Basic Info",
    },
    /* Address Details */
    {
        label: "Address Line 1",
        name: "addressline1",
        type: "text",
        category: "Address Details",
    },
    {
        label: "Address Line 2",
        name: "addressline2",
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
        label: "Pincode",
        name: "pincode",
        type: "number",
        category: "Address Details",
    },
    {
        label: "Branch Office",
        name: "branchoffice",
        type: "text",
        category: "Address Details",
    },

    /* payment Details */
    {
        label: "Beneficiary Name",
        name: "beneficiaryname",
        type: "text",
        category: "Payment Details",
    },
    {
        label: "Account Number",
        name: "accountnumber",
        type: "text",
        category: "Payment Details",
    },
    {
        label: "IFSC Code",
        name: "ifsccode",
        type: "text",
        category: "Payment Details",
    },
    {
        label: "Virtual Payment Address",
        name: "virtualpaymentaddress",
        type: "text",
        category: "Payment Details",
    },
    {
        label: "Remarks",
        name: "remarks",
        type: "text",
        category: "Payment Details",
    },
];