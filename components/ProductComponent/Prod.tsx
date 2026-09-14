"use client";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import { IoMdStar } from "react-icons/io";
import { Product } from "../../Type/Type";
import Image from "next/image";
import Circle from "../Circle";
import SizeOption from "../SizeOption";
import Details from "../Details";
import addToCart from "../../Lib/api/CartApi/cart";
import SimilarProduct from "../SimilarProduct";

export default function Prod({ product }: { product: Product }) {
  const { sizes, price, stock, colors, name, image, _id } = product;
  const [selectedColor, setSelectedColor] = useState(colors?.[0] || "");
  const [selectedSize, setSelectedSize] = useState("");
  const [liked, setLiked] = useState(false);
  const [quantity, setQuantity] = useState(1);

  function increaseQuantity() {
    setQuantity((prev) => prev + 1);
  }

  function decreaseQuantity() {
    setQuantity((prev) => Math.max(1, prev - 1));
  }

  function cart() {
    const cart = {
      product: _id,
      quantity,
      size: selectedSize,
      color: selectedColor,
    };

    addToCart(cart);
  }

  return (
    <>
      <div className="flex justify-center">
        <Image
          src={image}
          alt={name}
          width={534}
          height={574}
          className="h-auto max-w-full object-contain"
        />
      </div>

      {/* PRODUCT INFORMATION */}
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold text-gray-900">{name}</p>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 rounded-full bg-neutral-100 px-4 py-1">
              <IoMdStar className="text-gray-600" />

              <p className="text-xs font-medium text-gray-600">
                4.2 — 54 Reviews
              </p>
            </div>

            <div className="rounded-full border border-gray-200 px-4 py-1">
              <p className="text-xs font-medium text-gray-600">
                {stock ? "INSTOCK" : "OUT OF STOCK"}
              </p>
            </div>
          </div>
        </div>

        <p className="text-lg font-semibold text-gray-900">${price}</p>

        {/* COLORS */}
        <div className="flex flex-col gap-2">
          <p className="text-xs font-medium uppercase tracking-wide text-gray-600">
            Available Colors
          </p>

          <div className="flex items-center gap-2.5">
            {colors?.map((color, index) => (
              <Circle
                key={index}
                bg={color}
                isActive={selectedColor === color}
                onClick={() => setSelectedColor(color)}
              />
            ))}
          </div>
        </div>

        {/* SIZES */}
        <div className="flex flex-col gap-2">
          <p className="text-xs font-medium uppercase tracking-wide text-gray-600">
            Select Size
          </p>

          <div className="flex gap-2">
            {sizes?.map((size, index) => (
              <SizeOption
                key={size}
                size={size}
                selected={selectedSize === size}
                onClick={() => setSelectedSize(size)}
              />
            ))}
          </div>
        </div>

        {/* QUANTITY */}
        <div className="flex flex-col gap-3">
          <p className="text-xs font-medium uppercase tracking-wide text-gray-600">
            Quantity
          </p>

          <div className="flex h-11 max-w-30 items-center justify-around rounded border border-gray-200">
            <button
              className="text-lg font-medium text-gray-800"
              onClick={decreaseQuantity}>
              -
            </button>

            <p className="text-sm font-medium text-gray-800">{quantity}</p>

            <button
              className="text-base font-medium text-gray-800"
              onClick={increaseQuantity}>
              +
            </button>
          </div>
        </div>

        {/* CART / WISHLIST */}
        <div className="flex flex-col gap-3">
          <div className="flex gap-4">
            <button className="flex w-72 items-center justify-center rounded bg-gray-900 px-6 py-3">
              <p className="text-sm font-medium text-white" onClick={cart}>
                Add to cart
              </p>
            </button>

            <button className="transition-colors">
              {liked ? (
                <FaHeart className="text-xl text-red-500" />
              ) : (
                <FaRegHeart className="text-xl text-gray-400 hover:text-red-500" />
              )}
            </button>
          </div>

          <p className="text-xs font-medium uppercase text-gray-600">
            — Free shipping on orders $100+
          </p>

          <div className="flex flex-col gap-1">
            <p className="text-xs font-medium uppercase text-blue-600">{}</p>

            <p className="text-xs font-medium uppercase text-red-600">{}</p>

            {/* {showNotification && <NotificationCard text="Added to cart" />} */}
          </div>
        </div>
      </div>
    </>
  );
}
