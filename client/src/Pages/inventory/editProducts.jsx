import React, { useState, useEffect } from "react";

const AddProducts = () => {
  const [products, setProducts] = useState([]);
  const [searchId, setSearchId] = useState("");
  const [formData, setFormData] = useState({
    productId: "",
    productName: "",
    category: "",
    measuringUnit: "",
    packSize: "",
    numberOfUnits: "",
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
  const [productFound, setProductFound] = useState(true);

  useEffect(() => {
    // Fetch the product data from data.json
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching product data:", error));
  }, []);

  const handleSearchChange = (e) => {
    setSearchId(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const result = products.find((product) => product.productId === searchId);
    if (result) {
      setFormData(result);
      setProductFound(true);
    } else {
      setFormData({
        productId: "",
        productName: "",
        category: "",
        measuringUnit: "",
        packSize: "",
        numberOfUnits: "",
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
      setProductFound(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedFormData = {
      ...formData,
      lastEditedDate: new Date().toISOString().split("T")[0], // Format date as YYYY-MM-DD
      lastEditedBy: "Current User", // Replace with actual user name
    };
    setFormData(updatedFormData);
    console.log("Form submitted:", updatedFormData);
    // You can add your form submission logic here, such as sending data to a server.
  };

  return (
    <div>
      <form
        onSubmit={handleSearch}
        className="w-full mx-auto p-4 border border-gray-300 rounded mb-6"
      >
        <div className="flex flex-col items-center">
          <h1 className="text-4xl p-{4.5rem}">Edit Product</h1>
          <p className="text-2xl pt-5 pb-10">
            To edit a product, enter the Product ID and click Search.
          </p>
        </div>
        <div className="flex justify-center mb-4">
          <input
            type="text"
            value={searchId}
            onChange={handleSearchChange}
            placeholder="Enter Product ID"
            className="w-1/2 p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Search
          </button>
        </div>
      </form>

      {!productFound && (
        <div className="text-center text-red-500 mb-4">Product not found</div>
      )}

      <form
        onSubmit={handleSubmit}
        className="w-full mx-auto p-4 border border-gray-300 rounded"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              label: "Product ID",
              name: "productId",
              type: "text",
              readOnly: true,
            },
            { label: "Product Name", name: "productName", type: "text" },
            { label: "Category", name: "category", type: "text" },
            { label: "Measuring Unit", name: "measuringUnit", type: "text" },
            { label: "Pack Size", name: "packSize", type: "number" },
            { label: "No. of Units", name: "numberOfUnits", type: "number" },
            { label: "Unit MRP", name: "unitMRP", type: "number" },
            { label: "Pack MRP", name: "packMRP", type: "number" },
            { label: "Manufacturer", name: "manufacturer", type: "text" },
            { label: "Marketer", name: "marketer", type: "text" },
            { label: "Supplier", name: "supplier", type: "text" },
            { label: "UPC", name: "upc", type: "number" },
            { label: "HSN", name: "hsn", type: "number" },
            { label: "CGST", name: "cgst", type: "number" },
            { label: "SGST", name: "sgst", type: "number" },
            { label: "IGST", name: "igst", type: "number" },
            { label: "CESS", name: "cess", type: "number" },
            { label: "Load Price", name: "loadPrice", type: "number" },
            {
              label: "Unloading Price",
              name: "unloadingPrice",
              type: "number",
            },
            { label: "Date Added", name: "dateAdded", type: "date" },
            { label: "Added By", name: "addedBy", type: "text" },
            { label: "Last Edited Date", name: "lastEditedDate", type: "date" },
            { label: "Last Edited By", name: "lastEditedBy", type: "text" },
          ].map((field) => (
            <div key={field.name} className="mb-4">
              <label htmlFor={field.name} className="block mb-2">
                {field.label}:
              </label>
              <input
                type={field.type}
                id={field.name}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                readOnly={field.name === "productId" && formData.productId}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="inline-block mx-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProducts;
