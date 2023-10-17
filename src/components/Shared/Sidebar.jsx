import React from "react";
import { AiFillCompass } from "react-icons/ai";
import {
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
  DASHBOARD_SIDEBAR_LINKS,
} from "../../lib/consts/navigation";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { useLocation } from "react-router-dom";

//sidebarlink component

const linkClasses =
  "flex items-center gap-2 font-Light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base";

function SidebarLink({ item }) {
  const { pathname } = useLocation(); // useLocation hook to get the current location

  return (
    <Link
      to={item.path}
      className={classNames(
        pathname === item.path
          ? "bg-neutral-700 text-white"
          : "text-neutral-400",
        linkClasses,
        {
          "hover:text-white": pathname === item.path,
        }
      )}
    >
      {item.icon}
      <span className="text-lg ml-2">{item.label}</span>
    </Link>
  );
}

// Sidebar component

function Sidebar() {
  return (
    <div
      className="bg-blue-900 w-60 p-3 flex flex-col text-white"
      style={{ backgroundColor: "#021c5c" }}
    >
      <div className="flex items-center gap-2 px-1 py-3">
        <AiFillCompass fontSize={24} />
        <span className="text-neutral-100 text-lg">Dashboard</span>
      </div>
      <div className="flex-1 py-8 flex flex-col gap-1">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>
      <div className="flex flex-col gap-0.5 pt-2 boarder-t boarder-neutral-700 mt-auto pb-5">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
        <strong
          className="text-gray-400 text-lg font-light text-sm"
          style={{ fontSize: "10px", marginTop: "-15px", marginLeft: "45px" }}
        >
          Project Manager
        </strong>
      </div>
    </div>
  );
}

export default Sidebar;
