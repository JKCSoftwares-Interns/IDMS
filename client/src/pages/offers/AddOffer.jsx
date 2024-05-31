import PageAnimate from "../../components/PageAnimate";
import MuiFormAdd from "../../components/MuiFormAdd";

const AddOffers = () => {

    /* Fields Defined below */

    return (
        <PageAnimate className={"w-full flex flex-col items-center justify-center"}>

            {/* <p className="text-slate-500">Fill the form</p> */}

            <div
                className="w-3/4 grid place-items-center p-6 mb-5"
            >
                <MuiFormAdd
                    title={"offers"}
                    categories={categories}
                    fields={fields}
                />

            </div>
        </PageAnimate>
    );
};

export default AddOffers;


/*-------------------------FIELDS-------------------*/

const categories = [
    "Basic Info",
    "Offer Details",
    "Discount Details",
];

const fields = [
    /* Basic Info */
    {
        label: "Offer Type",
        name: "offertype",
        type: "text",
        category: "Basic Info",
    },
    {
        label: "Offer Name",
        name: "offername",
        type: "text",
        category: "Basic Info",
    },
    {
        label: "Start Date",
        name: "startdate",
        type: "number",
        category: "Basic Info",
    },
    {
        label: "End Date",
        name: "enddate",
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
        name: "offerapplicabilityfrequency",
        type: "number",
        category: "Offer Details",
    },
    {
        label: "Applicable To",
        name: "applicableto",
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
        name: "discountvalue",
        type: "number",
        category: "Discount Details",
    },
    {
        label: "Discount Percentage",
        name: "discountpercentage",
        type: "text",
        category: "Discount Details",
    },
    {
        label: "Maximum Discount Value",
        name: "maximumdiscountvalue",
        type: "text",
        category: "Discount Details",
    },
    {
        label: "Minimum Purchase",
        name: "minimumpurchase",
        type: "text",
        category: "Discount Details",
    }
];