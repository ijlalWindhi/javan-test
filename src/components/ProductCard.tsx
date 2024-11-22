import React from "react";
import Image from "./Image";
import { IProduct } from "../types/Product.type";

interface ProductCardProps {
  product: IProduct;
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 animate-fadeIn">
      <Image
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-sm md:text-base truncate">
          {product.title}
        </h3>
        <div className="flex flex-wrap sm:flex-row gap-1 md:gap-2 text-xs md:text-sm justify-between items-center my-2">
          <span className="text-gray-900 font-bold">
            ${product.price.toFixed(2)}
          </span>
          <span className="text-gray-600">{product.category}</span>
        </div>
        <div className="flex-col flex gap-1 md:gap-2">
          <span className="text-xs md:text-sm text-gray-500">
            Seller: {product.seller}
          </span>
          <button
            onClick={onAddToCart}
            className="text-xs sm:text-sm md:text-sm bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
