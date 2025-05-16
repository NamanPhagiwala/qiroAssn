import Image from "next/image";
import React, { useEffect } from "react";

export type ToastType = "success" | "error" | "info" | "warning";

interface ToastProps {
  message: string;
  description?: string;
  type?: ToastType;
  duration?: number;
  onClose: () => void;
  isVisible: boolean;
  onViewTx?: () => void;
}

const Toast: React.FC<ToastProps> = ({
  message,
  description,
  duration = 3000,
  onClose,
  isVisible,
  onViewTx,
}) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 max-w-2xl bg-white border border-[#E3E3E3] rounded-[24px] shadow-lg z-50 animate-fade-in-out">
      <div className="flex items-start p-5 gap-4">
        {/* Success Icon */}
        <Image src="/success.png" width={40} height={40} alt="success" />

        {/* Content */}
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <h3 className="text-[#090A0B] text-base font-medium">
                {message}
              </h3>
              {description && (
                <p className="text-[#6D647C] text-sm">{description}</p>
              )}
            </div>
            {onViewTx && (
              <button
                onClick={onViewTx}
                className="mt-4 ml-4 underline w-auto text-sm bg-[#7052E7] text-white px-6 py-3 rounded-[24px] flex items-center gap-2 hover:bg-[#5A3FD9] transition-colors"
              >
                <span className="text-sm font-medium">View Tx</span>
                <Image
                  src="/hyperlink-arrow.svg"
                  width={16}
                  height={16}
                  alt="success"
                />
              </button>
            )}
            <button
              onClick={onClose}
              className="w-6 h-6 flex items-center justify-center text-[#666666] hover:text-[#333333]"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 4L4 12M4 4L12 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toast;
