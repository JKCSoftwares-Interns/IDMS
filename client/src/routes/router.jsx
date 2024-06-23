/* This file needs to be divided */

import { useLocation, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// BASIC
import Home from "../pages/Home";
import AuthPage from "../pages/Auth/Auth";

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
import GoodsRemoval from "../pages/inventory/GoodsRemoval";
import LocationShifting from "../pages/inventory/LocationShifting";

// USER
import ViewUsers from "../pages/user/ViewUser";
import AddUser from "../pages/user/AddUser";
import UpdateUser from "../pages/user/UpdateUser";

//Invoice
import AddInovice from "../pages/invoice/AddInvoice";
import ViewInvoice from "../pages/invoice/ViewInvoice";
import UpdateInvoice from "../pages/invoice/UpdateInvoice";

//SUPPLIERS
import ViewSuppliers from "../pages/supplier/ViewSupplier";
import AddSuppliers from "../pages/supplier/AddSupplier";
import UpdateSupplier from "../pages/supplier/UpdateSupplier";

const Routing = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* BASIC */}
        <Route path="/" element={<Home />} />
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
        <Route path="/inventory/remove" element={<GoodsRemoval />} />
        <Route
          path="/inventory/edit/:inventoryI"
          element={<LocationShifting />}
        />

        {/* USER */}
        <Route path="/users" element={<ViewUsers />} />
        <Route path="/users/add" element={<AddUser />} />
        <Route path="/users/edit/:userId" element={<UpdateUser />} />

        {/* invoice */}
        <Route path="/invoice/add" element={<AddInovice />} />
        <Route path="/invoice" element={<ViewInvoice />} />
        <Route path="/invoice/edit/:invoiceId" element={<UpdateInvoice />} />

        {/* SUPPLIERS */}
        <Route path="/suppliers" element={<ViewSuppliers />} />
        <Route path="/suppliers/add" element={<AddSuppliers />} />
        <Route
          path="/suppliers/edit/:supplierId"
          element={<UpdateSupplier />}
        />

        {/* CUSTOMERS */}
      </Routes>
    </AnimatePresence>
  );
};

export default Routing;
