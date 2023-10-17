import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="flex bg-neutral-100 h-screen w-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 p-4">
        <Header />
        <div className="bg-white p-4 flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
