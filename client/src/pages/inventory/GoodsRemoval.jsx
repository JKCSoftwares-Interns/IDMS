import { useParams } from "react-router-dom";
import PageAnimate from "../../components/PageAnimate";
import MuiFormUpdate from "../../components/MuiFormUpdate";
import { useState } from "react";

const GoodsRemoval = () => {
    const { removelId } = useParams();

    // Fields definition
    const fields = [
        { label: "Date of Manufacturing", name: "dateOfManufacturing", type: "date", category: "Basic Info" },
        { label: "Date of Expiry", name: "dateOfExpiry", type: "date", category: "Basic Info" },
        { label: "Quantity", name: "quantity", type: "number", category: "Basic Info" },
        { label: "Purchase Price", name: "purchasePrice", type: "number", category: "Basic Info" },
        { label: "Selling Price", name: "sellingPrice", type: "number", category: "Basic Info" },
        { label: "Batch Number", name: "batchNumber", type: "text", category: "Basic Info" },
        { label: "Storage Location", name: "storageLocation", type: "text", category: "Basic Info" },
        { label: "Additional Note", name: "additionalNote", type: "text", category: "Basic Info" },
        { label: "Available Quantity", name: "availableQuantity", type: "number", category: "Quantity details" },
        { label: "Quantity To Exit", name: "quantityToExit", type: "number", category: "Quantity details" },
        { label: "Reason/Purpose", name: "reasonOrPurpose", type: "text", category: "Quantity details" }
    ];

    // Categories definition
    const categories = ["Basic Info", "Quantity details"];

    return (
        <PageAnimate className={"w-full"}>
            <MuiFormUpdate
                title={"Remove"}
                id={removelId}
                fields={fields}
                categories={categories}
            />
        </PageAnimate>
    );
};

export default GoodsRemoval;

