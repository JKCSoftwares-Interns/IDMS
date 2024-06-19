import { useState } from "react";
import PageAnimate from "../../components/PageAnimate";
import AddForm from "../../components/AddForm";
import { Field, initializeFormData } from "../../utils/formHelper";

/* Order to `data` and `interface` should match. */

interface Invoice {
	invoiceId: number;
	orderId: number;
	suppilerId: number;
	payment: number;
	quantityId: number;
	returnStatus: string;
	createdBy: string;
	approvedBy: string;
	remarks: string;
	lastEditedDate: string;
	lastEditedBy: string;
    // [key: string | number ]: React.ReactNode;
}

const metadata: Field<Invoice>[] = [
    /* BASIC INFO */
    { name: "invoiceId", type: "number", label: "Invoice Id", placeholder: "The Invoice Id", category: "Basic Info" },
    { name: "orderId", type: "number", label: "Order Id", placeholder: "The Order Id", category: "Basic Info" },
    { name: "suppilerId", type: "number", label: "Suppiler Id", placeholder: "The Suppiler Id", category: "Basic Info" },
    { name: "payment", type: "number", label: "Payment", placeholder: "The Payment", category: "Basic Info" },
	{ name: "quantityId", type: "number", label: "Quantity Id", placeholder: "The Quantity Id", category: "Basic Info" },
    { name: "createdBy", type: "string", label: "Created By", placeholder: "The Created By", category: "Basic Info" },
    { name: "approvedBy", type: "string", label: "Approved By", placeholder: "The Approved By", category: "Basic Info" },
	{ name: "remarks", type: "string", label: "Remarks", placeholder: "The Remarks", category: "Basic Info" },
	{ name: "lastEditedDate", type: "string", label: "Last Edited Date", placeholder: "The Last Edited Date", category: "Basic Info" },
	{ name: "lastEditedBy", type: "string", label: "Last Edited By", placeholder: "The Last Edited By", category: "Basic Info" },
    // Status Info
    { name: "returnStatus", type: "string", label: "Return Status", placeholder: "The Return Status", category: "Status Info"},
];

const AddInvoice = () => {
	const [formData, setFormData] = useState<Invoice>(initializeFormData(metadata));

	// console.log("formData: ", formData);

	return (
		<PageAnimate className={"w-full"}>
			<div className="w-full p-6 flex justify-center items-center gap-5">
				<div className="bg-opacity-30 p-4 h-fit rounded-md items-center justify-center flex-col flex gap-5">
					<h1 className="font-extrabold text-2xl border-b w-fit pb-2">
						Add to Invoice List
					</h1>

					<AddForm
						title="invoice"
						formData={formData}
						setFormData={setFormData}
						metadata={metadata}
					/>
				</div>
			</div>
		</PageAnimate>
	);
};

export default AddInvoice;
