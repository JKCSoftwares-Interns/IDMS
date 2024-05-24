import React, { useState, useEffect } from 'react';
import data from '../../../data.json';
import { NavLink } from 'react-router-dom';
// import axios from 'axios';

const Inventory = () => {
  //   const [products, setProducts] = useState([]);
  //   const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState(null);

  //   useEffect(() => {
  //     axios.get('http://localhost:3000/fetchproducts')
  //       .then(response => {
  //         setProducts(response.data);
  //         setLoading(false);
  //       })
  //       .catch(error => {
  //         setError(error);
  //         setLoading(false);
  //       });
  //   }, []);

  // if (loading) {
  //   return <div className="text-center text-gray-500">Loading...</div>;
  // }

  // if (error) {
  //   return <div className="text-center text-red-500">Error: {error.message}</div>;
  // }

  return (
    <div className="container mx-auto p-4">
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        <div className='lg:col-span-3'>
        <h1 className="text-4xl font-bold mb-4 text-center">Product List</h1>
        <p className='text-2xl pt-5 pb-10 text-center'>To View the Product List just scroll down.</p>
        </div>
        <div>
        {/* <button className='pl-6 text-left'><NavLink to="/inventory/addProducts" >Add New Product</NavLink></button>
        <button className='pl-6 text-left'><NavLink to="/inventory/editProducts" >Edit Product Details</NavLink></button> */}
        </div>
        
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map(product => (
          <div key={product.id} className="border rounded-lg p-4 shadow-lg">
            <h2 className="text-xl font-semibold">{product.productName}</h2>
            <p className="text-gray-700">{product.category}</p>
            <p className="text-green-500 font-bold">${product.hsn}</p>
          </div>
        ))}
      </div> */}
      <div className="overflow-x-auto">
  <table className="w-full table-auto">
    <thead>
      <tr>
        <th className="border px-4 py-2">Product ID</th>
        <th className="border px-4 py-2">Product Name</th>
        <th className="border px-4 py-2">Category</th>
        <th className="border px-4 py-2">Pack Size</th>
        <th className="border px-4 py-2">Number of Units</th>
        <th className="border px-4 py-2">Unloading Price</th>
        <th className="border px-4 py-2">Edit</th>
        <th className="border px-4 py-2">Delete</th>
      </tr>
    </thead>
    <tbody>
      {data.map(product => (
        <tr key={product.id}>
          <td className="border px-4 py-2">{product.productId}</td>
          <td className="border px-4 py-2">{product.productName}</td>
          <td className="border px-4 py-2">{product.category}</td>
          <td className="border px-4 py-2">{product.packSize}</td>
          <td className="border px-4 py-2">{product.noOfUnits}</td>
          <td className="border px-4 py-2">{product.unloadingPrice}</td>
          {/* <td className="border px-4 py-2">
            
            <NavLink className='flex items-center gap-5 hover:bg-[#5e7bcc] p-2 hover:rounded-md' to='/inventory/editProducts'>
            
            <span className='text-gray-700 text-[1.2rem]'>Edit</span>
          </NavLink>
          </td>
          <td className="border px-4 py-2">
          <NavLink className='flex items-center gap-5 hover:bg-[#5e7bcc] p-2 hover:rounded-md' to='/inventory/addProducts'>
            
            <span className='text-gray-700 text-[1.2rem]'>Delete</span>
          </NavLink>
          </td> */}
          <td className="border px-4 py-2">
  <button>
    <NavLink className='flex items-center gap-5 hover:bg-[#5e7bcc] p-2 hover:rounded-md' to='/inventory/editProducts'>
      <span className='text-white-700 text-[1.2rem]'>Edit</span>
    </NavLink>
  </button>
</td>
<td className="border px-4 py-2">
  <button>
    <NavLink className='flex items-center gap-5 hover:bg-[#5e7bcc] p-2 hover:rounded-md' to='/inventory/addProducts'>
      <span className='text-white-700 text-[1.2rem]'>Delete</span>
    </NavLink>
  </button>
</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
    </div>
  );
};

export default Inventory;
