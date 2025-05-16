import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ReviewDepositModalProps {
  isOpen: boolean;
  onClose: () => void;
  openConfirmModal: () => void;
  amount: number;
}

const ReviewDepositModal: React.FC<ReviewDepositModalProps> = ({
  isOpen,
  onClose,
  openConfirmModal,
  amount,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-[2px] bg-white/20 flex items-center justify-center z-50">
      <div className="max-w-2xl bg-gradient-to-br from-white via-[#F5F2FF] to-white rounded-[48px] shadow-lg p-[50px]">
        <div className="flex flex-col gap-7">
          <div className="flex justify-between items-center">
            <h2 className="text-[#090A0B] text-3xl font-semibold">
              Review Deposit
            </h2>
            <button
              onClick={onClose}
              className="w-[30px] h-[30px] bg-transparent rounded-lg flex items-center justify-center"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L13 13M1 13L13 1"
                  stroke="#9E9E9E"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <div className="bg-white rounded-[28px] p-7">
            <div className="flex items-center gap-2 pb-5">
              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#6C56F2] to-[#C290FF]" />
              <div className="text-lg font-medium"> Fintech Agency LLC </div>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-1">
                <div className="text-[#767E93] font-medium text-base">
                  Deposit
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <div className="text-[#090A0B] text-2xl font-medium">
                    {amount} <span className="text-[#767E93]"> USDC</span>
                  </div>
                  <div className="bg-[#F5F2FF] rounded-lg px-2.5 py-1.5 text-base font-medium text-black">
                    ${amount}
                  </div>
                  <div className="ml-auto">
                    <Image
                      src="/exchange-icon.svg"
                      alt="USDC"
                      width={28}
                      height={28}
                      className="w-7 h-7"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="text-[#767E93] text-base font-medium">
                  Tranche
                </div>
                <div className="text-[#090A0B] text-base font-medium">
                  Senior Tranche
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-[#767E93] text-base font-medium">
                  Rate (USDC)
                </div>
                <div className="text-[#090A0B] text-base font-medium">
                  1 USDC = 1.07900 QSR
                </div>
              </div>
            </div>
          </div>

          <div className="text-[#767E93] text-base font-medium">
            By confirming this transaction, you agree to the{" "}
            <Link href={"www.google.com"} className="underline">
              {" "}
              Terms of Use{" "}
            </Link>{" "}
            and the services provisions relating to the morpho Vault.
          </div>

          <button
            onClick={() => {
              onClose();
              openConfirmModal();
            }}
            className="w-full h-[54px] bg-[#7052E7] rounded-[24px] text-white text-base font-semibold"
          >
            Continue to Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewDepositModal;
