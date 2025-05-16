import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Toast from "./Toast";

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  amount: number;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  onClose,
  amount,
}) => {
  const [step, setStep] = useState(1);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (step === 3) {
      setShowToast(true);
    }
  }, [step]);

  useEffect(() => {
    return () => {
      setStep(1);
      setShowToast(false);
    };
  }, [isOpen]);
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 backdrop-blur-[2px] bg-white/20 flex items-center justify-center z-50">
        <div className="w-[606px] h-[464px] bg-gradient-to-br from-white via-[#F5F2FF] to-white rounded-[48px] shadow-lg p-[50px]">
          <div className="flex flex-col gap-7">
            <div className="flex justify-between items-center">
              <h2 className="text-[#090A0B] text-3xl font-semibold">
                {step === 3 ? "Investment Successful" : "Confirm"}
              </h2>
              <button
                onClick={onClose}
                className="w-[30px] h-[30px] bg-[#F8F8F8] rounded-lg flex items-center justify-center"
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

            <div className="bg-white rounded-[22px] p-7">
              <div className="flex items-center gap-2 pb-5">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#6C56F2] to-[#C290FF]" />
                <div className="text-lg font-medium">Fintech Agency LLC</div>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-1">
                  <div className="text-[#767E93] font-medium text-base">
                    Deposit
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="text-[#090A0B] text-2xl font-medium">
                      {amount} <span className="text-[#767E93]">USDC</span>
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
              {step === 3 && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="text-[#767E93] text-base font-medium">
                      Gas Fees
                    </div>
                    <div className="text-[#090A0B] text-base font-medium">
                      0.1%
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-[#767E93] text-base font-medium">
                      Tx Hash
                    </div>
                    <Link
                      href={""}
                      className="flex gap-1 text-[#090A0B] underline text-base font-medium"
                    >
                      0xasdasdqqw
                      <Image
                        src="/hyperlink-black-arrow.svg"
                        width={16}
                        height={16}
                        alt="success"
                      />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {step !== 3 && (
              <div className="space-y-5">
                <div className="flex justify-between items-center">
                  {step === 1 ? (
                    <button
                      className="text-[#090A0B] text-base font-medium"
                      onClick={() => setStep(2)}
                    >
                      Approve deposit of {amount} USDC
                    </button>
                  ) : (
                    <button
                      className="text-[#090A0B] text-base font-medium"
                      onClick={() => setStep(3)}
                    >
                      Deposit
                    </button>
                  )}
                </div>
                <div className="flex gap-2">
                  <div className="w-1/2 h-3 bg-[#C5C4E2] rounded-full overflow-hidden">
                    <div className="w-full h-full bg-[#7052E7] rounded-full" />
                  </div>
                  <div className="w-1/2 h-3 bg-[#C5C4E2] rounded-full overflow-hidden">
                    <div
                      className={`w-full h-full rounded-full ${
                        step === 2 && "bg-[#7052E7]"
                      }`}
                    />
                  </div>
                </div>
                <div className="text-[#090A0B] text-sm">
                  Signature {step}/2 - Proceed in your wallet
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Toast
        isVisible={showToast}
        message="Investment Successful!"
        description="Your funds are successfully invested in the selected tranche."
        onClose={() => setShowToast(false)}
        onViewTx={() =>
          window.open("https://etherscan.io/tx/0xasdasdqqw", "_blank")
        }
      />
    </>
  );
};

export default ConfirmModal;
