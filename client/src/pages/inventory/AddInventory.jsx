import { useState, useEffect } from "react";
import PageAnimate from "../../components/PageAnimate";
import MuiInventoryAdd from "../../components/MuiInventoryAdd";
import { getData } from "../../data/advance";

const AddInventory = () => {
	const [supplier, setSupplier] = useState([]);
	const reason = ["Reason 1", "Reason 2", "Reason 3", "Reason 4", "Reason 5"]

	useEffect(() => {
		const fetchProductsAndSupplier = async () => {
			const supplierData = await getData("/inventory/supp", "supplier");
			setSupplier(supplierData);
		};

		fetchProductsAndSupplier();
	}, []);

	return (
		<PageAnimate className="w-full flex flex-col items-center justify-center">
			<div className="w-full flex flex-col items-center justify-center">
				<MuiInventoryAdd
					title={"inventory"}
					fields={[EntryGoods, AddGoodFields]}
					options={[supplier, reason]}
				/>
			</div>
		</PageAnimate>
	);
};

export default AddInventory;

/*----------------------FIELDS----------------------*/

/* One-time information */
const EntryGoods = [
	{
		label: "Ordered Date",
		name: "orderedDate",
		type: "date",
	},
	{
		label: "Date of Entry",
		name: "dateOfEntry",
		type: "date",
	},
	{
		label: "Supplier",
		name: "supplier",
		type: "autocomplete",
	},
	{
		label: "Reason/Purpose",
		name: "reason",
		type: "autocomplete",
	},
	{
		label: "Added By",
		name: "addedBy",
		type: "text",
	},
];

/* Iterative information */
const AddGoodFields = [
	{
		label: "Product Name",
		name: "productName",
		type: "autocomplete",
	},
	{
		label: "Date of Manufacturing",
		name: "dateOfManufacture",
		type: "date",
	},
	{
		label: "Date of Expiry",
		name: "dateOfExpiry",
		type: "date",
	},
	{
		label: "Quantity",
		name: "quantity",
		type: "number",
	},
	{
		label: "Purchase Price",
		name: "purchasePrice",
		type: "number",
	},
	{
		label: "Selling Price",
		name: "sellingPrice",
		type: "number",
	},
	{
		label: "Batch Number",
		name: "batchNumber",
		type: "text",
	},
	{
		label: "Storage Location",
		name: "storageLocation",
		type: "text",
	},
	{
		label: "Additional Note",
		name: "additionalNote",
		type: "text",
	},
];
