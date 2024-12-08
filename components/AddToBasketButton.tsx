"use client";

import { Product } from "@/sanity.types";
import useBasketStore from "@/store/store";
import { it } from "node:test";
import { useEffect, useState } from "react";

interface AddToBasketButtonProps {
  product: Product;
  disabled?: boolean;
}

function AddToBasketButton({ product, disabled }: AddToBasketButtonProps) {
  const { addItem, removeItem, getItemsCount } = useBasketStore();
  const itemCount = getItemsCount(product._id);

  const [isClient, setIsClient] = useState(false);

  // Use useEffect to set isClient to true after component mounts
  // This ensures that the component only renders on the client side
  // preventing hydration errors due to server/client mismatch
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Return early if not on the client side
  }

  return (
    <div className="flex items-center justify-center space-x-2">
      <button
        onClick={() => removeItem(product._id)}
        className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${
          itemCount === 0
            ? "bg-yellow-100 cursor-not-allowed"
            : "bg-yellow-500 hover:bg-yellow-300"
        }`}
        disabled={itemCount === 0 || disabled}
      >
        <span
          className={`text-xl font-bold ${itemCount === 0 ? "text-gray-400" : "text-gray-600"}`}
        >
          -
        </span>
      </button>
      <span className="w-8 text-center font-semibold">{itemCount}</span>
      <button
        onClick={() => addItem(product)}
        className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${
          disabled
            ? "bg-yellow-200 cursor-not-allowed"
            : "bg-yellow-500 hover:bg-yellow-600"
        }`}
        disabled={disabled}
      >
        <span className="text-xl font-bold text-gray-600">+</span>
      </button>
    </div>
  );
}

export default AddToBasketButton;
