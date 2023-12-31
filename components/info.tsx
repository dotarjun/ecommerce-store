"use client";

import { MouseEventHandler } from "react";

import { Product } from "@/types";
import Currency from "@/components/ui/currency";
import { ShoppingCart } from "lucide-react";
import useCart from "@/hooks/use-cart";
import CustomButton from "@/components/ui/headless-button";

interface InfoProps {
  data: Product[];
}

const Info: React.FC<InfoProps> = ({ data }) => {
  const [infoData] = data;
  const cart = useCart();

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    cart.addItem(infoData);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{infoData.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={infoData?.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Variant:</h3>
          <div>{infoData?.size?.value} Handed</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <div
            className="h-6 w-6 rounded-full border border-gray-600"
            style={{ backgroundColor: infoData?.color?.value }}></div>
        </div>
        <div className="mt-10 flex items-center gap-x-3">
          <CustomButton onClick={onAddToCart} className="flex items-center gap-x-2">
            Add to Cart
            <ShoppingCart />
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Info;
