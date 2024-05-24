import React, { useState, useEffect } from 'react';
//code isnt working
const EditProducts = () => {
    const [productId, setProductId] = useState('');
    const [productData, setProductData] = useState(null);
    const [searched, setSearched] = useState(false);

    useEffect(() => {
        const fetchProductData = async () => {
            try {
                const response = await fetch('/client/data.json'); //json path
                const data = await response.json();
                setProductData(data);
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        };

  const handleSearchChange = (e) => {
    setSearchId(e.target.value);
  };
      
    const handleChange = (e) => {
        setProductId(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const foundProduct = productData.find(product => product.productId === productId);
        if (foundProduct) {
            setProductData(foundProduct);
            setSearched(true);
        } else {
            setProductData(null);
            setSearched(false);
        }
    };

    const handleProductChange = (e) => {
        const { name, value } = e.target;
        setProductData({
            ...productData,
            [name]: value
        });
    };

    const handleUpdate = async () => {
        try {
            // Update the database with the modified product data
            // For example, you can send a PUT request to the backend
            console.log('Product data updated:', productData);
        } catch (error) {
            console.error('Error updating product data:', error);
        }
    };
    setFormData(updatedFormData);
    console.log("Form submitted:", updatedFormData);
    // You can add your form submission logic here, such as sending data to a server.
  };
              
    return (
        <div className="w-full mx-auto p-4 border border-gray-300 rounded">
            <div className="flex flex-col items-center">
                <h1 className="text-4xl">Edit Product</h1>
                <p className='text-2xl pt-5 pb-10'>Enter the product ID to search for and update the details.</p>
            </div>

            <form onSubmit={handleSubmit} className="mb-4">
                <label htmlFor="productId" className="block mb-2">Product ID:</label>
                <input
                    type="text"
                    id="productId"
                    name="productId"
                    value={productId}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <button type="submit" className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Search
                </button>
            </form>

            {searched && productData && (
                <form className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {Object.entries(productData).map(([key, value]) => (
                        <div key={key} className="mb-4">
                            <label htmlFor={key} className="block mb-2">
                                {key.replace(/([A-Z])/g, ' $1') + ':'}
                            </label>
                            <textarea
                                id={key}
                                name={key}
                                value={value}
                                onChange={handleProductChange}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                    ))}
                </form>
            )}

            {searched && productData && (
                <div className="flex justify-center">
                    <button onClick={handleUpdate} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                        Update
                    </button>
                </div>
            )}
        </div>
    );
};

export default EditProducts;