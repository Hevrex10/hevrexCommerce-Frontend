"use client";

import { useState } from "react";
import ProductsCard from "./ProductsCard";
import { Product } from "../Type/Type";

type Props = {
  featured: Product[];
  latest: Product[];
};

export default function FeaturedLatestTabs({ featured, latest }: Props) {
  const [select, setSelect] = useState<"featured" | "latest">("featured");

  const displayedProducts = select === "featured" ? featured : latest;

  return (
    <>
      <div className="mb-10 inline-flex items-center justify-center gap-3">
        <button
          onClick={() => setSelect("featured")}
          className={`rounded-full px-4 py-1 text-sm font-medium ${
            select === "featured"
              ? "bg-gray-900 text-white"
              : "bg-white text-gray-600"
          }`}>
          Featured
        </button>

        <button
          onClick={() => setSelect("latest")}
          className={`rounded-full px-4 py-1 text-sm font-medium ${
            select === "latest"
              ? "bg-gray-900 text-white"
              : "bg-white text-gray-600"
          }`}>
          Latest
        </button>
      </div>

      {/* Products */}
      <div className="flex max-w-[1092px] gap-4 overflow-x-auto scrollbar-hide">
        {displayedProducts.map((product) => (
          <ProductsCard
            key={product._id}
            id={product._id}
            stock={product.stock ? "IN STOCK" : "OUT OF STOCK"}
            productName={product.name}
            src={product.image}
            price={product.price}
          />
        ))}
      </div>
    </>
  );
}
