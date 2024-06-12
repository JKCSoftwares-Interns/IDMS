import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Button,
} from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';

import { Container } from '@mui/material';

import {serverInstance} from "../../services/backendUtils";
import { MuiTable } from "../../components/MuiTable";
import PageAnimate from "../../components/PageAnimate";

const tableFields = [
  { key: "vendorId", label: "Vendor ID" },
  { key: "vendorName", label: "Vendor Name" },
  { key: "businessName", label: "Business Name" },
  { key: "email", label: "Email" },
  { key: "mobileNumber", label: "Mobile Number" },
  // { key: "alternateMobileNumber", label: "Alternate Mobile Number" },
  // { key: "addressLine1", label: "Address Line 1" },
  // { key: "addressLine2", label: "Address Line 2" },
  // { key: "landmark", label: "Landmark" },
  // { key: "city", label: "City" },
  // { key: "district", label: "District" },
  { key: "state", label: "State" },
  { key: "pinCode", label: "Pin Code" },
  { key: "gstin", label: "GSTIN" },
  { key: "fssai", label: "FSSAI" },
  // { key: "registrationNumber", label: "Registration Number" },
  // { key: "aadharNumber", label: "Aadhar Number" },
  // { key: "panNumber", label: "PAN Number" },
  { key: "otherDocuments", label: "Other Documents" },
  { key: "status", label: "Status" },
  // { key: "dateAdded", label: "Date Added" },
  // { key: "addedBy", label: "Added By" },
  // { key: "lastEditedDate", label: "Last Edited Date" },
  // { key: "lastEditedBy", label: "Last Edited By" }

];

const VendorList = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await serverInstance.get("/vendors");
        const processedData = response.data.map(item => {
					const newItem = { ...item };
					tableFields.forEach(field => {
						if (!newItem[field.key]) {
							newItem[field.key] = 'N/A' || 0;
						}
					});
					return newItem;
				});

				setData(processedData);
      } catch (error) {
        console.error("Failed to fetch vendors:", error);
      }
    };

    fetchData();
  }, []);

  const filteredData = data.filter((vendor) =>
    vendor.vendorName.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (

    <PageAnimate className={"w-full"}>
    <Container sx={{ p: 2 }}>

      <div className="flex p-8 justify-between items-center w-full">
        <h1 className="text-4xl font-bold">Vendor Details</h1>
        <input
          className="px-4 py-2 border max-w-max rounded-lg"
          placeholder="Search Vendors..."
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <NavLink
          to="/vendors/add"
        >
          <Button size="large" variant="contained" color="success">
            <AddCircleIcon />
          </Button>
        </NavLink>
      </div>
      
      {/*  
        
        REQUIREMENTS:-
        
          > Data fetch from server 
          > Model your fields
      
      */}

      <MuiTable 
        title={"vendors"}
        tableFields={tableFields}
        tableData={filteredData}
        setTableData={setData}
       />


    </Container>
    </PageAnimate>
  );
};

export default VendorList;
