"use client";
import Image from "next/image";

const AssetsSection = () => {
  return (
    <div className="w-full flex flex-col gap-6.5" id="assets">
      <h2 className="text-[#090A0B] text-[22px] font-semibold">Assets</h2>
      <div className="w-full h-[1px]" />

      <div className="bg-white rounded-[18px] p-8">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-1.5 text-2xl font-bold border-b-2 w-2/3 border-[#f8f8f8]">
              Fintech Agency LLC
            </div>
            <span className="text-[#4F4F4F] text-sm">
              Fintech Agency LLC Finance specialises in offering liquidity
              services tailored for Small and Medium Businesses (SMBs) with an
              annual revenue threshold of at least $50 million.
            </span>
          </div>
          <div className="flex w-full justify-between">
            <div className="flex flex-col gap-3 w-full border-2 border-[#f8f8f8] rounded-ss-2xl px-7 py-4">
              <div className="flex items-center gap-1.5">
                <span className="text-[#767E93] text-sm">Asset Value</span>
                <Image
                  src="/info-icon.svg"
                  alt="info"
                  width={15}
                  height={15}
                  className="text-[#767E93]"
                />
              </div>
              <span className="text-[#090A0B] text-2xl font-medium">$25M</span>
            </div>
            <div className="flex flex-col gap-3 w-full border-2 border-[#fafafa] px-7 py-4">
              <div className="flex items-center gap-1.5">
                <span className="text-[#767E93] text-sm">Asset Type</span>
                <Image
                  src="/info-icon.svg"
                  alt="info"
                  width={15}
                  height={15}
                  className="text-[#767E93]"
                />
              </div>
              <span className="text-[#090A0B] text-2xl font-medium">
                Invoice
              </span>
            </div>
            <div className="flex flex-col gap-3 w-full border-2 border-[#fafafa] rounded-e-2xl px-7 py-4">
              <div className="flex items-center gap-1.5">
                <span className="text-[#767E93] text-sm">Maturity Date</span>
                <Image
                  src="/info-icon.svg"
                  alt="info"
                  width={15}
                  height={15}
                  className="text-[#767E93]"
                />
              </div>
              <span className="text-[#090A0B] text-2xl font-medium">
                Apr 06, 2025
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetsSection;
