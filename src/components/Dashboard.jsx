import React from "react";
import DashboardStatsGrid from "./DashboardStatsGrid";
import TransactionChart from "./TransactionChart";
import CoustomerProfileChart from "./CoustomerProfileChart"; // Import the CoustomerProfileChart component here
import RecentOrders from "./RecentOrders";

function Dashboard() {
  return (
    <div className="flex flex-col gap-4">
      <DashboardStatsGrid />
      <div className="flex flex-row gap-4 w-full">
        <TransactionChart />
        <CoustomerProfileChart />
      </div>
      <div className="flex flex-row gap-4 w-full">
        <RecentOrders />
      </div>
    </div>
  );
}

export default Dashboard;
