import AddCircleIcon from "@mui/icons-material/AddCircle";
import Grid from "@mui/material/Grid";
import { NavLink } from "react-router-dom";
import { FC, SetStateAction, useState } from "react";
import { amber } from "@mui/material/colors";
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
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
	data: any[],
	setData: React.Dispatch<React.SetStateAction<any[]>>,
}

const TableGenerator: FC<TableGeneratorProps> = ({ title, label, data, setData }) => {

	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);

	const [searchTerm, setSearchTerm] = useState<string>("");

	const searchfield = cutToName(title);

	const filteredData = data.filter(
		(data) =>
			data[searchfield] &&
			data[searchfield].toLowerCase().includes(searchTerm.toLowerCase())
	);

	const handleChangePage = (_: any, newPage: SetStateAction<number>) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event: { target: { value: string; }; }) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const iniColumn = 7; // initial number of columns to show

	const [columnsToShow, setColumnsToShow] = useState(iniColumn); // initial number of columns to show

	const ToggleColumn = () => {
		if (columnsToShow === iniColumn) {
			setColumnsToShow(label.length); // show all columns when button is pressed
			} else {
			setColumnsToShow(iniColumn); // show initial number of columns when button is pressed again
			}
	};

	const keyid: string = cutShort(title);

	return (
		<PageAnimate className={"w-full"}>
			<main className="p-4">
				<div id="utility" className="flex justify-between px-8 py-4">
					<Button onClick={ToggleColumn}><IndeterminateCheckBoxIcon /></Button>

					<input
						className="px-4 py-2 border max-w-max rounded-lg outline-none"
						placeholder="Search Inventory..."
						type="text"
						value={searchTerm}
						onChange={(event) => setSearchTerm(event.target.value)}
					/>

					<NavLink to={`/${title}/add`}>
						<Button size="large" variant="contained" color="success">
							<AddCircleIcon/>
						</Button>
					</NavLink>
				</div>
				<TableContainer sx={{maxWidth: "100%"}} component={Paper}>
					<Table>
						<TableHead>
							<TableRow>
								{Object.keys(filteredData[0] || {})
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
							{filteredData.map((row, index) => (
								<TableRow key={index}>
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
														deleteThatShit(`/${title}/delete/${row[keyid]}`).then(() => {
															setData(data.filter((item) => item[keyid] !== row[keyid])
														)})
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

	return title;
}

function cutToName(title: string): string {
	if (title.endsWith("s")) {
		title = title.slice(0, -1);
	}
	title += "Name";
	return title;
}