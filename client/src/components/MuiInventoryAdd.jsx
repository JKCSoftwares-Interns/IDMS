import { Button } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useEffect, useState } from "react";
import { serverInstance, reqData } from "../services/backendUtils";
import MuiField from "./MuiField";
import MuiAutocomplete from "./MuiAutocomplete";
import AlertBox from "./AlertBar";

const MuiInventoryAdd = ({ title, fields = [], options = [] }) => {
	// Categories
	const EntryGoods = fields[0];
	const AddGoods = fields[1];

	// Options
	const optionsMap = { product: [], supplier: options[0], reason: options[1] };
	const [productOptions, setProductOptions] = useState(optionsMap["product"]);

	// Add Goods Instances
	const [addGoodsInstances, setAddGoodsInstances] = useState([AddGoods]);

	const handleAddGoods = () => {
		setAddGoodsInstances([...addGoodsInstances, AddGoods]);
	};

	// Alert Box
	const [open, setOpen] = useState(false);

	// Form Data
	const [formData, setFormData] = useState(
		fields.reduce((obj, item) => ({ ...obj, [item.name]: "" }), {})
	);
	const handleChange = (e, sectionId = null) => {
		const { name, value } = e.target;
		const key = sectionId !== null ? `${name}_${sectionId}` : name;
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		const finalData = { ...formData, addedBy: "admin" };
		const url = `/${title}/add`;

		try {
			console.log("FINAL DATA 🔴:", finalData);
			await serverInstance.post(url, finalData);
			setOpen(true);
			setTimeout(() => {
				setOpen(false);
			}, 3000);
		} catch (error) {
			console.error("Error:", error);
		}
	};

	useEffect(() => {
		if (formData["supplier"]) {
			reqData("/inventory/names", formData["supplier"])
				.then((products) => {
					setProductOptions(products);
				})
				.catch((error) => {
					console.error("Error fetching products:", error);
				});
		}
	}, [formData["supplier"]]);

	return (
		<>
			<AlertBox
				message="Inventory Added Successfully"
				navigateTo={title}
				active={open}
			/>

			{/* ENTRY GOODS ~ One-Time Fields */}
			<form
				onSubmit={handleSubmit}
				className="w-3/4 flex flex-col gap-10 p-8 rounded-2xl bg-white bg-opacity-90"
			>
				<div id="title" className="">
					<h1 className="text-2xl font-bold">Entry</h1>
				</div>
				<div id="fields" className="flex flex-col gap-5">
					{EntryGoods &&
						EntryGoods.map((field) =>
							field.type === "autocomplete" ? (
								<MuiAutocomplete
									key={field.name}
									field={field}
									react={handleChange}
									target={formData[field.name]}
									options={optionsMap[field.name]
									}
								/>
							) : (
								<MuiField
									key={field.name}
									field={field}
									react={handleChange}
									target={formData[field.name]}
								/>
							)
						)}
				</div>
			</form>

			{/* ADD GOODS ~ Repeated Fields */}

			{addGoodsInstances.map((AddGoodsInstance, index) => (
				<form
					key={index}
					onSubmit={handleSubmit}
					className="w-3/4 m-5 flex flex-col gap-10 p-6 rounded-2xl bg-white bg-opacity-90"
				>
					<div id="title" className="">
						<h1 className="text-xl font-semibold"> # {index + 1} </h1>
					</div>
					<div id="fields" className="flex flex-col gap-5">
						{AddGoodsInstance &&
							AddGoodsInstance.map((field) =>
								field.type === "autocomplete" ? (
									<MuiAutocomplete
										key={field.name}
										field={field}
										react={handleChange}
										target={formData[field.name]}
										options={optionsMap["product"]}
									/>
								) : (
									<MuiField
										key={field.name}
										field={field}
										react={(e) => handleChange(e, index)}
										target={formData[`${field.name}_${index}`]}
									/>
								)
							)}
					</div>
				</form>
			))}

			{/* Buttons */}

			<Button
				onClick={handleAddGoods}
				sx={{ margin: 3 }}
				startIcon={<AddCircleIcon />}
			>
				Goods
			</Button>

			<Button
				type="submit"
				variant="contained"
				sx={{
					mt: 5,
					width: "60%",
					backgroundColor: "green",
					p: 2,
					fontWeight: "bold",
					"&:hover": {
						backgroundColor: "darkgreen",
					},
				}}
				onClick={handleSubmit}
			>
				Add to stock
			</Button>
		</>
	);
};

export default MuiInventoryAdd;
