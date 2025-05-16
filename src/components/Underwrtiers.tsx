"use client";
import Image from "next/image";

const UnderwriterSection = () => {
  return (
    <div className="w-full flex flex-col gap-6.5" id="underwriters">
      <h2 className="text-[#090A0B] text-[22px] font-semibold">Underwriters</h2>
      <div className="w-full h-[1px]" />

      <div className="bg-white rounded-[18px] p-8">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-1.5 text-2xl font-bold w-2/3 border-[#f8f8f8]">
                Qiro Underwriting Partners
              </div>
              <div className="flex flex-col gap-2.5 underline bg-gradient-to-br from-white via-[#fafaff] to-[#dee9fd] rounded-[18px] p-4 w-[206px]">
                <div className="flex items-center gap-0.5">
                  <span className="text-[#0E0E0E] text-sm">
                    📄 View Detailed Report
                  </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.14648 5.39453L11.8535 5.39453M11.8535 5.39453L11.8535 13.1016M11.8535 5.39453L4.14648 13.1016"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <span className="text-[#4F4F4F] text-sm">
              Powering Smarter Credit Decisions with Trusted Underwriting
              Partners
            </span>
          </div>
          <div className="flex w-full justify-between">
            <div className="flex flex-col gap-3 w-full border-2 border-[#f8f8f8] rounded-ss-2xl px-7 py-4">
              <div className="flex items-center gap-1.5">
                <span className="text-[#767E93] text-sm">Risk Score</span>
                <Image
                  src="/info-icon.svg"
                  alt="info"
                  width={15}
                  height={15}
                  className="text-[#767E93]"
                />
              </div>
              <span className="text-[#090A0B] text-2xl font-medium">
                8.9/10
              </span>
            </div>
            <div className="flex flex-col gap-3 w-full border-2 border-[#fafafa] rounded-e-2xl px-7 py-4">
              <div className="flex items-center gap-1.5">
                <span className="text-[#767E93] text-sm">
                  Default Probability
                </span>
                <Image
                  src="/info-icon.svg"
                  alt="info"
                  width={15}
                  height={15}
                  className="text-[#767E93]"
                />
              </div>
              <span className="text-[#090A0B] text-2xl font-medium">Low</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderwriterSection;
