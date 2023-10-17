import React from "react";
import { HiOutlineSearch } from "react-icons/hi";

const productDetails = [
  {
    id: "1",
    // image: "https://unsplash.com/photos/wxj729MaPRY",
    name: "Abstact 3D",
    price: "$8,999",
  },
  {
    id: "2",
    // image: "https://unsplash.com/photos/wxj729MaPRY",
    name: "Sarphens Illustration",
    price: "$999",
  },
];

function RecentOrders() {
  return (
    <div
      className="bg-white px-4 pt-3 pb-4 rounded-sm border border-grey-200 flex-1"
      style={{
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
        overflow: "hidden",
        // marginLeft: "1rem", // Adjusted margin
      }}
    >
      <div className="flex justify-between items-center mb-3">
        {/* https://unsplash.com/photos/wxj729MaPRY */}

        <strong className="text-gray-700 font-bold">Product sell</strong>

        <div className="relative  flex items-center ml-3">
          <HiOutlineSearch
            fontSize={18}
            className="text-grey-400 absolute  top-1/2 -translate-y-1/2 left-2"
          />
          <input
            type="text"
            placeholder="Search..."
            className="text-sm focus:outline-none active:outline-none h-6 w-[15rem] border border-grey-300 rounded-sm pl-8 pr-2"
            style={{
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          ></input>
        </div>
      </div>

      <div className="mt-3">
        <table className="w-full">
          <thead className="text-gray-400 text-lg font-light text-sm">
            <tr>
              <td className="pr-80">Product Name</td>
              <td className="pr-4">Stock</td>
              <td className="pr-4">Price</td>
              <td>Total Sales</td>
            </tr>
          </thead>
          <tbody>
            {productDetails.map((item) => (
              <tr key={item.id}>
                <td className="pr-80">{item.name}</td>

                <td className="pr-4">32 in stock</td>
                <td className="pr-4">{item.price} </td>
                <td>20</td>
                <td>{item.total_sale}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecentOrders;
