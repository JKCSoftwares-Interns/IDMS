// src/Navbar.js
// import React from 'react';
// import './Navbar.css'; // This is optional if you want to add some CSS styling
import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Homepage from '../Pages/Homepage';
import Inventory from '../Pages/Inventory';
import Report from '../Pages/Report';

// import Navbar from './Navbar';
// import Home from './Home';
// import About from './About';
// import Services from './Services';
// import Contact from './Contact';

const Navbar = () => {
  return (
    <Router>
      <div>
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

