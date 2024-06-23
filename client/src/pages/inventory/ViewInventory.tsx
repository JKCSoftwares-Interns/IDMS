import LockIcon from "@mui/icons-material/Lock";
import { useEffect, useState, FC } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CircularProgress from "@mui/material/CircularProgress";
import { Container } from "@mui/material";

import { getData } from "../../data/advance";
import { MuiTable } from "../../components/MuiTable";
import PageAnimate from "../../components/PageAnimate";

const tableFields = [
	{ key: "inventoryId", label: "Inventory ID" },
	{ key: "productName", label: "Product Name" },
	{ key: "category", label: "Category" },
	{ key: "storageLocation", label: "Storage Location" },
	{ key: "supplier", label: "Supplier" },
	{ key: "dateOfManufacture", label: "Date of Manufacture" },
	{ key: "batchNumber", label: "Batch Number" },
	{ key: "dateOfExpiry", label: "Date of Expiry" },
];

interface Inventory {
	inventoryId: string;
	orderedDate: string;
	dateOfEntry: string;
	referenceNumber: string;
	supplier: string;
	reason: string;
	productId: string;
	dateOfManufacture: string;
	dateOfExpiry: string;
	quantity: number;
	purchasePrice: number;
	sellingPrice: number;
	batchNumber: string;
	storageLocation: string;
	additionalNote: string;
	dateAdded: string;
	addedBy: string;
	lastEditedDate: string;
	lastEditedBy: string;
}

const ViewInventory: FC = () => {
	const [data, setData] = useState<Inventory[]>([]);
	const [searchTerm, setSearchTerm] = useState<string>("");
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [lock, setLock] = useState<number>(0); //0 means locked, anything else means unlocked

	useEffect(() => {
		getData("/inventory/count").then((result) => {
			console.log(result);
			console.log(typeof result);

			/* 
				INVESTIGATE WHY IS THE FRONTEND AUTOMATICALLY DEFERRED AS `NUMBER` 

				here's your prompt:
					"even after using `toString` why is it sending as a `number`? or does it automatically converts to a `number` at frontend?

```
async function getData(path: string, field?: string): Promise<number | string[]> {
	const response: any = await serverInstance.get(path);
	try {
		if (field) {
			const result: string[] = [];

			for (let i in response.data) {
				result.push(response.data[i][field]);
			}
			return result;
		} else {
			return response.data;
		}
	} catch (error) {
		console.error(`Failed to fetch data from ${path}:`, error);
		return [];
	}
};
```

```
const [lock, setLock] = useState<number>(0); //0 means locked, anything else means unlocked

	useEffect(() => {
		getData("/inventory/count").then((result) => {
			console.log(result)
			console.log(typeof result)
			if (typeof result === "number") {
				setLock(result);
			} else {
				console.error("Failed to fetch lock status for inventory:",	typeof result);
				setLock(0);
			}
			setIsLoading(false);
		});
	}, []);
```"

			*/

			if (typeof result === "number") {
				setLock(result);
			} else {
				console.error(
					"Failed to fetch lock status for inventory:",
					typeof result
				);
				setLock(0);
			}
			setIsLoading(false);
		});
	}, []);

	//************************************* */

	const filteredData: Inventory[] = data.filter(
		(inventory) =>
			inventory.supplier &&
			inventory.supplier.toLowerCase().includes(searchTerm.toLowerCase())
	);

	//************************************** */

	if (isLoading) {
		return (
			<div className="w-full grid place-items-center">
				<CircularProgress />
			</div>
		);
	}

	return lock > 0 ? (
		<PageAnimate className={"w-full"}>
			<Container sx={{ p: 2 }}>
				<div className="flex p-8 justify-between items-center w-full">
					<h1 className="text-4xl font-bold">Inventory Details</h1>
					<input
						className="px-4 py-2 border max-w-max rounded-lg"
						placeholder="Search Inventory..."
						type="text"
						value={searchTerm}
						onChange={(event) => setSearchTerm(event.target.value)}
					/>
					<NavLink to="/inventory/add">
						<Button size="large" variant="contained" color="success">
							<AddCircleIcon />
						</Button>
					</NavLink>
				</div>

				<MuiTable
					title={"inventory"}
					tableFields={tableFields}
					tableData={filteredData}
					setTableData={setData}
				/>
			</Container>
		</PageAnimate>
	) : (
		<div className="w-full grid place-items-center">
			<div className="flex flex-col justify-center items-center gap-10">
				<LockIcon sx={{ fontSize: 150 }} />
				<p className="text-md"> Please add products to view this section. </p>
			</div>
		</div>
	);
};

export default ViewInventory;
