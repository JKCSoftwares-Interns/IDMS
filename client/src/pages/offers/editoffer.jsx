import axios from "axios";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import serverInstance from "../../services/serverInstance";

const EditOffer = () => {
  const { offerid } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await serverInstance.get("/products");
        setData(response.data);
      } catch (error) {
        console.error("Failed to fetch offer:", error);
      }
    };

    fetchData();
  }, []);

  const offerData = data.find((offer) => offer.offerId == offerId); //comparing numbers and string

  const [formData, setFormData] = useState({
    OfferID: "",
    OfferType: "",
    OfferName: "",
    StartDate: "",
    EndDate: "",
    Products: "",
    DiscountValue: "",
    DiscountPercentage: "",
    MaximumDiscountValue: "",
    MinimumPurchase: "",
    OfferApplicabilityFrequency: "",
    ApplicableTo: "",
    Status: "",
    DateAdded: "",
    AddedBy: "",
    LastEditedDate: "",
    LastEditedBy: "",
 
  });

  useEffect(() => {
    if (productData) {
      setFormData(offerData);
    }
  }, [offerData]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Logic to update data here
    console.log("Form submitted:", formData);

    try {
      const response = await axios.post(
        /offer/edit/${offerId},
        formData,
      );
      console.log("Response:", response.data);
      window.location.href = '/offer';
    } catch (error) {
      console.error("Failed to update offer:", error);
      window.location.href = '/offer';
    }
  };

  const readOnlyFields = [
    "offerId",
    "dateAdded",
    "addedBy",
    "lastEditedDate",
    "lastEditedBy",
  ];

  const fields = [
    { label: "Offer ID", name: "offerid", type: "text" },
    { label: "Offer Type", name: "offertype", type: "text" },
    { label: "Offer Name", name: "offername", type: "text" },
    { label: " Start Date", name: "startdate", type: "number" },
    { label: "End Date", name: "enddate", type: "number" },
    { label: "Products", name: "products", type: "number" },
    { label: " Discount Value", name: "discountvalue", type: "number" },
    { label: "Discount Percentage", name: "discountpercentage", type: "text" },
    { label: " Maximum Discount Value", name: "maximumdiscountvalue", type: "text" },
    { label: "Minimum Purchase", name: "minimumpurchase", type: "text" },
    { label: "Offer Applicability Frequency", name: "offerapplicabilityfrequency", type: "number" },
    { label: "Applicable To", name: "applicableto", type: "number" },
    { label: " Status", name: "status", type: "number" },
    { label: "Date Added", name: "dateadded", type: "number" },
    { label: "Added By", name: "igst", type: "addedby" },
    { label: "Last Edited Date", name: "lastediteddate", type: "number" },
    { label: "Last Edited By", name: "lasteditedby", type: "number" },
  ];

  return offerData ? (
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
    <div className="p-6 bg-white rounded shadow-md">offer not found</div>
  );
};

export default EditOffer;