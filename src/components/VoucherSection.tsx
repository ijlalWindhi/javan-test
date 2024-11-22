import React, { useState } from "react";
import { AVAILABLE_VOUCHERS } from "../constants/vouchers";

interface VoucherSectionProps {
  voucher: string | null;
  onApplyVoucher: (code: string) => void;
}

export const VoucherSection: React.FC<VoucherSectionProps> = ({
  voucher,
  onApplyVoucher,
}) => {
  const [voucherCode, setVoucherCode] = useState("");
  const [isOpenVoucher, setIsOpenVoucher] = useState(false);

  const handleApplyVoucher = () => {
    onApplyVoucher(voucherCode);
  };

  const handleSelectVoucher = (code: string) => {
    setVoucherCode(code);
    onApplyVoucher(code);
  };

  const handleRemoveVoucher = () => {
    onApplyVoucher("");
    setVoucherCode("");
  };

  return (
    <div className="bg-white shadow-md p-4 border rounded-md h-fit">
      <div
        className="flex flex-wrap justify-between items-center gap-2 w-full cursor-pointer"
        onClick={() => setIsOpenVoucher(!isOpenVoucher)}
      >
        <h3 className="text-xs text-muted-foreground sm:text-sm">
          Add a discount code (optional)
        </h3>
        {isOpenVoucher ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>

      {voucher && (
        <div className="flex justify-between items-center gap-2 mt-2">
          <p className="text-xs text-muted-foreground sm:text-sm">
            {voucher} <span className="text-green-500">applied</span>
          </p>
          <button
            onClick={handleRemoveVoucher}
            className="text-xs sm:text-sm text-red-500"
          >
            Remove
          </button>
        </div>
      )}

      {isOpenVoucher && (
        <div className="flex flex-col gap-3">
          <div className="flex mt-4 w-full">
            <input
              type="text"
              value={voucherCode}
              onChange={(e) => setVoucherCode(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleApplyVoucher();
                }
              }}
              placeholder="Enter voucher code"
              className="text-xs sm:text-sm md:text-base p-2 border rounded-l w-full"
            />
            <button
              onClick={handleApplyVoucher}
              className="text-xs sm:text-sm md:text-base bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 rounded-r"
            >
              Apply
            </button>
          </div>
          <div className="flex flex-col gap-2">
            {AVAILABLE_VOUCHERS.map((v) => (
              <div
                key={v}
                className="flex flex-wrap justify-between gap-4 p-2 border rounded-md text-xs sm:text-sm"
              >
                <span>{v}</span>
                <button
                  onClick={() => handleSelectVoucher(v)}
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-1 rounded transition"
                >
                  Select
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
