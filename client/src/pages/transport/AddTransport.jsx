import PageAnimate from "../../components/PageAnimate";
import MuiFormAdd from "../../components/MuiFormAdd";

const AddTransport = () => {

    /* Fields Defined below */

    return (
        <PageAnimate className={"w-full flex flex-col items-center justify-center"}>

            {/* <p className="text-slate-500">Fill the form</p> */}

            <div
                className="w-3/4 grid place-items-center p-6 mb-5"
            >
                <MuiFormAdd
                    title={"transport"}
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
    "Driver Details",
];

const fields = [
    /* Basic Info */
    {
        label: "Transport Name",
        name: "transportName",
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
        label: "Vehicle Name",
        name: "vehicleName",
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
        type: "number",
        category: "Basic Info",
    },
    {
        label: "Alternate Mobile Number",
        name: "alternatemobileNumber",
        type: "number",
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

    /* Driver Details */
    {
        label: "Aadhar Number",
        name: "aadharNumber",
        type: "number",
        category: "Driver Details",
    },
    {
        label: "PAN Number",
        name: "panNumber",
        type: "text",
        category: "Driver Details",
    },
    {
        label: "Driver Name",
        name: "driverName",
        type: "text",
        category: "Driver Details",
    },
    {
        label: "Driver Mobile Number",
        name: "drivermobileNumber",
        type: "number",
        category: "Driver Details",
    },
    {
        label: "Driver Alternate Number",
        name: "driveralternateNumber",
        type: "number",
        category: "Driver Details",
    },
];