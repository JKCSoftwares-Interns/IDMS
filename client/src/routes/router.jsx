/* This file needs to be divided */

import { useLocation, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// HOMR
import Home from "../pages/Home";

// EXPERIMENT
import Experiment from "../pages/secret/experiment";

// SUPPORT
import Help from "../pages/support/Help";
import Settings from "../pages/support/Settings";
import ContactUs from "../pages/support/ContactUs";

// PRODUCTS
import ProductList from "../pages/products/ViewProducts";
import AddProducts from "../pages/products/AddProducts";
import EditProducts from "../pages/products/UpdateProduct";

// TRANSPORT
import TransportList from "../pages/transport/ViewTransport";
import AddTransport from "../pages/transport/AddTransport";
import UpdateTransport from "../pages/transport/UpdateTransport";

// VENDORS
import VendorList from "../pages/vendors/ViewVendors";
import AddVendors from "../pages/vendors/AddVendors";
import UpdateVendor from "../pages/vendors/UpdateVendor";

// SCHEMES
import Offers from "../pages/offers/ViewOffer";
import AddOffer from "../pages/offers/AddOffer";
import UpdateOffer from "../pages/offers/UpdateOffer";

// INVENTORY
import InventoryList from "../pages/inventory/ViewInventory";
import AddInventory from "../pages/inventory/AddInventory";
import AuthPage from "../pages/Auth";

const Routing = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* BASIC */}
        <Route path="/" element={<Home />} />
        <Route path="/secret" element={<Experiment />} />
        <Route path="/auth" element={<AuthPage />} />

        {/* SUPPORT */}
        <Route path="/help" element={<Help />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/contact" element={<ContactUs />} />

        {/* PRODUCTS */}
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/add" element={<AddProducts />} />
        <Route path="/products/edit/:productId" element={<EditProducts />} />

        {/* VENDORS */}
        <Route path="/vendors" element={<VendorList />} />
        <Route path="/vendors/add" element={<AddVendors />} />
        <Route path="/vendors/edit/:vendorId" element={<UpdateVendor />} />

        {/* TRANSPORT */}
        <Route path="/transport" element={<TransportList />} />
        <Route path="/transport/add" element={<AddTransport />} />
        <Route
          path="/transport/edit/:transportId"
          element={<UpdateTransport />}
        />

        {/* OFFERS */}
        <Route path="/offers" element={<Offers />} />
        <Route path="/offers/add" element={<AddOffer />} />
        <Route path="/offers/edit/:offerId" element={<UpdateOffer />} />

        {/* INVENTORY */}
        <Route path="/inventory" element={<InventoryList />} />
        <Route path="/inventory/add" element={<AddInventory />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Routing;
