import React from 'react';
import Navbar from './Layouts/Navbar';
import Homepage from './Pages/Homepage';
import Inventory from './Pages/Inventory';
import Report from './Pages/Report';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
function App() {
  
  /* add layouts here */


  return (
    
      <div className="min-h-screen grid place-items-center">
        <Navbar />

        
      </div>
  );
}

export default App


