import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Mon", value: 30 },
  { name: "Tue", value: 50 },
  { name: "Wed", value: 45 },
  { name: "Thu", value: 60 },
  { name: "Fri", value: 40 },
  { name: "Sat", value: 70 },
  { name: "Sun", value: 50 },
];

const GraphCard = () => (
  <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-xl shadow hover:shadow-md transition">
    <h3 className="text-lg font-semibold text-gray-700 mb-4">Weekly Trends</h3>
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#FB923C"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default GraphCard;
