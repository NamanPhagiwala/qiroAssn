"use client";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const repaymentData = [
  { name: "11 Jan", value: 115 },
  { name: "26 Jan", value: 89 },
  { name: "11 Feb", value: 40.88 },
  { name: "26 Feb", value: 79 },
  { name: "11 Mar", value: 81 },
  { name: "26 Mar", value: 70 },
  { name: "11 Apr", value: 115 },
  { name: "26 Apr", value: 89 },
  { name: "11 May", value: 40.88, fill: "#C8BAFF" },
  { name: "26 May", value: 89, fill: "#C8BAFF" },
  { name: "11 Jun", value: 89, fill: "#C8BAFF" },
];

const tableData = [
  {
    id: 1,
    source: "0xba33...1445",
    date: "Nov 21, 2021",
    expected: "$53,424.66",
    status: "Paid",
  },
  {
    id: 2,
    source: "0xba33...1445",
    date: "Nov 21, 2021",
    expected: "$53,424.66",
    status: "Paid",
  },
  {
    id: 3,
    source: "0xba33...1445",
    date: "Nov 21, 2021",
    expected: "$53,424.66",
    status: "Pending",
  },
  {
    id: 4,
    source: "0xba33...1445",
    date: "Nov 21, 2021",
    expected: "$53,424.66",
    status: "Upcoming",
  },
];

const Repayment = () => {
  return (
    <div className="" id="repayment">
      <div className="mb-6">
        <h2 className="text-[22px] font-semibold text-gray-900">Repayments</h2>
      </div>
      <div className="flex flex-col gap-4 bg-white p-3 rounded-xl shadow-sm border border-gray-100">
        <div className="">
          <div className="p-6">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={repaymentData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#f0f0f0"
                  />
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    interval={0}
                    tick={{ fill: "#606770", fontSize: 12 }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#606770", fontSize: 12 }}
                    ticks={[0, 30, 60, 90, 120]}
                    domain={[0, "dataMax + 20"]}
                    tickFormatter={(value) => `${value / 10}M`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#fff",
                      border: "1px solid #f0f0f0",
                      borderRadius: "8px",
                      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                  <Bar dataKey="value" radius={[4, 4, 0, 0]} fill="#7058E9" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-[#f6f6f6] rounded-3xl shadow-sm border border-gray-100">
              <thead className="">
                <tr>
                  <th
                    scope="col"
                    className="px-6 text-sm text-left font-bold text-gray-500"
                  >
                    Payments
                  </th>
                  <th
                    scope="col"
                    className="px-6 text-sm text-left font-bold text-gray-500"
                  >
                    Due Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 text-sm text-left font-bold text-gray-500"
                  >
                    Amount
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-sm font-bold text-gray-500"
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-[#f6f6f6]">
                {tableData.map((row) => (
                  <tr key={row.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="text-sm font-medium text-gray-900">
                          {row.id}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {row.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {row.expected}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {row.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repayment;
