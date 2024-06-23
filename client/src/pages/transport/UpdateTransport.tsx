import PageAnimate from "../../components/PageAnimate";
import { useParams } from "react-router-dom";
import UpdateForm from "../../components/UpdateForm";
import { FieldUpdater } from "../../utils/formHelper";
import { useState } from "react";

interface Transport {
	transportId: string;
	transportName: string;
	businessName: string;
	vehicleName: string;
	email: string;
	mobileNumber: number;
	alternateMobileNumber: number;
	addressLine1: string;
	addressLine2: string;
	landmark: string;
	city: string;
	district: string;
	state: string;
	pinCode: number;
	branchOffice: string;
	aadharNumber: number;
	panNumber: number;
	driverName: string;
	driverMobileNumber: number;
	driverAlternateNumber: number;
	status: string;
	dateAdded: string;
	addedBy: string;
	lastEditedDate: string;
	lastEditedBy: string;
}

const UpdateTransport: React.FC = () => {
  const { transportId } = useParams();

	const [data, setData] = useState({} as Transport[]);

	if (!transportId) {
		return <h1>Product ID not found</h1>;
	}

	return (
		<PageAnimate className={"w-full"}>
			<UpdateForm
				title={"transport"}
				id={transportId}
				data={data}
				metadata={metadata}
				setData={setData}
			/>
		</PageAnimate>
	);
};

export default UpdateTransport;

const metadata: FieldUpdater<Transport>[] = [
  /* Basic Info */
  {
      name: "transportId",
      type: "string",
      label: "Transport ID",
      placeholder: "Transport ID",
      category: "Basic Info",
      readonly: true,
  },
  {
      name: "transportName",
      type: "string",
      label: "Transport Name",
      placeholder: "Transport Name",
      category: "Basic Info",
      readonly: false,
  },
  {
      name: "businessName",
      type: "string",
      label: "Business Name",
      placeholder: "Business Name",
      category: "Basic Info",
      readonly: false,
  },
  {
      name: "vehicleName",
      type: "string",
      label: "Vehicle Name",
      placeholder: "Vehicle Name",
      category: "Basic Info",
      readonly: false,
  },

  /* Contact Info */
  {
      name: "email",
      type: "string",
      label: "Email",
      placeholder: "Email",
      category: "Contact Info",
      readonly: false,
  },
  {
      name: "mobileNumber",
      type: "number",
      label: "Mobile Number",
      placeholder: "Mobile Number",
      category: "Contact Info",
      readonly: false,
  },
  {
      name: "alternateMobileNumber",
      type: "number",
      label: "Alternate Mobile Number",
      placeholder: "Alternate Mobile Number",
      category: "Contact Info",
      readonly: false,
  },

  /* Address */
  {
      name: "addressLine1",
      type: "string",
      label: "Address Line 1",
      placeholder: "Address Line 1",
      category: "Address",
      readonly: false,
  },
  {
      name: "addressLine2",
      type: "string",
      label: "Address Line 2",
      placeholder: "Address Line 2",
      category: "Address",
      readonly: false,
  },
  {
      name: "landmark",
      type: "string",
      label: "Landmark",
      placeholder: "Landmark",
      category: "Address",
      readonly: false,
  },
  {
      name: "city",
      type: "string",
      label: "City",
      placeholder: "City",
      category: "Address",
      readonly: false,
  },
  {
      name: "district",
      type: "string",
      label: "District",
      placeholder: "District",
      category: "Address",
      readonly: false,
  },
  {
      name: "state",
      type: "string",
      label: "State",
      placeholder: "State",
      category: "Address",
      readonly: false,
  },
  {
      name: "pinCode",
      type: "number",
      label: "Pin Code",
      placeholder: "Pin Code",
      category: "Address",
      readonly: false,
  },
  {
      name: "branchOffice",
      type: "string",
      label: "Branch Office",
      placeholder: "Branch Office",
      category: "Address",
      readonly: false,
  },

  /* Legal Info */
  {
      name: "aadharNumber",
      type: "number",
      label: "Aadhar Number",
      placeholder: "Aadhar Number",
      category: "Legal Info",
      readonly: false,
  },
  {
      name: "panNumber",
      type: "number",
      label: "PAN Number",
      placeholder: "PAN Number",
      category: "Legal Info",
      readonly: false,
  },

  /* Driver Info */
  {
      name: "driverName",
      type: "string",
      label: "Driver Name",
      placeholder: "Driver Name",
      category: "Driver Info",
      readonly: false,
  },
  {
      name: "driverMobileNumber",
      type: "number",
      label: "Driver Mobile Number",
      placeholder: "Driver Mobile Number",
      category: "Driver Info",
      readonly: false,
  },
  {
      name: "driverAlternateNumber",
      type: "number",
      label: "Driver Alternate Number",
      placeholder: "Driver Alternate Number",
      category: "Driver Info",
      readonly: false,
  },

  /* Status Info */
  {
      name: "status",
      type: "string",
      label: "Status",
      placeholder: "Status",
      category: "Status Info",
      readonly: false,
  },

  /* Additional Info */
  {
      name: "dateAdded",
      type: "date",
      label: "Date Added",
      placeholder: "Date",
      category: "Additional Info",
      readonly: true,
  },
  {
      name: "addedBy",
      type: "string",
      label: "Added By",
      placeholder: "Name",
      category: "Additional Info",
      readonly: true,
  },
  {
      name: "lastEditedDate",
      type: "date",
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