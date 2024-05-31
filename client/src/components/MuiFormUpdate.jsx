import serverInstance from "../services/serverInstance";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box, TextField } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import PageAnimate from "./PageAnimate";

const MuiFormUpdate = ({ title, id, categories, fields, readonly }) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await serverInstance.get(`/${title}/edit/${id}`);
				setData(response.data);
			} catch (error) {
				console.error(`Failed to fetch ${title}:`, error);
			}
		};

		fetchData();
	}, []);

	const [open, setOpen] = useState(false);

	const navigate = useNavigate();

	const [formData, setFormData] = useState(
		fields.reduce(
			(obj, item) => ({ ...obj, [item.name]: data[item.name] || "" }),
			{}
		)
	);

	useEffect(() => {
		if (data) {
			setFormData((prevFormData) => ({ ...prevFormData, ...data }));
		}
	}, [data]);

	const handleChange = (e) => {
		const { id, value } = e.target;
		setFormData({
			...formData,
			[id]: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const finalData = {
			...formData,
			lastEditedBy: "admin", //will be fetching username here
		};

		console.log("Form submitted:", finalData); //for debugging

		// console.log("updated form sending:", finalData);

		serverInstance
			.post(`/${title}/edit/${id}`, finalData)
			.then((response) => {
				console.log("Update successful:", response.data);
				setOpen(true);
			})
			.catch((error) => {
				console.error("Failed to update:", error);
			});
	};

	return (
		<PageAnimate className={"w-full grid place-items-center gap-6"}>
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
					Updated successfully!
				</Alert>
			</Snackbar>

			<form className="flex gap-4">
				{readonly &&
					readonly.map((field) => (
						<div
							className="border rounded-xl p-2 backdrop-filter backdrop-blur-lg bg-white bg-opacity-90"
							key={field.name}
						>
							<Box padding={1}>
								<p className="text-slate-500 mb-3 text-xs">{field.label}</p>
								<TextField
									name={field.name}
									label=""
									type={field.type}
									value={formData[field.name] || ""}
									variant="standard"
									inputProps={{ min: 0 }}
									disabled
								/>
							</Box>
						</div>
					))}
			</form>

			<form className="w-3/4 grid grid-cols-2 grid-rows-2 gap-4">
				{categories &&
					categories.map((category) => (
						<div
							className="row-span-5 p-8 border rounded-2xl backdrop-filter backdrop-blur-lg bg-white bg-opacity-90"
							key={category}
						>
							<h1 className="text-xl mb-4 font-bold">{category}</h1>
							{fields
								.filter((field) => field.category === category)
								.map((field) => (
									<Box padding={1} key={field.name}>
										<TextField
											id={field.name}
											name={field.name}
											label={field.label}
											type={field.type}
											value={formData[field.name] || ""}
											onChange={handleChange}
											variant="outlined"
											fullWidth
											inputProps={{ min: 0 }}
										/>
									</Box>
								))}
						</div>
					))}
			</form>

			<Button
				type="submit"
				variant="contained"
				sx={{
					mb: 5,
					fontWeight: "bold",
					fontSize: "1rem",
					backgroundColor: "skyblue",
					p: 2,
					width: "60%",
					"&:hover": {
						backgroundColor: "goldenrod",
					},
				}}
				onClick={handleSubmit}
			>
				Update
			</Button>
		</PageAnimate>
	);
};

export default MuiFormUpdate;
