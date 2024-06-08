
// import PageAnimate from "../../components/PageAnimate";
// import MuiFormAdd from "../../components/MuiFormAdd";

// const GoodsEntry = () => {


//     /*-------------------------FIELDS-------------------*/

//     const categories = [
//         "Goods Entry",
//         "Add Goods"
//     ];

//     const fields = [
//         /* Goods Entry */
//         {
//             label: "Inventory Log ID",
//             name: "ID",
//             type: "number",
//             category: "Goods Entry",
//         },
//         {
//             label: "Ordered Date",
//             name: "Ordered Date",
//             type: "date",
//             category: "Goods Entry",
//         },
//         {
//             label: "Date of Entry",
//             name: "dateOfEntry",
//             type: "date",
//             category: "Goods Entry",
//         },
//         {
//             label: "Supplier",
//             name: "Supplier",
//             type: "text",
//             category: "Goods Entry",
//         },
//         {
//             label: "Reason/Purpose",
//             name: "Reason / Purpose",
//             type: "text",
//             category: "Goods Entry",
//         },
//         {
//             label: "Added By",
//             name: "Added By",
//             type: "text",
//             category: "Goods Entry",
//         },
//         {
//             label: "Last Edited by",
//             name: "Last Edited by",
//             type: "text",
//             category: "Goods Entry",
//         },
//         {
//             label: "Last Edited Date",
//             name: "Last Edited Date",
//             type: "date",
//             category: "Goods Entry",
//         },

//         /*Add Goods*/
//         {
//             label: "Product ID",
//             name: "productID",
//             type: "number",
//             category: "Add Goods",
//         },
//         {
//             label: "Date of Manufacturing",
//             name: "dateOfManufacturing",
//             type: "date",
//             category: "Add Goods",
//         },
//         {
//             label: "Date of Expiry",
//             name: "dateOfExpiry",
//             type: "date",
//             category: "Add Goods",
//         },
//         {
//             label: "Quantity",
//             name: "quantity",
//             type: "number",
//             category: "Add Goods",
//         },
//         {
//             label: "Purchase Price",
//             name: "purchasePrice",
//             type: "number",
//             category: "Add Goods",
//         },
//         {
//             label: "Selling Price",
//             name: "sellingPrice",
//             type: "number",
//             category: "Add Goods",
//         },
//         {
//             label: "Batch Number",
//             name: "batchNumber",
//             type: "number",
//             category: "Add Goods",
//         },
//         {
//             label: "Storage Location",
//             name: "storageLocation",
//             type: "text",
//             category: "Add Goods",
//         },
//         {
//             label: "Additional Note",
//             name: "additionalNote",
//             type: "number",
//             category: "Add Goods",
//         }
//     ];

//     return (
//         <PageAnimate className={"w-full flex flex-col items-center justify-center"}>

//             <div
//                 className="w-full flex flex-col items-center justify-center"
//             >
//                 <MuiFormAdd
//                     title={"Goods Entrys"}
//                     categories={categories}
//                     fields={fields}
//                 />

//             </div>
//         </PageAnimate>
//     );
// };

// export default GoodsEnt




import React, { useState } from 'react';
import PageAnimate from '../../components/PageAnimate';
import MuiFormAdd from '../../components/MuiFormAdd';

const GoodsEntry = () => {
    const [addGoodsCount, setAddGoodsCount] = useState(1);

    const GoodsCategories = [
        "Goods Entry",
        // "Add Goods"
    ];

    const GoodsFields = [
        /* Goods Entry */
        // { label: "Inventory Log ID", name: "ID", type: "number", category: "Goods Entry" },
        { label: "Ordered Date", name: "orderedDate", type: "date", category: "Goods Entry" },
        { label: "Date of Entry", name: "dateOfEntry", type: "date", category: "Goods Entry" },
        { label: "Supplier", name: "supplier", type: "text", category: "Goods Entry" },
        { label: "Reason/Purpose", name: "reason", type: "text", category: "Goods Entry" },
        // { label: "Added By", name: "addedBy", type: "text", category: "Goods Entry" },
        // { label: "Last Edited by", name: "lastEditedBy", type: "text", category: "Goods Entry" },
        // { label: "Last Edited Date", name: "lastEditedDate", type: "date", category: "Goods Entry" },

        /* Add Goods */
        // { label: "Product ID", name: "productId", type: "number", category: "Add Goods" },
        { label: "Date of Manufacturing", name: "dateOfManufacture", type: "date", category: "Add Goods" },
        { label: "Date of Expiry", name: "dateOfExpiry", type: "date", category: "Add Goods" },
        { label: "Quantity", name: "quantity", type: "number", category: "Add Goods" },
        { label: "Purchase Price", name: "purchasePrice", type: "number", category: "Add Goods" },
        { label: "Selling Price", name: "sellingPrice", type: "number", category: "Add Goods" },
        { label: "Batch Number", name: "batchNumber", type: "text", category: "Add Goods" },
        { label: "Storage Location", name: "storageLocation", type: "text", category: "Add Goods" },
        { label: "Additional Note", name: "additionalNote", type: "text", category: "Add Goods" }
    ];

    const addAnotherGoodsSection = () => {
        setAddGoodsCount(addGoodsCount + 1);
    };

    return (
        <PageAnimate className="w-full flex flex-col items-center justify-center">
            <div className="w-full flex flex-col items-center justify-center">
                <MuiFormAdd
                    title={"inventory"}//title={"Goods Entry"}
                    categories={GoodsCategories}
                    fields={GoodsFields}
                    addGoodsCount={addGoodsCount}
                    addAnotherGoodsSection={addAnotherGoodsSection}
                    goodsCategories={GoodsCategories}
                />
            </div>
        </PageAnimate>
    );
};

export default GoodsEntry;
