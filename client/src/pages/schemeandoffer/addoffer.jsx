import { useState } from "react";

const  Offers= () => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const finalData = {
      ...formData,
      addedBy: "admin", //will be fetching username here
    };

    console.log("Form submitted:", finalData); //for debugging

    fetch("/schemeandoffers/add/it", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(finalData),
    })
      .then((response) => {
        if (
          response.ok &&
          response.headers.get("Content-Type")?.includes("application/json")
        ) {
          return response.json();
        } else {
          throw new Error("Server response wasn't OK or not JSON.");
        }
      })
      .then((data) => {
        console.log("Success:", data);
        window.location.href = '/scheme/offer';
      })
      .catch((error) => {
        console.error("Error:", error);
        window.location.href = '/scheme/offer';
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full mx-auto p-4 border border-gray-300 rounded"
    >
      <div className="flex flex-col items-center">
        <h1 className="text-4xl p-{4.5rem}">Scheme/Offer</h1>
        <p className="text-2xl pt-5 pb-10">
          To add a new scheme/offer fill the following details asked in the form and
          submit it.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {[
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
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="inline-block mx-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Offers;