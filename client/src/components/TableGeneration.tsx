import AddCircleIcon from "@mui/icons-material/AddCircle";
import Grid from "@mui/material/Grid";
import { NavLink } from "react-router-dom";
import { FC, SetStateAction, useState } from "react";
import { amber } from "@mui/material/colors";

import {
	Button,
	TableContainer,
	Table,
	TableHead,
	TableBody,
	TableRow,
	TableCell,
	TablePagination,
	Paper,
} from "@mui/material";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteIcon from "@mui/icons-material/Delete";
import PageAnimate from "./PageAnimate";
import PromptButton from "./PromptButton";
import { deleteThatShit } from "../data/basic";

interface TableGeneratorProps {
	title: string;
	label: string[];
	data: any[];
}

const TableGenerator: FC<TableGeneratorProps> = ({ title, label, data }) => {

	console.log("data:", data); //for debugging

	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);

	const handleChangePage = (_: any, newPage: SetStateAction<number>) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event: { target: { value: string; }; }) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const [columnsToShow, setColumnsToShow] = useState(7); // initial number of columns to show

	const handleShowMoreColumns = () => {
		setColumnsToShow(label.length); // show all columns when button is pressed
	};

	const keyid: string = cutShort(title);

	return (
		<PageAnimate className={"w-full"}>
			<main className="p-4">
				<div id="utility" className="flex justify-between px-8 py-4">
					<Button onClick={handleShowMoreColumns}>Show More Columns</Button>
					<NavLink to={`/${title}/add`}>
						<Button size="large" variant="contained" color="success">
							<AddCircleIcon />
						</Button>
					</NavLink>
				</div>
				<TableContainer sx={{ maxWidth: "100%" }} component={Paper}>
					<Table>
						<TableHead>
							<TableRow>
								{Object.keys(data[0] || {})
									.slice(0, columnsToShow)
									.map((_, index) => (
										<TableCell align="center" key={index}>
											{label[index]}
										</TableCell>
									))}
								<TableCell></TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{data.map((row) => (
								<TableRow key={row[keyid]}>
									{Object.values(row)
										.slice(0, columnsToShow)
										.map((value, index) => {
											if (value === null || value === undefined) {
												return (
													<TableCell align="center" key={index}>
														N/A
													</TableCell>
												);
											} else if (
												value instanceof Date
											) {
												return (
													<TableCell align="center" key={index}>
														<h1>kasdhjakjhds</h1>
														{new Date(value).toLocaleString()}
													</TableCell>
												);
											} else {
												return (
													<TableCell align="center" key={index}>
														{value.toString()} {/* INVESTIGATE */}
													</TableCell>
												);
											}
										})}
									<TableCell align="center">
										{/* Edit & Delete buttons */}

										<Grid container spacing={2}>
											<Grid item>
												 
												<NavLink to={`/${title}/edit/${row[keyid]}`}>
													{/* Edit */}
													<Button
														variant="outlined"
														sx={{
															color: amber[700],
															borderColor: amber[500],
															"&:hover": {
																backgroundColor: amber[100],
																color: amber[900],
																borderColor: amber[900],
															},
														}}
													>
														<EditRoundedIcon />
													</Button>
												</NavLink>
											</Grid>
											<Grid item>
												{/* Delete */}
												<PromptButton
													icon={<DeleteIcon />}
													title="Delete"
													content="Are you sure you want to delete this item?"
													onClick={() =>
														deleteThatShit(`/${title}/delete/${row[keyid]}`)
													}
												/>
											</Grid>
										</Grid>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
					<TablePagination
						rowsPerPageOptions={[5, 10, 25]}
						component="div"
						count={data.length}
						rowsPerPage={rowsPerPage}
						page={page}
						onPageChange={handleChangePage}
						onRowsPerPageChange={handleChangeRowsPerPage}
					/>
				</TableContainer>
			</main>
		</PageAnimate>
	);
};

export default TableGenerator;

// Helper Function

function cutShort(title: string): string {
	if (title.endsWith("s")) {
		title = title.slice(0, -1);
	}
	title += "Id";
	console.log("keyId:", title); //for debugging

	return title;
}