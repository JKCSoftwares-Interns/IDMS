import { FC, useEffect, useState } from "react";
import TableGenerator from "../../components/TableGeneration";
import { AddCircleRounded, SearchOff } from "@mui/icons-material";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { getAllData } from "../../data/basic";

/* Order to labels and interface should match. */

interface Invoice {
	invoiceId: number;
	orderId: number;
	supplierId: number;
	payment: number;
	quantityId: number;
	returnStatus: boolean;
	returnsReason: string;
	createdBy: string;
	approvedBy: string;
    remarks: string;
	lastEditedDate: string;
	lastEditedBy: string;
}

const labels = [
	
    "Invoice ID",
	"Order ID",
	"Supplier ID",
	"Payment",
	"Quantity ID",
	"Return Status",
	"Returns Reason",
	"Created By",
	"Approved By",
    "Remarks",
    "Last Edited Date",
    "Last Edited By",
];

const ViewInvoice: FC = () => {
	const [invoice, setInvoice] = useState<Invoice[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			const response: Invoice[] = await getAllData("/invoice");
			setInvoice(response);
			return response;
		};

		fetchData();
	}, []);

	return (
		<>
			{invoice.length > 0 ? (
				<TableGenerator title="invoice" label={labels} data={invoice} setData={setInvoice} />
			) : (
				<div className="w-full grid place-items-center">
					<div className="flex flex-col justify-center items-center gap-10">
						<SearchOff sx={{ fontSize: 150 }} />
						<h1 className="text-2xl">No invoice found</h1>
						<NavLink to={"/invoice/add"}>
						<div className="flex flex-col justify-center gap-3">
						<Button size="large" variant="contained" color="success">
							<AddCircleRounded />
						</Button>
						<p>Click to add invoice</p>
						</div>
					</NavLink>
					</div>
		</div>
			)}
		</>
	);
};

export default ViewInvoice;