import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTableColumns,
  faCube,
  faCartShopping,
  faTruckField,
  faChartBar,
  faCircleInfo,
  faGear,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="bg-slate-200 w-[25rem] space-y-[0.5rem] text-white">
      <div className="upper p-[3rem] pb-0 space-y-1">
        <p className="text-gray-700 font-semibold">GENERAL</p>
        <div className="General space-y-[0.5rem] mx-5">
          <NavLink
            className="flex items-center gap-5 hover:bg-[#5e7bcc] p-2 hover:rounded-md"
            to="/"
          >
            <FontAwesomeIcon
              icon={faTableColumns}
              style={{ color: "#2e1579" }}
              size="xl"
            />
            <span className="text-gray-700 text-[1.2rem] hover:text-slate-100">
              Dashboard
            </span>
          </NavLink>
          <NavLink
            className="flex items-center gap-5 hover:bg-[#5e7bcc] p-2 hover:rounded-md"
            to="/inventory"
          >
            <FontAwesomeIcon
              icon={faCube}
              style={{ color: "#2e1579" }}
              size="xl"
            />
            <span className="text-gray-700 text-[1.2rem]">Inventory</span>
          </NavLink>
          <NavLink
            className="flex items-center gap-5 hover:bg-[#5e7bcc] p-2 hover:rounded-md"
            to="/products"
          >
            <FontAwesomeIcon
              icon={faCartShopping}
              style={{ color: "#2e1579" }}
              size="xl"
            />
            <span className="text-gray-700 text-[1.2rem]">Products</span>
          </NavLink>
          <NavLink
            className="flex items-center gap-5 hover:bg-[#5e7bcc] p-2 hover:rounded-md"
            to="/suppliers"
          >
            <FontAwesomeIcon
              icon={faTruckField}
              style={{ color: "#2e1579" }}
              size="xl"
            />
            <span className="text-gray-700 text-[1.2rem]">Suppliers</span>
          </NavLink>
          <NavLink
            className="flex items-center gap-5 hover:bg-[#5e7bcc] p-2 hover:rounded-md"
            to="/customers"
          >
            <FontAwesomeIcon
              icon={faTruckField}
              style={{ color: "#2e1579" }}
              size="xl"
            />
            <span className="text-gray-700 text-[1.2rem]">Distributions</span>
          </NavLink>
          <NavLink
            className="flex items-center gap-5 hover:bg-[#5e7bcc] p-2 hover:rounded-md"
            to="/reports"
          >
            <FontAwesomeIcon
              icon={faChartBar}
              style={{ color: "#2e1579" }}
              size="xl"
            />
            <span className="text-gray-700 text-[1.2rem]">Reports</span>
          </NavLink>
        </div>
      </div>

      <div className="lower p-[3rem] pt-5 pb-0 space-y-1">
        <p className="text-gray-700 font-semibold">SUPPORT</p>
        <div className="Support space-y-[0.5rem] mx-5">
          <NavLink
            className="flex items-center gap-5 hover:bg-[#5e7bcc] p-2 hover:rounded-md"
            to="/help"
          >
            <FontAwesomeIcon
              icon={faCircleInfo}
              style={{ color: "#2e1579" }}
              size="xl"
            />
            <span className="text-gray-700 text-[1.2rem]">Help</span>
          </NavLink>
          <NavLink
            className="flex items-center gap-5 hover:bg-[#5e7bcc] p-2 hover:rounded-md"
            to="/settings"
          >
            <FontAwesomeIcon
              icon={faGear}
              style={{ color: "#2e1579" }}
              size="xl"
            />
            <span className="text-gray-700 text-[1.2rem]">Settings</span>
          </NavLink>
          <NavLink
            className="flex items-center gap-5 hover:bg-[#5e7bcc] p-2 hover:rounded-md"
            to="/contact"
          >
            <FontAwesomeIcon
              icon={faAddressCard}
              style={{ color: "#2e1579" }}
              size="xl"
            />
            <span className="text-gray-700 text-[1.2rem]">Contact Us</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
