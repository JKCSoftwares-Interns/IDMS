import PageAnimate from "../../components/PageAnimate";
import { useParams } from "react-router-dom";
import UpdateForm from "../../components/UpdateForm";
import { FieldUpdater } from "../../utils/formHelper";
import { useState } from "react";

interface Product {
	productId: string;
	productName: string;
	category: string;
	measuringUnit: string;
	packSize: number;
	noOfUnits: number;
	unitMRP: number;
	packMRP: number;
	manufacturer: string;
	marketer: string;
	supplier: string;
	upc: string;
	hsn: string;
	cgst: number;
	sgst: number;
	igst: number;
	cess: number;
	loadPrice: number;
	unloadingPrice: number;
	dateAdded: Date;
	addedBy: string;
	lastEditedDate: Date;
	lastEditedBy: string;
}

const UpdateProduct = () => {
	const { productId } = useParams();

	const [data, setData] = useState({} as Product[]);

	if (!productId) {
		return <h1>Product ID not found</h1>;
	}

	return (
		<PageAnimate className={"w-full"}>
			<UpdateForm
				title={"products"}
				id={productId}
				data={data}
				metadata={metadata}
				setData={setData}
			/>
		</PageAnimate>
	);
};

export default UpdateProduct;

/*-------metadata-------*/

const metadata: FieldUpdater<Product>[] = [
	/* BASIC INFO */
	{
		name: "productId",
		type: "string",
		label: "Product ID",
		placeholder: "ID",
		category: "Basic Info",
		readonly: true,
	},
	{
		name: "productName",
		type: "string",
		label: "Product Name",
		placeholder: "The Product",
		category: "Basic Info",
		readonly: false,
	},
	{
		name: "category",
		type: "string",
		label: "Category",
		placeholder: "(e.g. Electronics, Groceries)",
		category: "Basic Info",
		readonly: false,
	},
	{
		name: "upc",
		type: "string",
		label: "UPC",
		placeholder: "XXXXXXXXXXXXXX",
		category: "UPC & HSN",
		readonly: false,
	},
	{
		name: "hsn",
		type: "string",
		label: "HSN",
		placeholder: "XXXXXXX",
		category: "UPC & HSN",
		readonly: false,
	},
	/* QUANTITY */
	{
		name: "measuringUnit",
		type: "string",
		label: "Measuring Unit",
		placeholder: "m",
		category: "Quantity",
		readonly: false,
	},
	{
		name: "packSize",
		type: "number",
		label: "Pack Size",
		placeholder: "0",
		category: "Quantity",
		readonly: false,
	},
	{
		name: "noOfUnits",
		type: "number",
		label: "No. of Units",
		placeholder: "0",
		category: "Quantity",
		readonly: false,
	},
	/* Vendor Information */
	{
		name: "marketer",
		type: "string",
		label: "Marketer",
		placeholder: "...",
		category: "Vendor Information",
		readonly: false,
	},
	{
		name: "supplier",
		type: "string",
		label: "Supplier",
		placeholder: "...",
		category: "Vendor Information",
		readonly: false,
	},
	{
		name: "manufacturer",
		type: "string",
		label: "Manufacturer",
		placeholder: "...",
		category: "Vendor Information",
		readonly: false,
	},
	/* Taxation */
	{
		name: "cgst",
		type: "number",
		label: "CGST",
		placeholder: "₹",
		category: "Taxation",
		readonly: false,
	},
	{
		name: "sgst",
		type: "number",
		label: "SGST",
		placeholder: "₹",
		category: "Taxation",
		readonly: false,
	},
	{
		name: "igst",
		type: "number",
		label: "IGST",
		placeholder: "₹",
		category: "Taxation",
		readonly: false,
	},
	{
		name: "cess",
		type: "number",
		label: "CESS",
		placeholder: "CESS",
		category: "Taxation",
		readonly: false,
	},
	/* Pricing */
	{
		name: "unitMRP",
		type: "number",
		label: "Unit MRP",
		placeholder: "₹",
		category: "Pricing",
		readonly: false,
	},
	{
		name: "packMRP",
		type: "number",
		label: "Pack MRP",
		placeholder: "₹",
		category: "Pricing",
		readonly: false,
	},
	{
		name: "loadPrice",
		type: "number",
		label: "Load Price",
		placeholder: "₹",
		category: "Pricing",
		readonly: false,
	},
	{
		name: "unloadingPrice",
		type: "number",
		label: "Unloading Price",
		placeholder: "₹",
		category: "Pricing",
		readonly: false,
	},
	/* Additional Fields */
	{
		name: "dateAdded",
		type: "date",
		label: "Date Added",
		placeholder: "Date",
		category: "Additional Info",
		readonly: true,
	},
	{
		name: "addedBy",
		type: "string",
		label: "Added By",
		placeholder: "Name",
		category: "Additional Info",
		readonly: true,
	},
	{
		name: "lastEditedDate",
		type: "date",
		label: "Last Edited Date",
		placeholder: "Date",
		category: "Additional Info",
		readonly: true,
	},
	{
		name: "lastEditedBy",
		type: "string",
		label: "Last Edited By",
		placeholder: "Name",
		category: "Additional Info",
		readonly: true,
	},
];