import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { HiHandRaised } from "react-icons/hi2";

function Header() {
  return (
    <div className="bg-white h-12 px-2 flex items-center justify-between border-b border-grey-200">
      <div style={{ display: "flex", alignItems: "center" }}>
        <span style={{ marginRight: "5px" }}>Hello Shahrukh...</span>
        <HiHandRaised />
      </div>
      <div className="relative">
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
  );
}

export default Header;
