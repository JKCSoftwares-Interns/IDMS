import { NavLink } from "react-router-dom";
import { useState } from "react";
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
import DeleteIcon from "@mui/icons-material/Delete";

export const MuiTable = ({ tableData, tableFields }) => {
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
		<TableContainer sx={{ maxHeight: "100%" }} component={Paper}>
			<Table stickyHeader aria-label="Product List">
				<TableHead>
					<TableRow>
						{tableFields.map((field) => (
							<TableCell align="center" key={field.key}>
								{field.label}
							</TableCell>
						))}
						<TableCell></TableCell>
						<TableCell></TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{Array.isArray(tableData) &&
						tableData
							.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							.map((row) => (
								<TableRow
									key={row.productId}
									sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
								>
									{tableFields.map((field) => (
										<TableCell align="center" key={field.key}>
											{row[field.key]}
										</TableCell>
									))}
									<TableCell align="center">
										<NavLink to={`/products/edit/${row.productId}`}>
											<Button color="secondary">Edit</Button>
										</NavLink>
									</TableCell>
									<TableCell align="center">
										<Button
											onClick={() => deleteProduct(row)}
											variant="outlined"
											color="error"
										>
											<DeleteIcon />
										</Button>
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
	);
};

/*--------------Helper Function--------------- */

async function deleteProduct(product) {
	try {
		const response = await fetch(`/products/delete/${product.productId}`, {
			method: "DELETE",
		});
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		window.location.reload();
	} catch (error) {
		console.error("Failed to delete product:", error);
	}
}
