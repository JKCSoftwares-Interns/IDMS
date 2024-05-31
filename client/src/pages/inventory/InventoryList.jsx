import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import { Container } from "@mui/material";

import serverInstance from "../../services/serverInstance";
import { MuiTable } from "../../components/MuiTable";
import PageAnimate from "../../components/PageAnimate";

const tableFields = [
  { key: "productName", label: "Product Name" },
  { key: "category", label: "Category" },
  { key: "quantity", label: "Quantity" },
  { key: "supplierName", label: "Supplier Name" },
  { key: "purchaseDate", label: "Purchase Date" },
  { key: "expiryDate", label: "Expiry Date" },
  { key: "status", label: "Status" },
];

const InventoryList = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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

  const filteredData = data.filter((item) =>
    item.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
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
  );
};

export default InventoryList;
