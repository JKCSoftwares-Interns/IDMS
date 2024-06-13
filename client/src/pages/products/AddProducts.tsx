import { useState } from "react";
import PageAnimate from "../../components/PageAnimate";
import AddForm from "../../components/AddForm";

/* Order to `data` and `interface` should match. */

interface Product {
	productName: string;
	category: string;
	upc: string
	hsn: string;
	measuringUnit: string;
	packSize: number;
	noOfUnits: number;
	manufacturer: string;
	marketer: string;
	supplier: string;
	cgst: number;
	sgst: number;
	igst: number;
	cess: number;
	unitMRP: number;
	packMRP: number;
	loadPrice: number;
	unloadingPrice: number;
	[key: string]: React.ReactNode;
}

const metadata = [
	/* BASIC INFO */
	{ label: "Product Name", placeholder: "The Product", category: "Basic Info" },
	{ label: "Category", placeholder: "(e.g. Electronics, Groceries)", category: "Basic Info" },
	{ label: "UPC", placeholder: "XXXXXXXXXXXXXX", category: "UPC & HSN" },
	{ label: "HSN", placeholder: "XXXXXXX", category: "UPC & HSN" },
	/* QUANTITY */
	{ label: "Measuring Unit", placeholder: "m", category: "Quantity" },
	{ label: "Pack Size", placeholder: "0", category: "Quantity" },
	{ label: "No. of Units", placeholder: "0", category: "Quantity" },
	/* Vendor Information */
	{ label: "Marketer", placeholder: "...", category: "Vendor Information" },
	{ label: "Supplier", placeholder: "...", category: "Vendor Information" },
	{ label: "Manufacturer", placeholder: "...", category: "Vendor Information" },
	/* Taxation */
	{ label: "CGST", placeholder: "₹", category: "Taxation" },
	{ label: "SGST", placeholder: "₹", category: "Taxation" },
	{ label: "IGST", placeholder: "₹", category: "Taxation" },
	{ label: "CESS", placeholder: "CESS", category: "Taxation" },
	/* Pricing */
	{ label: "Unit MRP", placeholder: "₹", category: "Pricing" },
	{ label: "Pack MRP", placeholder: "₹", category: "Pricing" },
	{ label: "Load Price", placeholder: "₹", category: "Pricing" },
	{ label: "Unloading Price", placeholder: "₹", category: "Pricing" },
];

const AddProducts = () => {
	const [formData, setFormData] = useState<Product>({
		productName: "",
		category: "",
		measuringUnit: "",
		packSize: 0,
		noOfUnits: 0,
		unitMRP: 0,
		packMRP: 0,
		manufacturer: "",
		marketer: "",
		supplier: "",
		upc: "",
		hsn: "",
		cgst: 0,
		sgst: 0,
		igst: 0,
		cess: 0,
		loadPrice: 0,
		unloadingPrice: 0,
	});

	return (
		<PageAnimate className={"w-full"}>
			<div className="w-full p-6 flex justify-center items-center gap-5">
				<div className="bg-opacity-30 p-4 h-fit rounded-md items-center justify-center flex-col flex gap-5">
					<h1 className="font-extrabold text-2xl border-b w-fit pb-2">
						Add to Product
					</h1>

					<AddForm
						formData={formData}
						setFormData={setFormData}
						metadata={metadata}
					/>
				</div>
			</div>
		</PageAnimate>
	);
};

export default AddProducts;