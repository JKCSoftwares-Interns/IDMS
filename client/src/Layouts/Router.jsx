import React from 'react';
import {  Route, Routes, NavLink } from 'react-router-dom';
import Homepage from '../Pages/Homepage';
import Inventory from '../Pages/inventory/viewProducts';
import Report from '../Pages/Report';
import Help from '../Pages/Help';
import Settings from '../Pages/Settings';
import ContactUs from '../Pages/ContactUs';
const Routing = () => {
    return (
        
        
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/Inventory" element={<Inventory />} />
            <Route path="/Report" element={<Report />} />
            <Route path="/Help" element={<Help />} />
            <Route path="/Settings" element={<Settings />} />
            <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
    
    );
  };
  
  export default Routing;
