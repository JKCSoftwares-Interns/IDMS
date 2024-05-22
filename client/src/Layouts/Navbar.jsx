import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
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
  );
};

export default Navbar;

