import { useState } from "react";
import serverInstance from "../../services/serverInstance";

const AddProducts = () => {
	const [formData, setFormData] = useState({
		productName: "",
		category: "",
		measuringUnit: "",
		packSize: "",
		noOfUnits: "",
		unitMRP: "",
		packMRP: "",
		manufacturer: "",
		marketer: "",
		supplier: "",
		upc: "",
		hsn: "",
		cgst: "",
		sgst: "",
		igst: "",
		cess: "",
		loadPrice: "",
		unloadingPrice: "",
		addedBy: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const finalData = {
			...formData,
			addedBy: "admin", //will be fetching username here
		};

		console.log("Form submitted:", finalData); //for debugging

		serverInstance
			.post("/products/add", finalData)
			.then((response) => {
				console.log("Success:", response.data);
				window.location.href = "/products";
			})
			.catch((error) => {
				console.error("Error:", error);
				window.location.href = "/products";
			});
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="w-full mx-auto p-4 border border-gray-300 rounded"
		>
			<div className="flex flex-col items-center">
				<h1 className="text-4xl p-{4.5rem}">Add New Product</h1>
				<p className="text-2xl pt-5 pb-10">
					To add a new Product fill the following details asked in the form and
					submit it.
				</p>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
				{[
					{ label: "Product Name", name: "productName", type: "text" },
					{ label: "Category", name: "category", type: "text" },
					{ label: "Measuring Unit", name: "measuringUnit", type: "text" },
					{ label: "Pack Size", name: "packSize", type: "number" },
					{ label: "No. of Units", name: "noOfUnits", type: "number" },
					{ label: "Unit MRP", name: "unitMRP", type: "number" },
					{ label: "Pack MRP", name: "packMRP", type: "number" },
					{ label: "Manufacturer", name: "manufacturer", type: "text" },
					{ label: "Marketer", name: "marketer", type: "text" },
					{ label: "Supplier", name: "supplier", type: "text" },
					{ label: "UPC", name: "upc", type: "number" },
					{ label: "HSN", name: "hsn", type: "number" },
					{ label: "CGST", name: "cgst", type: "number" },
					{ label: "SGST", name: "sgst", type: "number" },
					{ label: "IGST", name: "igst", type: "number" },
					{ label: "CESS", name: "cess", type: "number" },
					{ label: "Load Price", name: "loadPrice", type: "number" },
					{ label: "Unloading Price", name: "unloadingPrice", type: "number" },
				].map((field) => (
					<div key={field.name} className="mb-4">
						<label htmlFor={field.name} className="block mb-2">
							{field.label}:
						</label>
						<input
							type={field.type}
							id={field.name}
							name={field.name}
							value={formData[field.name]}
							onChange={handleChange}
							className="w-full p-2 border border-gray-300 rounded"
						/>
					</div>
				))}
			</div>
			<div className="flex justify-center">
				<button
					type="submit"
					className="inline-block mx-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
				>
					Submit
				</button>
			</div>
		</form>
	);
};

export default AddProducts;