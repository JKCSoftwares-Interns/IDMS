import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Homepage from '../Pages/Homepage';
import Inventory from '../Pages/inventory/viewProducts';
import AddProducts from '../Pages/inventory/addProducts';
import EditProducts from '../Pages/inventory/editProducts';
import Report from '../Pages/Report';
import Help from '../Pages/Help';
import Settings from '../Pages/Settings';
import ContactUs from '../Pages/ContactUs';

const Routing = () => {
    return (
        
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/report" element={<Report />} />
            <Route path="/help" element={<Help />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/inventory/addproducts" element={<AddProducts />} />
            <Route path="/inventory/editproducts/:productId" element={<EditProducts />} />
        </Routes>
    
    );
  };
  
  export default Routing;
