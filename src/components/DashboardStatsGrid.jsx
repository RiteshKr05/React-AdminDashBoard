import React from "react";
import { FaSackDollar } from "react-icons/fa6";
import { GrNotes } from "react-icons/gr";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";

function DashboardStatsGrid() {
  return (
    <div className="flex gap-4 w-full">
      <div className="w-1/4">
        <div className=" p-2 rounded-lg">
          <BoxWrapper>
            <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-400">
              <FaSackDollar className="text-2xl text-white" />
            </div>
            <div className="pl-2">
              <span className="text-sm text-grey-500 font-light">Earnings</span>
              <div className="flex items-center">
                <strong className="text-xl text-grey-700 font-semibold">
                  $200K
                </strong>
                <span className="text-sm text-green-500 pl-2">+40%</span>
              </div>
            </div>
          </BoxWrapper>
        </div>
      </div>
      <div className="w-1/4">
        <div className=" p-2 rounded-lg">
          <BoxWrapper>
            <div className="rounded-full h-12 w-12 flex items-center justify-center bg-violet-300">
              <GrNotes className="text-2xl text-white" />
            </div>
            <div className="pl-2">
              <span className="text-sm text-grey-500 font-light">Orders</span>
              <div className="flex items-center">
                <strong className="text-xl text-grey-700 font-semibold">
                  $2.4K
                </strong>
                <span className="text-sm text-green-500 pl-2">-2%</span>
              </div>
            </div>
          </BoxWrapper>
        </div>
      </div>
      <div className="w-1/4">
        <div className=" p-2 rounded-lg">
          <BoxWrapper>
            <div className="rounded-full h-12 w-12 flex items-center justify-center bg-blue-400">
              <MdOutlineAccountBalanceWallet className="text-2xl text-white" />
            </div>
            <div className="pl-2">
              <span className="text-sm text-grey-500 font-light">Balance</span>
              <div className="flex items-center">
                <strong className="text-xl text-grey-700 font-semibold">
                  $2.4K
                </strong>
                <span className="text-sm text-green-500 pl-2">-2%</span>
              </div>
            </div>
          </BoxWrapper>
        </div>
      </div>
      <div className="w-1/4">
        <div className="p-2 rounded-lg">
          <BoxWrapper>
            <div className="rounded-full h-12 w-12 flex items-center justify-center bg-red-400">
              <FaSackDollar className="text-2xl text-white " />
            </div>
            <div className="pl-2">
              <span className="text-sm text-grey-500 font-light">
                Total Sales
              </span>
              <div className="flex items-center">
                <strong className="text-xl text-grey-700 font-semibold">
                  $89K
                </strong>
                <span className="text-sm text-green-500 pl-2">+11%</span>
              </div>
            </div>
          </BoxWrapper>
        </div>
      </div>
    </div>
  );
}

export default DashboardStatsGrid;

function BoxWrapper({ children }) {
  return (
    <div
      className="bg-white rounded-sm p-4 flex items-center"
      style={{
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      {children}
    </div>
  );
}

// export default BoxWrapper;
