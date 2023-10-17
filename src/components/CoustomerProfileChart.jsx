import React from "react";
import { PieChart, Pie, Cell, Tooltip, Label } from "recharts";

const data = [
  { name: "Group A", value: 195 },
  { name: "Group B", value: 105 },
  { name: "Group C", value: 10 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const CoustomerProfileChart = () => {
  return (
    <div
      className="w-[20rem] h-[22rem] mx-auto bg-white p-4 rounded-sm border border-grey-200 flex flex-col"
      style={{
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <strong className="text-gray-700 font-semibold">Customers</strong>
      <strong className="text-gray-400 text-lg font-light text-sm">
        Customers that buy the product
      </strong>
      <div className="w-full mt-3 flex-1 text-xs">
        <PieChart width={800} height={400}>
          <Pie
            data={data}
            cx={150}
            cy={110}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
            <Label
              value="65%"
              position="center"
              style={{ fontSize: "24px", fontWeight: "bold" }}
            />
          </Pie>

          <Tooltip />

          <text
            x={150}
            y={140}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize={10}
          >
            Total New Customers
          </text>
        </PieChart>
      </div>
    </div>
  );
};

export default CoustomerProfileChart;
