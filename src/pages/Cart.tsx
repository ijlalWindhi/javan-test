import React from "react";
import NoItem from "../components/NoItem";
import { CartItemsList } from "../components/CartItemList";
import { CartSummary } from "../components/CartSummary";
import { VoucherSection } from "../components/VoucherSection";
import { useCart } from "../hooks/useCart";

const Cart: React.FC = () => {
  const {
    items,
    totalAmount,
    discount,
    shipping,
    voucher,
    finalTotal,
    handleRemoveItem,
    handleUpdateQuantity,
    handleUpdateNote,
    handleApplyVoucher,
  } = useCart();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4">
        <NoItem />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-6">
        <CartItemsList
          items={items}
          onRemove={handleRemoveItem}
          onUpdateQuantity={handleUpdateQuantity}
          onUpdateNote={handleUpdateNote}
        />

        <div className="flex flex-col gap-6">
          <CartSummary
            totalAmount={totalAmount}
            shipping={shipping}
            discount={discount}
            finalTotal={finalTotal}
          />

          <VoucherSection
            voucher={voucher || ""}
            onApplyVoucher={handleApplyVoucher}
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
