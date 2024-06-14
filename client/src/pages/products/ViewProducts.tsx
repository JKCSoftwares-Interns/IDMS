import { FC, useEffect, useState } from "react";
import TableGenerator from "../../components/TableGeneration";
import { AddCircleRounded, SearchOff } from "@mui/icons-material";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { getAllData } from "../../data/basic";

/* Order to `labels` and `interface` should match. */

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

const labels = [
	"Product ID",
	"Product Name",
	"Category",
	"Measuring Unit",
	"Pack Size",
	"No. of Units",
	"Unit MRP",
	"Pack MRP",
	"Manufacturer",
	"Marketer",
	"Supplier",
	"UPC",
	"HSN",
	"CGST",
	"SGST",
	"IGST",
	"CESS",
	"Load Price",
	"Unloading Price",
	"Date Added",
	"Added By",
	"Last Edited Date",
	"Last Edited By",
];

const ViewProducts: FC = () => {
	const [products, setProduct] = useState<Product[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			const response: Product[] = await getAllData("/products");
			setProduct(response);
			return response;
		};

		fetchData();
	}, []);

	return (
		<>
			{products.length > 0 ? (
				<TableGenerator title="products" label={labels} data={products} />
			) : (
				<div className="w-full grid place-items-center">
					<div className="flex flex-col justify-center items-center gap-10">
						<SearchOff sx={{ fontSize: 150 }} />
						<h1 className="text-2xl">No products found</h1>
						<NavLink to={`/products/add`}>
						<div className="flex flex-col justify-center gap-3">
						<Button size="large" variant="contained" color="success">
							<AddCircleRounded />
						</Button>
						<p>Click to add product</p>
						</div>
					</NavLink>
					</div>
				</div>
			)}
		</>
	);
};

export default ViewProducts;
