import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import { serverInstance } from "../services/backendUtils";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { amber } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

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

export const MuiTable = ({ title, tableData, setTableData, tableFields }) => {

	

	const navigate = useNavigate();

	let keyid = title;
    if (title.endsWith('s')) {
        keyid = title.slice(0, -1);
    }
    keyid += 'Id';
	
	// console.log("keyId", keyid);

	async function deleteProduct(id) {

		console.log("deleteProduct", id)

		serverInstance
			.delete(`/${title}/delete/${id}`, id)
			.then((response) => {
				console.log("Success:", response.data);
				setTableData(tableData.filter(product => product[keyid] !== id));
			})
			.catch((error) => {
				console.error("Error:", error);
			});

	}

	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);

	const handleChangePage = (_, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	return (
		<Box width="100%">
			<TableContainer
				sx={{ maxHeight: "100%", borderRadius: 4 }}
				component={Paper}
			>
				<Table stickyHeader aria-label="Table List">
					<TableHead>
						<TableRow>
							{tableFields.map((field) => (
								<TableCell align="center" key={field.key}>
									{field.label}
								</TableCell>
							))}
							<TableCell></TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{Array.isArray(tableData) &&
							tableData
								.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
								.map((row) => (
									<TableRow
										key={row[keyid]}
										sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
									>
										{tableFields.map((field) => (
											<TableCell align="center" key={field.key}>
												{row[field.key]}
											</TableCell>
										))}
										<TableCell align="center">
											<Grid container spacing={2}>
												<Grid item>
													<NavLink to={`/${title}/edit/${row[keyid]}`}>
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
													<Button
														onClick={() => deleteProduct(row[keyid])}
														variant="outlined"
														color="error"
													>
														<DeleteIcon />
													</Button>
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
					count={tableData.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onPageChange={handleChangePage}
					onRowsPerPageChange={handleChangeRowsPerPage}
				/>
			</TableContainer>
		</Box>
	);
};

export default MuiTable;