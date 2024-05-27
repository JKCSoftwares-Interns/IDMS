import {  Route, Routes } from 'react-router-dom';
import Homepage from '../Pages/Homepage';
import ProductList from '../Pages/products/viewProducts';
import AddProducts from '../Pages/products/addProducts/addProducts';
import EditProducts from '../Pages/products/editProducts';
import Report from '../Pages/Report';
import Help from '../Pages/Help';
import Settings from '../Pages/Settings';
import ContactUs from '../Pages/ContactUs';

const Routing = () => {
    return (
        
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/report" element={<Report />} />
            <Route path="/help" element={<Help />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/products/add" element={<AddProducts />} />
            <Route path="/products/edit/:productId" element={<EditProducts />} />
        </Routes>
    
    );
  };
  
  export default Routing;
