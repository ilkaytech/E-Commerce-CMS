import { ShoppingBag } from "lucide-react";
import React from "react";

const Cart = () => {
  return (
    <div className="border relative bg-indigo-100  rounded-full p-2">
      <ShoppingBag className="text-indigo-500 " />
      <div className="absolute text-xs bg-indigo-500  rounded-full text-white py-1 px-2 -top-2 -right-3">
        0
      </div>
    </div>
  );
};

export default Cart;
