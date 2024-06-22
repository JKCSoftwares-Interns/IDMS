import PageAnimate from "../../components/PageAnimate";
import { useParams } from "react-router-dom";
import UpdateForm from "../../components/UpdateForm";
import { FieldUpdater } from "../../utils/formHelper";
import { useState } from "react";

interface Invoice {
	invoiceId: number;
	orderId: number;
	supplierId: number;
	payment: number;
	quantityId: number;
	returnStatus: boolean;
	returnReason: string;
	createdBy: string;
	approvedBy: string;
	remarks: string;
	lastEditedDate: string;
	lastEditedBy: string;
	
}

const UpdateInvoice = () => {
	const { invoiceId } = useParams();

	const [data, setData] = useState({} as Invoice[]);

	if (!invoiceId) {
		return <h1>Invoice ID not found</h1>;
	}

	return (
		<PageAnimate className={"w-full"}>
			<UpdateForm
				title={"invoice"}
				id={invoiceId}
				data={data}
				metadata={metadata}
				setData={setData}
			/>
		</PageAnimate>
	);
};

export default UpdateInvoice;

/*-------metadata-------*/

const metadata: FieldUpdater<Invoice>[] = [
	/* BASIC INFO */
	{
		name: "invoiceId",
		type: "number",
		label: "Invoice ID",
		placeholder: "ID",
		category: "Basic Info",
		readonly: true,
	},
	{
		name: "orderId",
		type: "number",
		label: "Order Id",
		placeholder: "ID",
		category: "Basic Info",
		readonly: true,
	},
	{
		name: "supplierId",
		type: "number",
		label: "Supplier Id",
		placeholder: "ID",
		category: "Basic Info",
		readonly: true,
	},
	{
		name: "payment",
		type: "number",
		label: "Payment",
		placeholder: "The Payment",
		category: "Basic Info",
		readonly: true,
	},
	{
		name: "returnStatus",
		type: "boolean",
		label: "Return Status",
		placeholder: "The Return Status",
		category: "Basic Info",
		readonly: true,
	},
    {
		name: "returnReason",
		type: "string",
		label: "Return Reason",
		placeholder: "The Return Reason",
		category: "Basic Info",
		readonly: true,
	},
    {
		name: "createdBy",
		type: "string",
		label: "Created By",
		placeholder: "The Created By",
		category: "Basic Info",
		readonly: true,
	},
    {
		name: "approvedBy",
		type: "string",
		label: "Approved By",
		placeholder: "The Approved By",
		category: "Basic Info",
		readonly: true,
	},
    {
		name: "remarks",
		type: "string",
		label: "Remarks",
		placeholder: "The Remarks",
		category: "Basic Info",
		readonly: true,
	},
	/* QUANTITY */
	{
		name: "quantityId",
		type: "number",
		label: "Quantity Id",
		placeholder: "ID",
		category: "Quantity",
		readonly: true,
	},
	/* Additional Fields */
	{
		name: "lastEditedDate",
		type: "string",
		label: "Last Edited Date",
		placeholder: "Date",
		category: "Additional Info",
		readonly: true,
	},
	{
		name: "lastEditedBy",
		type: "string",
		label: "Last Edited By",
		placeholder: "Name",
		category: "Additional Info",
		readonly: true,
	},
	
];