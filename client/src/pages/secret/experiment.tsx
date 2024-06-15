import React, { useEffect, useState } from "react";
import InputBox from "../../components/InputBox_exp";
import { getAllData } from "../../data/basic";

interface MyData {
	productName: string;
	email: string;
	password: string;
	price: number;
	orderedDate: Date;
}

const label = ["Product Name", "Email", "Password", "Price", "Ordered Date"];

const placeholder = [
	"The Product",
	"example@address.com",
	"*******",
	"₹",
	"mm/dd/yyyy",
];

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
	dateAdded: string;
	addedBy: string;
	lastEditedDate: string;
	lastEditedBy: string;
	[key: string]: React.ReactNode;
}

const Home = () => {
	const [formData, setFormData] = useState<MyData>({
		productName: "",
		email: "",
		password: "",
		price: 0,
		orderedDate: new Date(),
	});

	const [products, setProduct] = useState<Product[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			const response: Product[] = await getAllData("/products");
			setProduct(response);
			return response;
		};

		fetchData();
	}, []);

	function checkData() {
		console.log(typeof products);
		console.log(products);
	}

	const handleSubmit = (e: any) => {
		e.preventDefault();
		console.log("data:", formData);
	};

	function handleChange(type: string, target: string) {
		return function (e: React.ChangeEvent<HTMLInputElement>) {
			if (type === "number") {
				setFormData({ ...formData, [target]: Number(e.target.value) });
			} else if (type === "date") {
				setFormData({ ...formData, [target]: new Date(e.target.value) });
			} else if (type === "string") {
				setFormData({ ...formData, [target]: e.target.value });
			}
		};
	}

	return (
		<div className="border w-full bg-slate-800 text-slate-100 p-6 flex items-center gap-5">
			<div className="bg-black bg-opacity-30 p-4 h-fit rounded-md items-center justify-center flex-col flex gap-5">
				<h1 className="font-extrabold text-2xl text-slate-300 border-b-slate-600 border-b w-fit pb-2">
					{" "}
					Form{" "}
				</h1>

				<form onSubmit={handleSubmit} className="flex flex-col gap-5">
					{Object.entries(formData).map(([field, value], index) => (
						<React.Fragment key={index}>
							<label className="font-semibold" htmlFor={field}>
								{label[index]}
							</label>

							<InputBox
								index={index}
								field={field}
								value={value}
								placeholder={placeholder}
								handleChange={handleChange}
							/>
						</React.Fragment>
					))}
					<input
						type="submit"
						className="p-3 hover:bg-rose-800 transition border-none font-semibold rounded-lg bg-rose-500"
					/>
				</form>
			</div>
			<div className="bg-black bg-opacity-30 p-4 h-fit rounded-md items-center justify-center flex-col-reverse flex gap-5">
				<button
					className="bg-lime-800 w-full hover:bg-lime-900 p-2 transition font-semibold rounded-md"
					onClick={checkData}
				>
					CHECK
				</button>
				{products.map((p) => (
					<div
						key={p.productId}
						className="flex flex-col items-center p-2 border-2 border-slate-800"
					>
						{Object.keys(p).map((name) => {
							if (name === "dateAdded") {
								return <p key={name}>{new Date(p[name]).toLocaleString()}</p>;
							} else {
								return <p key={name}>{p[name]}</p>;
							}
						})}
					</div>
				))}
			</div>
		</div>
	);
};

export default Home;

/*
					<input className="p-3 bg-slate-700 focus:outline-none  border-none rounded-lg"
						type="text"
						value={formData.productName}
						onChange={(e) =>
							setFormData({ ...formData, productName: e.target.value })
						}
						placeholder="Product Name"
					/>

					<input
						className="p-3 bg-slate-700 focus:outline-none  border-none rounded-lg"
						type="email"
						value={formData.email}
						onChange={(e) =>
							setFormData({ ...formData, email: e.target.value })
						}
						placeholder="Email"
					/>

					<input
						className="p-3 bg-slate-700 focus:outline-none  border-none rounded-lg"
						type="password"
						onChange={(e) =>
							setFormData({ ...formData, password: e.target.value })
						}
						placeholder="Password"
					/>

					<input
						className="p-3 bg-slate-700 focus:outline-none  border-none rounded-lg"
						type="number"
						onChange={(e) =>
							setFormData({ ...formData, price: Number(e.target.value) })
						}
						min="0"
						placeholder="Price"
					/>

					<input
						className="p-3 bg-slate-700 focus:outline-none  border-none rounded-lg"
						type="date"
						onChange={(e) =>
							setFormData({
								...formData,
								orderedDate: new Date(e.target.value),
							})
						}
						placeholder="Ordered Date"
					/>
					
*/
