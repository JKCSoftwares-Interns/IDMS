import data from "../../../data.json";
import { NavLink } from "react-router-dom";

const Inventory = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex p-4 justify-between w-full border">
        <h1 className="text-4xl font-bold mb-4 text-center">Product List</h1>
        <input
          /* not responsive; no functionality */
          className="p-2 border max-w-max rounded-lg"
          placeholder="Search Product..."
          type="text"
        />
        <button>
          <NavLink
            className="flex items-center gap-5 bg-[#5e7bcc] hover:bg-green-700 p-2 rounded-md"
            to="/inventory/addProducts"
          >
            Add Products
          </NavLink>
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="border px-4 py-2">Product ID</th>
              <th className="border px-4 py-2">Product Name</th>
              <th className="border px-4 py-2">Category</th>
              <th className="border px-4 py-2">Pack Size</th>
              <th className="border px-4 py-2">Number of Units</th>
              <th className="border px-4 py-2">Unloading Price</th>
              <th className="border px-4 py-2">Edit</th>
              <th className="border px-4 py-2">Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((product) => (
              <tr key={product.productId}>
                <td className="border px-4 py-2">{product.productId}</td>
                <td className="border px-4 py-2">{product.productName}</td>
                <td className="border px-4 py-2">{product.category}</td>
                <td className="border px-4 py-2">{product.packSize}</td>
                <td className="border px-4 py-2">{product.noOfUnits}</td>
                <td className="border px-4 py-2">{product.unloadingPrice}</td>

                <td className="border px-4 py-2">
                  <button>
                    <NavLink
                      className="flex items-center gap-5 hover:bg-[#5e7bcc] p-2 hover:rounded-md"
                      to={`/inventory/editProducts/${product.productId}`}
                    >
                      <span className="text-white-700 text-[1.2rem]">Edit</span>
                    </NavLink>
                  </button>
                </td>
                <td className="border px-4 py-2">
                  <button>
                    <span className="text-white-700 text-[1.2rem]">Delete</span>
                    {/* this will send a post request to the backend along with `productId`*/}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Inventory;
