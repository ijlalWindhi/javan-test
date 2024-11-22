import React, { useState } from "react";
import Image from "./Image";
import { ICartItem } from "../types/Cart.type";

interface CartItemProps {
  item: ICartItem;
  onRemove: () => void;
  onUpdateQuantity: (quantity: number) => void;
  onUpdateNote: (note: string) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  item,
  onRemove,
  onUpdateQuantity,
  onUpdateNote,
}) => {
  const [note, setNote] = useState(item.note || "");
  const [isEditingNote, setIsEditingNote] = useState(false);
  const [quantity, setQuantity] = useState(item.quantity);

  const handleQuantityChange = (newQty: number) => {
    if (newQty > 0) {
      setQuantity(newQty);
      onUpdateQuantity(newQty);
    }
  };

  return (
    <article className="flex flex-col md:flex-row items-start gap-4 rounded-lg">
      {/* Image Column */}
      <div className="w-full sm:w-[40%] md:w-1/4 m-auto aspect-square relative rounded-md overflow-hidden bg-muted">
        <Image
          src={item.image}
          alt={item.title}
          className="object-cover rounded"
        />
      </div>

      {/* Product Details Column */}
      <div className="flex-1 space-y-3 justify-between h-full">
        <div className="space-y-1">
          <h3 className="font-semibold text-sm sm:text-base lg:text-lg">
            {item.title}
          </h3>
          <p className="text-xs lg:text-sm text-muted-foreground">
            Seller: {item.seller}
          </p>
          <p className="text-xs lg:text-sm text-muted-foreground">
            Color: {item.color}
          </p>
          <p className="text-xs lg:text-sm text-muted-foreground">
            Size: {item.size}
          </p>
        </div>

        <div className="flex gap-2">
          <div className="flex flex-col lg:flex-row gap-2 text-xs lg:text-sm">
            <button
              className="flex gap-1 text-gray-500 items-center"
              onClick={onRemove}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-3 h-3 fill-current"
              >
                <path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z" />
              </svg>
              REMOVE ITEM
            </button>
            <button className="flex gap-1 text-gray-500 items-center text-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-3 h-3 fill-current"
              >
                <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
              </svg>
              MOVE TO WISHLIST
            </button>
          </div>
        </div>
      </div>

      {/* Quantity and Price Column */}
      <div className="w-full md:w-auto flex flex-col items-end gap-3">
        <div className="flex items-center gap-3 border rounded-md">
          <button
            onClick={() => handleQuantityChange(quantity - 1)}
            className="border px-2 rounded-l"
          >
            -
          </button>
          <span className="w-8 text-center tabular-nums">{quantity}</span>
          <button
            onClick={() => handleQuantityChange(quantity + 1)}
            className="border px-2 rounded-r"
          >
            +
          </button>
        </div>
        <div className="text-xs lg:text-sm text-muted-foreground">
          {isEditingNote ? (
            <div className="flex gap-2 items-center">
              Note
              <input
                type="text"
                value={note}
                onChange={(e) => {
                  setNote(e.target.value);
                  onUpdateNote(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    setIsEditingNote(!isEditingNote);
                  }
                }}
                placeholder="Add a note..."
                className="w-full p-2 border rounded text-xs text-gray-500"
                disabled={!isEditingNote}
              />
              <svg
                onClick={() => setIsEditingNote(!isEditingNote)}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4 h-4 lg:w-6 md:h-6 fill-current text-gray-500 cursor-pointer"
              >
                <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1 0 32c0 8.8 7.2 16 16 16l32 0zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
              </svg>
            </div>
          ) : (
            <>
              (Note:{" "}
              <span
                className=" cursor-pointer"
                onClick={() => setIsEditingNote(!isEditingNote)}
              >
                {note || "Add a note..."}
              </span>
              )
            </>
          )}
        </div>
        <div className="text-sm sm:text-base font-semibold">${item.price}</div>
      </div>
    </article>
  );
};

export default CartItem;
