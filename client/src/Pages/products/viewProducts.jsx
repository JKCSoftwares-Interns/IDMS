// import testdata from "../../../data.json";
import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const ProductList = () => {
	const [data, setData] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get("/products/show");
				setData(response.data);
			} catch (error) {
				console.error("Failed to fetch products:", error);
			}
		};

		fetchData();
	}, []);

	const filteredData = data.filter((product) =>
		product.productName.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<div className="container mx-auto p-4">
			<div className="flex p-4 justify-between w-full border">
				<h1 className="text-4xl font-bold mb-4 text-center">Product List</h1>
				<input
					className="p-2 border max-w-max rounded-lg"
					placeholder="Search Product..."
					type="text"
					value={searchTerm}
					onChange={(event) => setSearchTerm(event.target.value)}
				/>
				<button>
					<NavLink
						className="flex items-center text-slate-300 hover:text-slate-200 gap-5 bg-[#5e7bcc] hover:bg-green-700 p-2 rounded-md"
						to="/products/add"
					>
						Add Products
					</NavLink>
				</button>
			</div>

			<div className="overflow-x-auto">
				<table className="w-full table-auto">
					<thead>
						<tr>
							<th className="border px-4 py-2">Product ID</th>
							<th className="border px-4 py-2">Product Name</th>
							<th className="border px-4 py-2">Category</th>
							<th className="border px-4 py-2">Pack Size</th>
							<th className="border px-4 py-2">Number of Units</th>
							<th className="border px-4 py-2">Unloading Price</th>
							<th className="border px-4 py-2">Edit</th>
							<th className="border px-4 py-2">Delete</th>
						</tr>
					</thead>
					<tbody>
						{Array.isArray(filteredData) &&
							filteredData.map((product) => (
								// {testdata.map((product) => (
								<tr key={product.productId}>
									<td className="border px-4 py-2">{product.productId}</td>
									<td className="border px-4 py-2">{product.productName}</td>
									<td className="border px-4 py-2">{product.category}</td>
									<td className="border px-4 py-2">{product.packSize}</td>
									<td className="border px-4 py-2">{product.noOfUnits}</td>
									<td className="border px-4 py-2">{product.unloadingPrice}</td>

									<td className="border px-4 py-2">
										<button>
											<NavLink
												className="flex items-center gap-5 text-slate-300 hover:text-slate-200 hover:bg-amber-700 bg-[#5e7bcc] p-2 rounded-md"
												to={`/products/edit/${product.productId}`}
											>
												<span className="text-white-700 text-[1.2rem]">
													Edit
												</span>
											</NavLink>
										</button>
									</td>
									<td className="border px-4 py-2">
										<button
											className="flex items-center gap-5 text-slate-300 hover:text-slate-200 hover:bg-red-700 bg-[#5e7bcc] p-2 rounded-md"
											onClick={async () => {
												try {
													const response = await fetch(
														`/products/delete/${product.productId}`,
														{ method: "DELETE" }
													);
													if (!response.ok) {
														throw new Error(
															`HTTP error! status: ${response.status}`
														);
													}
													window.location.reload();
												} catch (error) {
													console.error("Failed to delete product:", error);
												}
											}}
										>
											<span className="text-white-700 text-[1.2rem]">
												Delete
											</span>
										</button>
									</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ProductList;