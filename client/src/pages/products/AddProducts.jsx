import { useState } from "react";
import { useNavigate } from "react-router-dom";
import serverInstance from "../../services/serverInstance";
import { Box, TextField, Button, Grid, Container } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const AddProducts = () => {
	const navigate = useNavigate();

	const [open, setOpen] = useState(false);

	const fields = [
		{ label: "Product Name", name: "productName", type: "text", xs: 12 },
		{ label: "Category", name: "category", type: "text", xs: 12 },
		{ label: "Measuring Unit", name: "measuringUnit", type: "text", xs: 12 },
		{ label: "Pack Size", name: "packSize", type: "number", xs: 6 },
		{ label: "Pack MRP", name: "packMRP", type: "number", xs: 6 },
		{ label: "Number of Units", name: "noOfUnits", type: "number", xs: 6 },
		{ label: "Unit MRP", name: "unitMRP", type: "number", xs: 6 },
		{ label: "Manufacturer", name: "manufacturer", type: "text", xs: 12 },
		{ label: "Marketer", name: "marketer", type: "text", xs: 12 },
		{ label: "Supplier", name: "supplier", type: "text", xs: 12 },
		{ label: "UPC", name: "upc", type: "number", xs: 12 },
		{ label: "HSN", name: "hsn", type: "number", xs: 12 },
		{ label: "CGST", name: "cgst", type: "number", xs: 4 },
		{ label: "SGST", name: "sgst", type: "number", xs: 4 },
		{ label: "IGST", name: "igst", type: "number", xs: 4 },
		{ label: "CESS", name: "cess", type: "number", xs: 12 },
		{ label: "Load Price", name: "loadPrice", type: "number", xs: 6 },
		{ label: "Unloading Price", name: "unloadingPrice", type: "number", xs: 6 },
	];

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
				setOpen(true);
			})
			.catch((error) => {
				console.error("Error:", error);
				setOpen(true);
			});
	};

	return (
		<Container component="main" maxWidth="md">
			<Snackbar
				open={open}
				autoHideDuration={6000}
				onClose={() => {
					setOpen(false);
					navigate("/products");
				}}
				anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
			>
				<Alert
					onClose={() => {
						setOpen(false);
						navigate("/products");
					}}
					severity="success"
					sx={{ width: "100%" }}
				>
					Product added successfully!
				</Alert>
			</Snackbar>

			<div className="flex flex-col gap-5 items-center justify-center">
				<h1 className="text-4xl font-bold text-indigo-700">New Product</h1>
				<p className="text-slate-500">Fill the form</p>
			</div>
			<form
				className="p-6 mb-5 border rounded-2xl backdrop-filter backdrop-blur-lg bg-white bg-opacity-90"
				onSubmit={handleSubmit}
			>
				<Grid container spacing={3}>
					{fields.map((field) => (
						<Grid item xs={field.xs} key={field.name}>
							<Box padding={1}>
								<TextField
									id={field.name}
									name={field.name}
									label={field.label}
									type={field.type}
									value={formData[field.name]}
									onChange={handleChange}
									variant="outlined"
									fullWidth
									style={{ width: "100%" }}
								/>
							</Box>
						</Grid>
					))}
				</Grid>
				<Box display="flex" justifyContent="center" alignItems="center" mt={2}>
					<Button
						type="submit"
						variant="contained"
						color="primary"
						className="submit-button"
						p={4}
					>
						Submit
					</Button>
				</Box>
			</form>
		</Container>
	);
};

export default AddProducts;
