import { useParams } from "react-router-dom";
import PageAnimate from "../../components/PageAnimate";
import MuiFormUpdate from "../../components/MuiFormUpdate";
import { useState } from "react";

const GoodsRemoval = () => {
    const { removelId } = useParams();

    // Fields definition with readOnly property for Basic Info fields
    const fields = [
        { label: "Inventory Log Id", name: "Inventorylogid", type: "text", category: "Basic Info", readOnly: true },
        { label: "Date of Manufacturing", name: "dateOfManufacturing", type: "date", category: "Basic Info", readOnly: true },
        { label: "Date of Expiry", name: "dateOfExpiry", type: "date", category: "Basic Info", readOnly: true },
        { label: "Quantity", name: "quantity", type: "number", category: "Basic Info", readOnly: true },
        { label: "Purchase Price", name: "purchasePrice", type: "number", category: "Basic Info", readOnly: true },
        { label: "Selling Price", name: "sellingPrice", type: "number", category: "Basic Info", readOnly: true },
        { label: "Batch Number", name: "batchNumber", type: "text", category: "Basic Info", readOnly: true },
        { label: "Storage Location", name: "storageLocation", type: "text", category: "Basic Info", readOnly: true },
        { label: "Additional Note", name: "additionalNote", type: "text", category: "Basic Info", readOnly: true },
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

export default GoodsRemoval;