import axios from "axios";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import serverInstance from "../../services/serverInstance";

const EditProducts = () => {
  const navigate = useNavigate();

  const { productId } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await serverInstance.get("/products");
        setData(response.data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchData();
  }, []);

  const productData = data.find((product) => product.productId == productId); //comparing numbers and string

  const [formData, setFormData] = useState({
    productId: "",
    productName: "",
    category: "",
    measuringUnit: "",
    packSize: "",
    noOfUnits: "",
    unitMRP: "",
    packMRP: "",
    manufacturer: "",
    marketer: "",
    supplier: "",
    upc: "",
    hsn: "",
    cgst: "",
    sgst: "",
    igst: "",
    cess: "",
    loadPrice: "",
    unloadingPrice: "",
    dateAdded: "",
    addedBy: "",
    lastEditedDate: "",
    lastEditedBy: "",
  });

  useEffect(() => {
    if (productData) {
      setFormData(productData);
    }
  }, [productData]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("updated form sending:", formData);

    try {
      const response = await serverInstance.post(`/products/edit/${productId}`, formData);
      console.log("Response:", response.data);
      navigate("/products");
    } catch (error) {
      console.error("Failed to update product:", error);
    }
  };

  const readOnlyFields = [
    "productId",
    "dateAdded",
    "addedBy",
    "lastEditedDate",
    "lastEditedBy",
  ];

  const fields = [
    { label: "Product ID", name: "productId", type: "text" },
    { label: "Product Name", name: "productName", type: "text" },
    { label: "Category", name: "category", type: "text" },
    { label: "Measuring Unit", name: "measuringUnit", type: "text" },
    { label: "Pack Size", name: "packSize", type: "number" },
    { label: "No. of Units", name: "noOfUnits", type: "number" },
    { label: "Unit MRP", name: "unitMRP", type: "number" },
    { label: "Pack MRP", name: "packMRP", type: "number" },
    { label: "Manufacturer", name: "manufacturer", type: "text" },
    { label: "Marketer", name: "marketer", type: "text" },
    { label: "Supplier", name: "supplier", type: "text" },
    { label: "UPC", name: "upc", type: "text" },
    { label: "HSN", name: "hsn", type: "text" },
    { label: "CGST", name: "cgst", type: "number" },
    { label: "SGST", name: "sgst", type: "number" },
    { label: "IGST", name: "igst", type: "number" },
    { label: "CESS", name: "cess", type: "number" },
    { label: "Load Price", name: "loadPrice", type: "number" },
    { label: "Unloading Price", name: "unloadingPrice", type: "number" },
    { label: "Date Added", name: "dateAdded", type: "date" },
    { label: "Added By", name: "addedBy", type: "text" },
    { label: "Last Edited Date", name: "lastEditedDate", type: "date" },
    { label: "Last Edited By", name: "lastEditedBy", type: "text" },
  ];

  return productData ? (
    <div className="p-6 bg-white rounded shadow-md">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {fields.map((field) => (
          <div key={field.name} className="mb-4">
            <label
              htmlFor={field.name}
              className="block mb-2 text-gray-700 font-medium"
            >
              {field.label}:
            </label>
            {readOnlyFields.includes(field.name) ? (
              <p
                id={field.name}
                className="p-2 border border-gray-300 rounded bg-dodgerblue text-lime-500"
              >
                {formData[field.name]}
              </p>
            ) : (
              <input
                type={field.type}
                id={field.name}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          onClick={handleSubmit}
          className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Update
        </button>
      </div>
    </div>
  ) : (
    <div className="p-6 bg-white rounded shadow-md">Product not found</div>
  );
};

export default EditProducts;
