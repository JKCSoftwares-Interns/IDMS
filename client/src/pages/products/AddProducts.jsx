import PageAnimate from "../../components/PageAnimate";
import MuiFormAdd from "../../components/MuiFormAdd";

const AddProducts = () => {

	return (
		<PageAnimate className={"w-full flex flex-col items-center justify-center"}>

			{/* <p className="text-slate-500">Fill the form</p> */}

			<div
				className="w-3/4 grid place-items-center p-6 mb-5"
			>
				<MuiFormAdd
					title={"products"}
					categories={categories}
					fields={fields}
				/>

			</div>
		</PageAnimate>
	);
};

export default AddProducts;


/*-------------------------FIELDS-------------------*/

const categories = [
	"Basic Info",
	"UPC & HSN",
	"Pricing & Quantity",
	"Taxation Relation",
];

const fields = [
	/* Basic Info */
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
		label: "Manufacturer",
		name: "manufacturer",
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

	/*  UPC & HSN  */
	{ label: "UPC", name: "upc", type: "number", category: "UPC & HSN" },
	{ label: "HSN", name: "hsn", type: "number", category: "UPC & HSN" },

	/* Pricing & Quantity details? */
	{
		label: "Measuring Unit",
		name: "measuringUnit",
		type: "text",
		category: "Pricing & Quantity",
	},
	{
		label: "Number of Units",
		name: "noOfUnits",
		type: "number",
		category: "Pricing & Quantity",
	},
	{
		label: "Pack Size",
		name: "packSize",
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
		label: "Unit MRP",
		name: "unitMRP",
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

	/* Taxation Relation */
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