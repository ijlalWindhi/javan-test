import React from "react";

interface OrderSummaryProps {
  totalAmount: number;
  shipping: number;
  discount: number;
  finalTotal: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  totalAmount,
  shipping,
  discount,
  finalTotal,
}) => {
  return (
    <div className="bg-white shadow-md p-4 border rounded-md h-fit">
      <h2 className="text-base md:text-lg font-semibold">
        The total amount of
      </h2>
      <div className="space-y-2 my-2 md:my-4">
        <AmountRow label="Temporary Amount" value={totalAmount} />
        <AmountRow label="Shipping" value={shipping} />
        {discount > 0 && (
          <AmountRow label="Discount" value={-discount} isDiscount />
        )}
      </div>
      <div className="border-t pt-4">
        <AmountRow
          label="The total amount of (including VAT)"
          value={finalTotal}
          isBold
        />
      </div>
      <CheckoutButton />
    </div>
  );
};

const AmountRow: React.FC<{
  label: string;
  value: number;
  isDiscount?: boolean;
  isBold?: boolean;
}> = React.memo(({ label, value, isDiscount, isBold }) => (
  <div
    className={`flex flex-wrap gap-2 justify-between text-xs sm:text-sm
      ${isDiscount ? "text-green-600" : "text-muted-foreground"}
      ${isBold ? "font-bold" : ""}`}
  >
    <span className={isBold ? "w-full md:w-1/2" : ""}>{label}</span>
    <span>${Math.abs(value).toFixed(2)}</span>
  </div>
));

const CheckoutButton: React.FC = React.memo(() => (
  <button className="text-xs sm:text-sm md:text-base w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 rounded mt-4 transition">
    Go to Checkout
  </button>
));

export default React.memo(OrderSummary);
