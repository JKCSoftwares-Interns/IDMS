5/* This file needs to be divided */

import { useLocation, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// HOMR
import Home from "../pages/Home";

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
import Inventory from "../pages/inventory/InventoryList";
import GoodsEntry from "../pages/inventory/GoodsEntry";
import GoodsRemoval from "../pages/inventory/GoodsRemoval";
import LocationShifting from "../pages/inventory/LocationShifting";


// SUPPLIERS
import SupplierList from "../pages/supplier/ViewSupplier";
import AddSupplier from "../pages/supplier/AddSupplier";
import UpdateSupplier from "../pages/supplier/UpdateSupplier";


function Routing() {
	const location = useLocation();

	return (
		<AnimatePresence mode="wait">
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<Home />} />

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
				<Route path="/transport/edit/:transportId" element={<UpdateTransport />} />

				{/* OFFERS */}
				<Route path="/offers" element={<Offers />} />
				<Route path="/offers/add" element={<AddOffer />} />
				<Route path="/offers/edit/:offerId" element={<UpdateOffer />} />

				{/* INVENTORY */}
				<Route path="/inventory" element={<Inventory />} />
				<Route path="/inventory/add" element={<GoodsEntry />} />
				<Route path="/inventory/remove" element={<GoodsRemoval />} />
				<Route path="/inventory/shift" element={<LocationShifting />} />


				{/* SUPPLIER */}
				<Route path="/suppliers" element={<SupplierList />} />
				<Route path="/suppliers/add" element={<AddSupplier />} />
				<Route path="/suppliers/edit/:supplierId" element={<UpdateSupplier />} />
			</Routes>
		</AnimatePresence>
	);
}

export default Routing;