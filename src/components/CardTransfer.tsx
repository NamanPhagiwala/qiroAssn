"use client";
import { useState } from "react";
import Image from "next/image";
import TabSwitcher from "./TabSwitcher";
import ReviewDepositModal from "./ReviewDepositModal";
import ConfirmModal from "./ConfirmModal";

const InvestmentForm = () => {
  const [amount, setAmount] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);

  const openModal = () => {
    if (amount > 0) {
      setIsModalOpen(true);
    }
  };
  return (
    <div className="w-[483px] flex flex-col gap-5">
      <TabSwitcher />

      <div className="bg-white rounded-[18px]">
        <div className="flex flex-col px-4 py-2.5 w-auto">
          <div className="flex justify-between">
            <div className="text-[#6C6C6C] text-base font-medium">
              Deposit USDC
            </div>
            <button className="flex justify-end gap-2 px-3 py-2.5 rounded-lg">
              <Image
                src="/exchange-icon.svg"
                alt="exchange"
                width={18}
                height={18}
              />
            </button>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col gap-2">
              <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                placeholder=""
                className="text-[#AFB4C0] text-4xl font-normal outline-none"
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="">
              <span className="text-[#AFB4C0] text-sm">
                ≈ ${amount ?? "0.00"}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="text-[#AFB4C0] text-base">0.00 USDC</div>
              <button className="px-3 bg-[#F7F5FF] rounded-lg text-[#7052E7] text-xs font-bold">
                MAX
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-[18px]">
        <div className="p-5 flex flex-col gap-5">
          <div className="flex flex-col gap-2.5">
            <div className="flex flex-col">
              <span className="text-[#767E93] text-sm">Minimum Investment</span>
              <span className="text-[#090A0B] text-lg">100K</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[#767E93] text-sm">Investment Period</span>
              <span className="text-[#090A0B] text-lg">28 Days</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[#767E93] text-sm">APY</span>
              <span className="text-[#090A0B] text-lg">7.87%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <button
          onClick={openModal}
          disabled={!amount}
          className="w-full h-[60px] bg-[#7052E7] disabled:bg-[#E3E3E3] rounded-[28px] font-semibold text-white text-[20px]"
        >
          Enter an Amount
        </button>
      </div>
      <ReviewDepositModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        amount={amount}
        openConfirmModal={() => setOpenConfirmModal(true)}
      />
      <ConfirmModal
        isOpen={openConfirmModal}
        onClose={() => setOpenConfirmModal(false)}
        amount={amount}
      />
    </div>
  );
};

export default InvestmentForm;
