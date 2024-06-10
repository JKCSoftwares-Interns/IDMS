import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import { Container } from "@mui/material";

import serverInstance from "../../services/serverInstance";
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

const InventoryList = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [key, setKey] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await serverInstance.get("/inventory");
        setData(response.data);
      } catch (error) {
        console.error("Failed to fetch inventory:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchProductCount = async () => {
      try {
        const response = await serverInstance.get("/products/count");
        setKey(response.data > 0);
      } catch (error) {
        console.error("Failed to fetch product count:", error);
      }
    };
  
    fetchProductCount();
  }, []);

  //************************************* */
  const filteredData = data.filter(
    (inventory) =>
      inventory.supplier &&
      inventory.supplier.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  //************************************** */
  return key ? (
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
        />
      </Container>
    </PageAnimate>
  ) : (
    <>
      <div className="min-h-screen w-full grid place-items-center">
        <h1 className="text-3xl font-bold"> please add products first! </h1>
      </div>
    </>
  );
};

export default InventoryList;
