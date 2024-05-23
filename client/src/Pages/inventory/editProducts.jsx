import React, { useState, useEffect } from 'react';

const editProducts = () => {
    const [formData, setFormData] = useState({
        productId: '',
        productName: '',
        category: '',
        measuringUnit: '',
        packSize: '',
        numberOfUnits: '',
        unitMRP: '',
        packMRP: '',
        manufacturer: '',
        marketer: '',
        supplier: '',
        upc: '',
        hsn: '',
        cgst: '',
        sgst: '',
        igst: '',
        cess: '',
        loadPrice: '',
        unloadingPrice: '',
        dateAdded: '',
        addedBy: '',
        lastEditedDate: '',
        lastEditedBy: '',
    });

    // Fetch product data from JSON file
    useEffect(() => {
        const fetchProductData = async () => {
            try {
                const response = await fetch('/client/data.json'); //json path
                const data = await response.json();
                setFormData(data);
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        };

        fetchProductData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // You can add your update logic here, such as sending data to a server.
    };

    return (
        <form onSubmit={handleSubmit} className="w-full mx-auto p-4 border border-gray-300 rounded">
            <div className="flex flex-col items-center">
                <h1 className="text-4xl p-{4.5rem}">Edit Product</h1>
                <p className='text-2xl pt-5 pb-10'>Edit the details of the product and submit the changes.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {Object.keys(formData).map((fieldName) => (
                    <div key={fieldName} className="mb-4">
                        <label htmlFor={fieldName} className="block mb-2">
                            {fieldName.replace(/([A-Z])/g, ' $1') + ':'}
                        </label>
                        <input
                            type={fieldName.includes('Date') ? 'date' : 'text'}
                            id={fieldName}
                            name={fieldName}
                            value={formData[fieldName]}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                ))}
            </div>

            <div className="flex justify-center">
                <button type="submit" className="inline-block mx-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
                    Update
                </button>
            </div>
        </form>
    );
};

export default editProducts;
