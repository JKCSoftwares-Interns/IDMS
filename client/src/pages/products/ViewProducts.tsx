import { useEffect, useState } from "react";
import TableGenerator from "../../components/TableGeneration";
import CircularProgress from "@mui/material/CircularProgress";
import { getAllData } from "../../data/basic";
import NotFound from "../../components/NotFound";

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
	supplierID: number;
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
	"SupplierID",
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

const ViewProducts = () => {
	const [products, setProduct] = useState<Product[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		const fetchData = async () => {
			const response: Product[] = await getAllData("/products");
			setProduct(response);
			setIsLoading(false);
			return response;
		};

		fetchData().then();
	}, []);

	if (isLoading) {
		return (
			<div className="w-full grid place-items-center">
				<CircularProgress />
			</div>
		);
	}

	return (
		<>
			{products.length > 0 ? (
				<>
					<TableGenerator title="products" label={labels} data={products} setData={setProduct} />
				</>
			) : (
				<NotFound title={"products"}/>
			)}
		</>
	);
};

export default ViewProducts;
