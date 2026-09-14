"use client";

import { useState } from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoIosStarOutline } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { FaRegStar, FaStar } from "react-icons/fa";
import type { Product } from "@/Type/Type";
import Review from "./Review";
// import ReviewForm from "./ReviewForm";

interface DetailsProps {
  product: Product;
}

type SelectedTab = "Review" | "Details" | "write review";

export default function Details({ product }: DetailsProps) {
  const [selected, setSelected] = useState<SelectedTab>("Review");

  const { description } = product;

  return (
    <section className="mx-auto my-20 flex max-w-6xl flex-col gap-10 px-4 md:flex-row">
      {/* Tabs */}
      <aside className="w-full md:w-1/4">
        <div className="flex w-full flex-col gap-3 pt-4">
          <button
            type="button"
            onClick={() => setSelected("Details")}
            className={`flex w-full items-center gap-2.5 rounded-lg px-6 py-2 ${
              selected === "Details"
                ? "bg-neutral-100 font-semibold text-gray-900"
                : "text-gray-600 hover:bg-neutral-100"
            }`}
          >
            <HiOutlineDotsHorizontal />

            <span className="text-sm font-medium leading-6">
              Details
            </span>
          </button>

          <button
            type="button"
            onClick={() => setSelected("Review")}
            className={`flex w-full items-center gap-2.5 rounded-lg px-6 py-2 ${
              selected === "Review"
                ? "bg-neutral-100 font-semibold text-gray-900"
                : "text-gray-600 hover:bg-neutral-100"
            }`}
          >
            <IoIosStarOutline />

            <span className="text-sm font-medium leading-6">
              Reviews
            </span>
          </button>
        </div>
      </aside>

      {/* Content */}
      <main className="flex min-h-[400px] flex-1 flex-col gap-4">
        <h2 className="text-base font-semibold text-gray-900">
          {selected === "Details"
            ? "Product Details"
            : "Customer Reviews"}
        </h2>

        <div className="text-sm font-normal leading-6 text-gray-600">
          {selected === "Details" && (
            <p className="whitespace-pre-line">
              {description}
            </p>
          )}

          {selected === "Review" && (
            <Review
              product={product}
            />
          )}
{/* 
          {selected === "write review" && (
            <ReviewForm product={product} />
          )} */}
        </div>
      </main>
    </section>
  );
}