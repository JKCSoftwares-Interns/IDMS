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
                    title={"suppliers"}
                    categories={categories}
                    fields={fields}
                />

            </div>
        </PageAnimate>
    );
};

export default AddSupplier;


/*-------------------------FIELDS-------------------*/

const categories = [
    "Basic Info",
    "Contact Info",
    "Address Details",
    "Payment Details",
    "Status Info",
];

const fields = [
    /* Basic Info */
    // {
    //     label: "Supplier ID",
    //     name: "supplierid",
    //     type: "text",
    //     category: "Basic Info",
    // },
    {
        label: "Supplier Name",
        name: "supplierName",
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
        label: "City",
        name: "city",
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
        label: "PIN Code",
        name: "pinCode",
        type: "number",
        category: "Address Details",
    },



    /* Legal Info */
    {
        label: "Beneficiary Name",
        name: "beneficiaryName",
        type: "text",
        category: "Payment Details",
    },

    {
        label: "Account Number",
        name: "accountNumber",
        type: "text",
        category: "Payment Details",
    },
    
    
    {
        label: "IFSC Code",
        name: "ifscCode",
        type: "text",
        category: "Payment Details",
    },

    {
        label: "Virtual Payment Address",
        name: "virtualPaymentAddress",
        type: "text",
        category: "Payment Details",
    },

    /* Status Info */
    {
        label: "Remarks",
        name: "remarks",
        type: "text",
        category: "Status Info",
    },
];