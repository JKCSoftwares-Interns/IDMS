import  { useState } from 'react';

const LocationShifting = () => {
  const [formData, setFormData] = useState({
    inventoryLogID: '',
    orderedDate: '',
    dateOfEntry: '',
    referenceNumber: '',
    supplier: '',
    purpose: '',
    productID: '',
    dateOfManufacturing: '',
    dateOfExpiry: '',
    quantity: '',
    purchasePrice: '',
    sellingPrice: '',
    batchNumber: '',
    storageLocation: '',
    additionalNote: '',
    dateAdded: '',
    addedBy: '',
    lastEditedDate: '',
    lastEditedBy: '',
    currentLocation: '',
    newLocation: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    console.log('Form data saved:', formData);
  };

  const formatLabel = (key) => {
    let label = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
    if (label.includes('I D')) {
      label = label.replace('I D', 'ID');
    }
    return label;
  };

  const getInputType = (key) => {
    const dateFields = ['orderedDate', 'dateOfEntry', 'dateOfManufacturing', 'dateOfExpiry', 'dateAdded', 'lastEditedDate'];
    return dateFields.includes(key) ? 'date' : 'text';
  };

  return (
    <div className="flex flex-col items-center w-screen mx-auto gap-4">
      <h1 className="text-2xl font-bold mt-4">LOCATION SHIFTING</h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Editable Fields */}
        {Object.keys(formData).filter(key => key !== 'currentLocation' && key !== 'newLocation').map((key) => (
          <div key={key} className="bg-white p-4 shadow mb-6">
            <label className="block text-gray-700 mb-2">{formatLabel(key)}:</label>
            <input
              type={getInputType(key)}
              name={key}
              value={formData[key]}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder={formatLabel(key)}
              readOnly={['addedBy', 'dateAdded', 'lastEditedBy', 'lastEditedDate'].includes(key)}
            />
          </div>
        ))}
      </div>
      {/* Location Inputs */}
      <div className="bg-white p-4 shadow mb-6 w-full md:w-1/2">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Current Location:</label>
          <input
            type="text"
            name="currentLocation"
            value={formData.currentLocation}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Current Location"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">New Location:</label>
          <input
            type="text"
            name="newLocation"
            value={formData.newLocation}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="New Location"
          />
        </div>
      </div>
      {/* Save/Update Button */}
      <div className="w-full flex justify-center">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={handleSave}
        >
          Save/Update
        </button>
      </div>
    </div>
  );
};

export default LocationShifting;