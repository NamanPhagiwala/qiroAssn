"use client";
import Link from "next/link";
import { useState } from "react";

interface Tab {
  id: string;
  label: string;
  isActive?: boolean;
}

const TabSystem = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs: Tab[] = [
    { id: "overview", label: "Overview", isActive: true },
    { id: "highlights", label: "Highlights" },
    { id: "repayment", label: "Repayment" },
    { id: "assets", label: "Assets" },
    { id: "structure", label: "Structure" },
    { id: "underwriters", label: "Underwriters" },
    { id: "pool-activity", label: "Pool Activity" },
  ];

  return (
    <div className="w-full h-[60px] border-b border-[#EFEFEF]">
      <div className="flex items-center h-full px-4 gap-2.5">
        {tabs.map((tab) => (
          <Link
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            href={`#${tab.id}`}
            className={`px-2 py-2.5 rounded-[18px] text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? "bg-[#7052E7] text-white font-semibold"
                : "text-[#3D3D3D] hover:bg-gray-100"
            }`}
          >
            {tab.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TabSystem;
