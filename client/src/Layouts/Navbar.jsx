import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Homepage from '../Pages/Homepage';
import Inventory from '../Pages/inventory/viewProducts';
import Report from '../Pages/Report';
import Help from '../Pages/Help';
import Settings from '../Pages/Settings';
import ContactUs from '../Pages/ContactUs';

const Navbar = () => {
  return (
    <Router>
      <div className='flex flex-col p-3 gap-2 border'>
        <h3 className='p-2'>General</h3>
        <button className='pl-6 text-left'><NavLink to="/" >Home</NavLink></button>
        <button className='pl-6 text-left'><NavLink to="/Inventory" >Inventory </NavLink></button>
        <button className='pl-6 text-left'><NavLink to="/Report" >Report</NavLink></button>
        <h3 className='p-2'>Support</h3>
        <button className='pl-6 text-left'><NavLink to="/Help">Help</NavLink></button>
        <button className='pl-6 text-left'><NavLink to="/Settings" >Settings</NavLink></button>
        <button className='pl-6 text-left'><NavLink to="/ContactUs" >Contact us</NavLink></button>
      </div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Inventory" element={<Inventory />} />
        <Route path="/Report" element={<Report />} />
        <Route path="/Help" element={<Help />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default Navbar;

