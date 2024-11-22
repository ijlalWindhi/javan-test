import React from "react";
import CartItem from "./CartItem";
import { ICartItem } from "../types/Cart.type";

interface CartItemsListProps {
  items: ICartItem[];
  onRemove: (id: number) => void;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onUpdateNote: (id: number, note: string) => void;
}

export const CartItemsList: React.FC<CartItemsListProps> = ({
  items,
  onRemove,
  onUpdateQuantity,
  onUpdateNote,
}) => (
  <div className="md:col-span-2 space-y-4 shadow-md p-4 border rounded-md h-fit">
    <h1 className="text-base md:text-lg font-semibold">
      Cart ({items?.length || 0} Items)
    </h1>
    {items.map((item, index) => (
      <div key={item.id}>
        <CartItem
          item={item}
          onRemove={() => onRemove(item.id)}
          onUpdateQuantity={(qty) => onUpdateQuantity(item.id, qty)}
          onUpdateNote={(note) => onUpdateNote(item.id, note)}
        />
        {items.length - 1 !== index && <hr className="my-4" />}
      </div>
    ))}
  </div>
);
