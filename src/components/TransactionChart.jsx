import React from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Jan",
    value: 0,
  },
  {
    name: "Feb",
    value: 200,
  },
  {
    name: "Mar",
    value: 400,
  },
  {
    name: "Apr",
    value: 350,
  },
  {
    name: "May ",
    value: 200,
  },
  {
    name: "Jun",
    value: 100,
  },
  {
    name: "Jul ",
    value: 600,
  },
  {
    name: "Aug",
    value: 400,
  },
  {
    name: "Sep",
    value: 500,
  },
  {
    name: "Oct",
    value: 200,
  },
  {
    name: "Nov",
    value: 300,
  },
  {
    name: "Dec",
    value: 700,
  },
];

function TransactionChart() {
  return (
    <div
      className="w-3/5 h-90 bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1"
      style={{
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px", // Added borderRadius property
        overflow: "hidden", // Ensure overflow is hidden for the rounded corners
      }}
    >
      <strong className="text-gray-700 font-semibold ">Overview</strong>
      <strong
        className="text-gray-400 text-lg font-light text-sm"
        style={{ fontSize: "10px" }}
      >
        Monthly Earning
      </strong>
      <div className="w-full mt-3 flex-1 text-xs">
        <BarChart
          width={900}
          height={250}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: -10,
            bottom: 5,
          }}
          style={{ borderRadius: "10px" }}
        >
          <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis axisLine={false} tick={false} />
          <Tooltip />
          <Legend />

          <Bar
            dataKey="value"
            fill="#8884d8"
            barSize={20}
            radius={[5, 5, 0, 0]}
            isAnimationActive={false} // Set isAnimationActive to false
          />
        </BarChart>
      </div>
    </div>
  );
}

export default TransactionChart;
