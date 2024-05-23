import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Homepage from '../Pages/Homepage';
import Inventory from '../Pages/inventory/viewProducts';
import Report from '../Pages/Report';
import Help from '../Pages/Help';
import Settings from '../Pages/Settings';
import ContactUs from '../Pages/ContactUs';
import AddProducts from '../Pages/inventory/addProducts';
const Routing = () => {
    return (
        
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/report" element={<Report />} />
            <Route path="/help" element={<Help />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/addproducts" element={<AddProducts />} />
        </Routes>
    
    );
  };
  
  export default Routing;
