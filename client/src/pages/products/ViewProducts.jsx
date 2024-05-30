import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Container } from "@mui/material";

import serverInstance from "../../services/serverInstance";
import { MuiTable } from "../../components/MuiTable";

import PageAnimate from "../../components/PageAnimate";

const tableFields = [
	{ key: "productId", label: "Product ID" },
	{ key: "productName", label: "Product Name" },
	{ key: "category", label: "Category" },
	{ key: "measuringUnit", label: "Measuring Unit" },
	{ key: "supplier", label: "Supplier" },

	{ key: "packSize", label: "Pack Size" },
	{ key: "noOfUnits", label: "Count" },
	{ key: "unitMRP", label: "MRP" },
	{ key: "packMRP", label: "Pack MRP" },
	{ key: "loadPrice", label: "Load Price" },
	{ key: "unloadingPrice", label: "Unloading Price" },

	// { key: 'marketer', label: 'Marketer'},
	// { key: "manufacturer", label: "Manufacturer" },

	// { key: 'upc', label: 'UPC'},
	// { key: 'hsn', label: 'HSN'},

	// { key: 'cgst', label: 'CGST'},
	// { key: 'sgst', label: 'SGST'},
	// { key: 'igst', label: 'IGST'},
	// { key: 'cess', label: 'CESS'},

	// { key: 'dateAdded', label: 'Date Added'},
	// { key: 'addedBy', label: 'Added By'},
	// { key: 'lastEditedDate', label: 'Last Edited Date'},
	// { key: 'lastEditedBy', label: 'Last Edited By'}
];

const ProductList = () => {
	const [data, setData] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await serverInstance.get("/products");
				setData(response.data);
			} catch (error) {
				console.error("Failed to fetch products:", error);
			}
		};

		fetchData();
	}, []);

	const filteredData = data.filter((product) =>
		product.productName.toLowerCase().includes(searchTerm.toLowerCase()));

	return (
		<PageAnimate className={"w-full"}>
			<Container sx={{ p: 2 }}>
				<div className="flex p-8 justify-between items-center w-full">
					<h1 className="text-4xl font-bold">Product List</h1>
					<input
						className="px-4 py-2 border max-w-max rounded-lg"
						placeholder="Search Product..."
						value={searchTerm}
						onChange={(event) => setSearchTerm(event.target.value)}
					/>
					<NavLink to="/products/add">
						<Button size="large" variant="contained" color="success">
							<AddCircleIcon />
						</Button>
					</NavLink>
				</div>

				{/*  
        
        REQUIREMENTS:-
        
          > Data fetch from server 
          > Model your fields
      
      */}

				<MuiTable
					title={"products"}
					tableFields={tableFields}
					tableData={filteredData}
					setTableData={setData}
				/>
			</Container>
		</PageAnimate>
	);
};

export default ProductList;
