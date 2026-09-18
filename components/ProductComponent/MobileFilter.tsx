"use client";

import { useState } from "react";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";

const categories = ["Perfume", "Trouser", "Shoe", "Handbag", "Hat"];

const colors = [
  "bg-black",
  "bg-orange-500",
  "bg-blue-200",
  "bg-gray-200",
  "bg-stone-400",
];

const sizes = ["S", "M", "L", "XL", "XXL"];

export default function MobileFilter({ category }: { category?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-6 lg:hidden">
      {/* Filter button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-2 text-sm font-medium">
        {isOpen ? (
          <RxCross1 className="text-xl" />
        ) : (
          <RxHamburgerMenu className="text-xl" />
        )}

        {isOpen ? "Close Filters" : "Filters"}
      </button>

      {/* Filter menu */}
      {isOpen && (
        <div className="mt-4 border border-gray-200 bg-white p-4">
          {/* CATEGORIES */}
          <div className="flex flex-col gap-4">
            <p className="text-sm font-medium text-gray-900">Categories</p>

            <div className="flex flex-col">
              {categories.map((item) => (
                <Link
                  key={item}
                  href={`/Products?category=${encodeURIComponent(item)}`}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 border-b border-gray-200 px-1 py-3">
                  <input
                    type="checkbox"
                    checked={item === category}
                    readOnly
                    className="h-4 w-4 accent-black"
                  />

                  <span className="text-sm text-zinc-600">{item}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* COLOR */}
          <div className="mt-8 flex flex-col gap-3">
            <p className="text-gray-600">Color</p>

            <div className="flex gap-2">
              {colors.map((color) => (
                <button
                  key={color}
                  type="button"
                  className={`h-6 w-6 rounded-full ${color}`}
                />
              ))}
            </div>
          </div>

          {/* SIZE */}
          <div className="mt-8 flex flex-col gap-4">
            <p className="text-gray-600">Size</p>

            <div className="flex flex-wrap gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  className="flex h-9 min-w-9 items-center justify-center rounded border border-gray-200 px-3 text-sm text-gray-600">
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* PRICE */}
          <div className="mt-8 flex flex-col gap-6">
            <p className="text-gray-600">Price</p>

            <div className="relative pt-2">
              <div className="h-1 w-full rounded-full bg-gray-200">
                <div className="h-1 w-3/4 rounded-full bg-gray-900" />
              </div>

              <div className="mt-4 flex justify-between text-xs text-gray-600">
                <span>$0</span>
                <span>$890</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
