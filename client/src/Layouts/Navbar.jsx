import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Homepage from '../Pages/Homepage';
import Inventory from '../Pages/Inventory';
import Report from '../Pages/Report';

const Navbar = () => {
  return (
    <Router>
      <div className='flex flex-col gap-2 border'>
        <button><NavLink to="/" >Home</NavLink></button>
        <button><NavLink to="/Inventory" >Inventory </NavLink></button>
        <button><NavLink to="/Report" >Report</NavLink></button>
      </div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Inventory" element={<Inventory />} />
        <Route path="/Report" element={<Report />} />
      </Routes>
    </Router>
  );
};

export default Navbar;

