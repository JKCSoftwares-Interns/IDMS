import { useState } from "react";
import PageAnimate from "../../components/PageAnimate";
import AddForm from "../../components/AddForm";
import { Field, initializeFormData } from "../../utils/formHelper";

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
	igst: number;
	cess: number;
	unitMRP: number;
	sgst: number;
	packMRP: number;
	loadPrice: number;
	unloadingPrice: number;
	// [key: string | number ]: React.ReactNode;
}

const metadata: Field<Product>[] = [
    /* BASIC INFO */
    { name: "productName", type: "string", label: "Product Name", placeholder: "The Product", category: "Basic Info" },
    { name: "category", type: "string", label: "Category", placeholder: "(e.g. Electronics, Groceries)", category: "Basic Info" },
    { name: "upc", type: "string", label: "UPC", placeholder: "XXXXXXXXXXXXXX", category: "UPC & HSN" },
    { name: "hsn", type: "string", label: "HSN", placeholder: "XXXXXXX", category: "UPC & HSN" },
    /* QUANTITY */
    { name: "measuringUnit", type: "number", label: "Measuring Unit", placeholder: "m", category: "Quantity" },
    { name: "packSize", type: "number", label: "Pack Size", placeholder: "0", category: "Quantity" },
    { name: "noOfUnits", type: "number", label: "No. of Units", placeholder: "0", category: "Quantity" },
    /* Vendor Information */
    { name: "marketer", type: "string", label: "Marketer", placeholder: "...", category: "Vendor Information" },
    { name: "supplier", type: "string", label: "Supplier", placeholder: "...", category: "Vendor Information" },
    { name: "manufacturer", type: "string", label: "Manufacturer", placeholder: "...", category: "Vendor Information" },
    /* Taxation */
    { name: "cgst", type: "number", label: "CGST", placeholder: "₹", category: "Taxation" },
    { name: "sgst", type: "number", label: "SGST", placeholder: "₹", category: "Taxation" },
    { name: "igst", type: "number", label: "IGST", placeholder: "₹", category: "Taxation" },
    { name: "cess", type: "number", label: "CESS", placeholder: "CESS", category: "Taxation" },
    /* Pricing */
    { name: "unitMRP", type: "number", label: "Unit MRP", placeholder: "₹", category: "Pricing" },
    { name: "packMRP", type: "number", label: "Pack MRP", placeholder: "₹", category: "Pricing" },
    { name: "loadPrice", type: "number", label: "Load Price", placeholder: "₹", category: "Pricing" },
    { name: "unloadingPrice", type: "number", label: "Unloading Price", placeholder: "₹", category: "Pricing" },
];

const AddProducts = () => {
	const [formData, setFormData] = useState<Product>(initializeFormData(metadata));

	// console.log("formData: ", formData);

	return (
		<PageAnimate className={"w-full"}>
			<div className="w-full p-6 flex justify-center items-center gap-5">
				<div className="bg-opacity-30 p-4 h-fit rounded-md items-center justify-center flex-col flex gap-5">
					<h1 className="font-extrabold text-2xl border-b w-fit pb-2">
						Add to Products List
					</h1>

					<AddForm
						title="products"
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
