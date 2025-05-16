"use client";
import Image from "next/image";
import { useState } from "react";

const OverviewSection = () => {
  const [progress, setProgress] = useState<number>(70);
  return (
    <div className="w-full flex flex-col gap-6.5" id="overview">
      <h2 className="text-[#090A0B] text-[22px] font-semibold">Overview</h2>
      <div className="w-full h-[1px]" />

      <div className="bg-white rounded-[18px] p-8">
        <div className="flex flex-col gap-3.5">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-1.5">
              <span className="text-[#3D3D3D] text-[18px]">Pool Capacity</span>
              <Image src="/info-icon.svg" alt="info" width={15} height={15} />
            </div>
            <span className="text-[#090A0B] text-2xl font-medium">
              $28,493,949
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="flex-1 h-1 bg-[#E8E0FF] rounded-full overflow-hidden">
              <div
                className="h-1 bg-[#7C3AFF] rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-[#7C3AFF] text-xs font-bold">{`${progress}% Filled`}</span>
          </div>
          <div className="flex w-full justify-between">
            <div className="flex flex-col gap-3 w-full border-2 border-[#f8f8f8] rounded-ss-2xl px-7 py-4">
              <div className="flex items-center gap-1.5">
                <span className="text-[#767E93] text-sm">Estimated APY</span>
                <Image
                  src="/info-icon.svg"
                  alt="info"
                  width={15}
                  height={15}
                  className="text-[#767E93]"
                />
              </div>
              <span className="text-[#090A0B] text-2xl font-medium">14%</span>
            </div>
            <div className="flex flex-col gap-3 w-full border-2 border-[#fafafa] px-7 py-4">
              <div className="flex items-center gap-1.5">
                <span className="text-[#767E93] text-sm">
                  Capital Formation
                </span>
                <Image
                  src="/info-icon.svg"
                  alt="info"
                  width={15}
                  height={15}
                  className="text-[#767E93]"
                />
              </div>
              <span className="text-[#090A0B] text-2xl font-medium">
                30 Days
              </span>
            </div>
            <div className="flex flex-col gap-3 w-full border-2 border-[#fafafa] rounded-e-2xl px-7 py-4">
              <div className="flex items-center gap-1.5">
                <span className="text-[#767E93] text-sm">Long Term</span>
                <Image
                  src="/info-icon.svg"
                  alt="info"
                  width={15}
                  height={15}
                  className="text-[#767E93]"
                />
              </div>
              <span className="text-[#090A0B] text-2xl font-medium">
                4 Days
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewSection;
