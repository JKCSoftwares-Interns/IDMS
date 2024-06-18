	import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Box, TextField } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import serverInstance from "../data/init";

const MuiFormAdd = ({ title, categories, fields }) => {
	const [open, setOpen] = useState(false);

	const navigate = useNavigate();

	const [formData, setFormData] = useState(
		fields.reduce((obj, item) => ({ ...obj, [item.name]: "" }), {})
	);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = async (e) => {
		console.log("working on some lvl");

		e.preventDefault();
		const finalData = {
			...formData,
			addedBy: "admin", //will be fetching username here
		};

		console.log("Form submitted:", finalData); //for debugging

		const url = `/${title}/add`;
		console.log("URL:", url); //for debugging

		await serverInstance
			.post(`/${title}/add`, finalData)
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
		<>
			<Snackbar
				open={open}
				autoHideDuration={6000}
				onClose={() => {
					setOpen(false);
					navigate(`/${title}`);
				}}
				anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
			>
				<Alert
					onClose={() => {
						setOpen(false);
						navigate(`/${title}`);
					}}
					severity="success"
					sx={{ width: "100%" }}
				>
					{title} added successfully!
				</Alert>
			</Snackbar>

			<form className="w-3/4 grid grid-cols-2 grid-rows-2 gap-4">
				{categories.map((category) => (
					<div
						className={`${
							categories.length % 2 === 0 ? "row-span-5" : "col-span-2"
						} p-8 border rounded-2xl backdrop-filter backdrop-blur-lg bg-white bg-opacity-90`}
						key={category}
					>
						<h1 className="text-xl mb-4 font-bold">{category}</h1>
						{fields
							.filter((field) => field.category === category)
							.map((field) => (
								<Box padding={1} key={field.name}>
									{field.type === "date" ? (
										<TextField
											id={field.name}
											name={field.name}
											label={null}
											type={field.type}
											value={formData[field.name]}
											onChange={handleChange}
											variant="outlined"
											fullWidth
											InputLabelProps={{
												shrink: true,
											}}
											inputProps={{
												min: 0,
												placeholder: field.label,
											}}
										/>
									) : (
										<TextField
											id={field.name}
											name={field.name}
											label={field.label}
											type={field.type}
											value={formData[field.name]}
											onChange={handleChange}
											variant="outlined"
											fullWidth
											inputProps={{ min: 0 }}
										/>
									)}
								</Box>
							))}
					</div>
				))}
			</form>

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

export default MuiFormAdd;
