// import { useState } from "react";

// const AddVendors = () => {
//   const [formData, setFormData] = useState({
//     vendorId: "",
//     vendorName: "",
//     businessName: "",
//     email: "",
//     mobileNumber: "",
//     alternateMobileNumber: "",
//     addressLine1: "",
//     addressLine2: "",
//     landmark: "",
//     city: "",
//     district: "",
//     state: "",
//     pinCode: "",
//     gstin: "",
//     fssai: "",
//     registrationNumber: "",
//     aadharNumber: "",
//     panNumber: "",
//     otherDocuments: "",
//     status: "",
//     dateAdded: "",
//     addedBy: "",
//     lastEditedDate: "",
//     lastEditedBy: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const finalData = {
//       ...formData,
//       addedBy: "admin", //will be fetching username here
//     };

//     console.log("Form submitted:", finalData); //for debugging

//     fetch("/vendors/add", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(finalData),
//     })
//       .then((response) => {
//         if (
//           response.ok &&
//           response.headers.get("Content-Type")?.includes("application/json")
//         ) {
//           return response.json();
//         } else {
//           throw new Error("Server response wasn't OK or not JSON.");
//         }
//       })
//       .then((data) => {
//         console.log("Success:", data);
//         window.location.href = '/vendors';
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//         window.location.href = '/vendors';
//       });
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="w-full mx-auto p-4 border border-gray-300 rounded"
//     >
//       <div className="flex flex-col items-center">
//         <h1 className="text-4xl p-{4.5rem}">Add New Vendor</h1>
//         <p className="text-2xl pt-5 pb-10">
//           To add a new Vendor fill the following details asked in the form and
//           submit it.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
//         {[
          // { label: "Vendor Id", name: "vendorId", type: "text" },
          // { label: "Vendor Name", name: "vendorName", type: "text" },
          // { label: "Business Name", name: "businessName", type: "text" },
          // { label: "Email", name: "email", type: "email" },
          // { label: "Mobile Number", name: "mobileNumber", type: "tel", maxLength: 10 },
          // { label: "Alternate Mobile Number", name: "alternateMobileNumber", type: "tel", maxLength: 10},
          // { label: "Address Line 1", name: "addressLine1", type: "text" },
          // { label: "Address Line 2", name: "addressLine2", type: "text" },
          // { label: "Landmark", name: "landmark", type: "text" },
          // { label: "City", name: "city", type: "text" },
          // { label: "District", name: "district", type: "text" },
          // { label: "State", name: "state", type: "text" },
          // { label: "Pin Code", name: "pinCode", type: "number", maxLength:6 },
          // { label: "GSTIN", name: "gstin", type: "text" },
          // { label: "FSSAI", name: "fssai", type: "text" },
          // { label: "Registration Number", name: "registrationNumber", type: "text" },
          // { label: "Aadhar Number", name: "aadharNumber", type: "number", maxLength: 12 },
          // { label: "PAN Number", name: "panNumber", type: "text" },
          // { label: "Other Documents", name: "otherDocuments", type: "text" },
          // { label: "Status", name: "status", type: "text" },
          // { label: "Date Added", name: "dateAdded", type: "date" },
          // { label: "Added By", name: "addedBy", type: "text" },
          // { label: "Last Edited Date", name: "lastEditedDate", type: "date" },
          // { label: "Last Edited By", name: "lastEditedBy", type: "text" }
//         ].map((field) => (
//           <div key={field.name} className="mb-4">
//             <label htmlFor={field.name} className="block mb-2">
//               {field.label}:
//             </label>
//             <input
//               type={field.type}
//               id={field.name}
//               name={field.name}
//               value={formData[field.name]}
//               onChange={handleChange}
//               {...(field.maxLength && { maxLength: field.maxLength })}
//               className="w-full p-2 border border-gray-300 rounded"
//             />
//           </div>
//         ))}
//       </div>
//       <div className="flex justify-center">
//         <button
//           type="submit"
//           className="inline-block mx-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
//         >
//           Submit
//         </button>
//       </div>
//     </form>
//   );
// };

// export default AddVendors;

import { useState } from "react";
import serverInstance from "../../services/serverInstance";

const AddVendors = () => {
	const [formData, setFormData] = useState({
		  vendorId: "",
      vendorName: "",
      businessName: "",
      email: "",
      mobileNumber: "",
      alternateMobileNumber: "",
      addressLine1: "",
      addressLine2: "",
      landmark: "",
      city: "",
      district: "",
      state: "",
      pinCode: "",
      gstin: "",
      fssai: "",
      registrationNumber: "",
      aadharNumber: "",
      panNumber: "",
      otherDocuments: "",
      status: "",
      dateAdded: "",
      addedBy: "",
      lastEditedDate: "",
      lastEditedBy: "",
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

		serverInstance
			.post("/vendors/add", finalData)
			.then((response) => {
				console.log("Success:", response.data);
				window.location.href = "/vendors";
			})
			.catch((error) => {
				console.error("Error:", error);
				window.location.href = "/vendors";
			});
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="w-full mx-auto p-4 border border-gray-300 rounded"
		>
			<div className="flex flex-col items-center">
				<h1 className="text-4xl p-{4.5rem}">Add New Vendor</h1>
				<p className="text-2xl pt-5 pb-10">
					To add a new Vendor fill the following details asked in the form and
					submit it.
				</p>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
				{[
					{ label: "Vendor Id", name: "vendorId", type: "text" },
          { label: "Vendor Name", name: "vendorName", type: "text" },
          { label: "Business Name", name: "businessName", type: "text" },
          { label: "Email", name: "email", type: "email" },
          { label: "Mobile Number", name: "mobileNumber", type: "tel", maxLength: 10 },
          { label: "Alternate Mobile Number", name: "alternateMobileNumber", type: "tel", maxLength: 10},
          { label: "Address Line 1", name: "addressLine1", type: "text" },
          { label: "Address Line 2", name: "addressLine2", type: "text" },
          { label: "Landmark", name: "landmark", type: "text" },
          { label: "City", name: "city", type: "text" },
          { label: "District", name: "district", type: "text" },
          { label: "State", name: "state", type: "text" },
          { label: "Pin Code", name: "pinCode", type: "number", maxLength:6 },
          { label: "GSTIN", name: "gstin", type: "text" },
          { label: "FSSAI", name: "fssai", type: "text" },
          { label: "Registration Number", name: "registrationNumber", type: "text" },
          { label: "Aadhar Number", name: "aadharNumber", type: "number", maxLength: 12 },
          { label: "PAN Number", name: "panNumber", type: "text" },
          { label: "Other Documents", name: "otherDocuments", type: "text" },
          { label: "Status", name: "status", type: "text" },
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

export default AddVendors;

