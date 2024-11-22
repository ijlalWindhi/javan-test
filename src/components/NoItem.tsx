import React from "react";
import { Link } from "react-router-dom";

const NoItem: React.FC = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
    <h1 className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl text-center">
      Your cart is empty :(
    </h1>
    <p className="text-gray-500 text-center text-xs sm:text-sm md:text-base">
      Looks like you haven't added anything to your cart yet.
    </p>
    <Link
      to="/"
      className="bg-blue-500 text-white text-xs sm:text-sm md:text-base px-4 py-2 rounded hover:bg-blue-600 transition"
    >
      Go Shopping
    </Link>
  </div>
);

export default React.memo(NoItem);
