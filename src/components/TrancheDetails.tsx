"use client";
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const StructureSection: React.FC = () => {
  const data = [
    { name: "Senior", value: 80 },
    { name: "Junior", value: 20 },
  ];
  const details = [
    {
      type: "Senior",
      color: "#C8BAFF",
      yieldType: "Fixed Yield",
      details: [
        { label: "Allocation", value: "80%" },
        { label: "APY", value: "14%" },
        { label: "TVL", value: "336K USD" },
      ],
    },
    {
      type: "Junior",
      color: "#6F52E7",
      yieldType: "Variable Yield",
      details: [
        { label: "Allocation", value: "20%" },
        { label: "APY", value: "19%" },
        { label: "TVL", value: "5M USD" },
      ],
    },
  ];
  const COLORS = ["#6F52E7", "#CCB3E6"];

  return (
    <div className="w-full max-w-[827px] flex flex-col gap-6" id="structure">
      <h2 className="text-[#090A0B] text-[22px] font-semibold mb-2">
        Structure
      </h2>
      <div className="bg-white border border-[#EEEEEE] rounded-xl p-7">
        <div className="flex gap-8 items-center">
          <div className="w-[271px] h-[271px] relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
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
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="text-2xl font-bold text-[#030712]">14%</div>
              <div className="text-sm text-[#030712]">APR</div>
            </div>
          </div>
          <div className="flex flex-col w-full">
            {details?.map((tranche) => (
              <div key={tranche.type} className="bg-white rounded-[18px] p-2.5">
                <div className="flex justify-between items-center p-3">
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-3 h-3 text-sm rounded-full"
                      style={{ backgroundColor: tranche.color }}
                    />
                    <span>{tranche.type} Tranche Details</span>
                  </div>
                  <div className="bg-[rgba(225,225,225,0.2)] text-xs rounded-md px-2.5 py-1.5 text-[#030712]">
                    {tranche.yieldType}
                  </div>
                </div>
                <div className="flex w-full justify-between">
                  {tranche.details.map((detail, index) => (
                    <div
                      key={detail.label}
                      className={`flex flex-col gap-3 w-full border-2 border-[#f8f8f8] ${
                        index === 0 ? "rounded-ss-2xl" : ""
                      } ${index === 2 ? "rounded-e-2xl" : ""} px-3.5 py-1`}
                    >
                      <div className="flex items-center gap-1.5">
                        <span className="text-[#767E93] text-sm">
                          {detail.label}
                        </span>
                      </div>
                      <span className="text-[#090A0B] text-lg font-medium">
                        {detail.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white border border-[#E7E7E7] rounded-2xl overflow-hidden">
        <div className="bg-[#F9F9F9] border-b text-base border-[#EEEEEE] px-6 py-3.5 flex">
          <div className="basis-36 shrink-0 text-[#343434] text-sm">
            Details
          </div>
          <div>Description</div>
        </div>
        <div className="flex px-6 py-7 border-b border-[rgba(0,0,0,0.1)]">
          <div className="basis-36 shrink-0 text-[#343434] text-sm font-semibold">
            Pool Type
          </div>
          <div className="flex-1 text-[#3D3D3D] text-sm">Senior Tranche</div>
        </div>
        <div className="flex px-6 py-7 border-b border-[rgba(0,0,0,0.1)]">
          <div className="basis-36 shrink-0 text-[#343434] text-sm font-semibold">
            Investor Protections
          </div>
          <div className="flex-1 text-[#3D3D3D] text-sm">
            20-25% first-loss coverage
          </div>
        </div>
        <div className="flex px-6 py-7 border-b border-[rgba(0,0,0,0.1)]">
          <div className="basis-36 shrink-0 text-[#343434] text-sm font-semibold">
            Collateralization
          </div>
          <div className="flex-1 text-[#3D3D3D] text-sm">
            Yes, This loan is secured with real-world, off-chain assets as
            collateral.
          </div>
        </div>
        <div className="flex px-6 py-7">
          <div className="basis-36 shrink-0 text-[#343434] text-sm font-semibold">
            Legal Documents
          </div>
          <div className="flex-1 text-[#3D3D3D] text-sm">
            📜 Senior Pool Agreement
          </div>
        </div>
      </div>
    </div>
  );
};

export default StructureSection;
