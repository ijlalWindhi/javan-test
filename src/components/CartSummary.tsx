import React from "react";

interface CartSummaryProps {
  totalAmount: number;
  shipping: number;
  discount: number;
  finalTotal: number;
}

export const CartSummary: React.FC<CartSummaryProps> = ({
  totalAmount,
  shipping,
  discount,
  finalTotal,
}) => (
  <div className="bg-white shadow-md p-4 border rounded-md h-fit">
    <h2 className="text-base md:text-lg font-semibold">The total amount of</h2>

    <div className="space-y-2 my-2 md:my-4 w-auto">
      <div className="flex flex-wrap justify-between text-xs text-muted-foreground sm:text-sm">
        <span>Temporary Amount</span>
        <span>${totalAmount.toFixed(2)}</span>
      </div>
      <div className="flex flex-wrap gap-2 justify-between text-xs text-muted-foreground sm:text-sm">
        <span>Shipping</span>
        <span>${shipping.toFixed(2)}</span>
      </div>
      {discount > 0 && (
        <div className="flex flex-wrap gap-2 justify-between text-xs sm:text-sm text-green-600">
          <span>Discount</span>
          <span>-${discount.toFixed(2)}</span>
        </div>
      )}
    </div>

    <div className="border-t pt-4">
      <div className="flex flex-wrap gap-2 justify-between font-bold text-xs text-muted-foreground sm:text-sm">
        <span className="w-full md:w-1/2">
          The total amount of (including VAT)
        </span>
        <span>${finalTotal.toFixed(2)}</span>
      </div>
    </div>

    <button className="text-xs sm:text-sm md:text-base w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 rounded mt-4 transition">
      Go to Checkout
    </button>
  </div>
);
