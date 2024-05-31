import { useParams } from "react-router-dom";
import PageAnimate from "../../components/PageAnimate";
import MuiFormUpdate from "../../components/MuiFormUpdate";

const EditProducts = () => {
	
  /* Fields are defined below */

  const { productId } = useParams();

	return (
		<PageAnimate className={"w-full"}>
			<MuiFormUpdate
        title={"products"}
        id={productId}
				readonly={readOnlyFields}
				fields={fields}
				categories={categories}
			/>
		</PageAnimate>
	);
};

export default EditProducts;

/*---------Fields-----------------*/

const categories = [
		"Basic Info",
		"UPC & HSN",
		"Pricing & Quantity",
		"Taxation Relation",
	];

const readOnlyFields = [
	{ label: "Product ID", name: "productId", type: "text" },
	{ label: "Date Added", name: "dateAdded", type: "date" },
	{ label: "Added By", name: "addedBy", type: "text" },
	{ label: "Last Edited Date", name: "lastEditedDate", type: "date" },
	{ label: "Last Edited By", name: "lastEditedBy", type: "text" },
];

const fields = [
	{
		label: "Product Name",
		name: "productName",
		type: "text",
		category: "Basic Info",
	},
	{
		label: "Category",
		name: "category",
		type: "text",
		category: "Basic Info",
	},
	{
		label: "Marketer",
		name: "marketer",
		type: "text",
		category: "Basic Info",
	},
	{
		label: "Supplier",
		name: "supplier",
		type: "text",
		category: "Basic Info",
	},
	{
		label: "Manufacturer",
		name: "manufacturer",
		type: "text",
		category: "Basic Info",
	},
	{ label: "UPC", name: "upc", type: "text", category: "UPC & HSN" },
	{ label: "HSN", name: "hsn", type: "text", category: "UPC & HSN" },
	{
		label: "Measuring Unit",
		name: "measuringUnit",
		type: "text",
		category: "Pricing & Quantity",
	},
	{
		label: "Pack Size",
		name: "packSize",
		type: "number",
		category: "Pricing & Quantity",
	},
	{
		label: "No. of Units",
		name: "noOfUnits",
		type: "number",
		category: "Pricing & Quantity",
	},
	{
		label: "Unit MRP",
		name: "unitMRP",
		type: "number",
		category: "Pricing & Quantity",
	},
	{
		label: "Pack MRP",
		name: "packMRP",
		type: "number",
		category: "Pricing & Quantity",
	},
	{
		label: "Load Price",
		name: "loadPrice",
		type: "number",
		category: "Pricing & Quantity",
	},
	{
		label: "Unloading Price",
		name: "unloadingPrice",
		type: "number",
		category: "Pricing & Quantity",
	},
	{
		label: "CGST",
		name: "cgst",
		type: "number",
		category: "Taxation Relation",
	},
	{
		label: "SGST",
		name: "sgst",
		type: "number",
		category: "Taxation Relation",
	},
	{
		label: "IGST",
		name: "igst",
		type: "number",
		category: "Taxation Relation",
	},
	{
		label: "CESS",
		name: "cess",
		type: "number",
		category: "Taxation Relation",
	},
];
