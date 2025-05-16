"use client";
import { useState } from "react";

const TabSwitcher = () => {
  const [activeTab, setActiveTab] = useState("deposit");

  return (
    <div className="w-auto h-auto flex gap-2.5">
      <button
        onClick={() => setActiveTab("deposit")}
        className={`flex-1 h-[36px] rounded-[18px] flex items-center justify-center ${
          activeTab === "deposit"
            ? "bg-[#7052E7] text-white"
            : "bg-[#F7F7F7] text-[#717171]"
        }`}
      >
        <span className="text-sm">Deposit</span>
      </button>
      <button
        onClick={() => setActiveTab("withdraw")}
        className={`flex-1 h-[36px] rounded-[18px] flex items-center justify-center ${
          activeTab === "withdraw"
            ? "bg-[#7052E7] text-white"
            : "bg-[#F7F7F7] text-[#717171]"
        }`}
      >
        <span className="text-sm">Withdraw</span>
      </button>
    </div>
  );
};

export default TabSwitcher;
