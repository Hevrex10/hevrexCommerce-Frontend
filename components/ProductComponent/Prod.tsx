"use client";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import { IoMdStar } from "react-icons/io";
import { Product, Cart } from "../../Type/Type";
import Image from "next/image";
import Circle from "../Circle";
import SizeOption from "../SizeOption";
import addToCart from "../../Lib/api/CartApi/cart/route";

export default function Prod({ product }: { product: Product }) {
  const { sizes, price, stock, colors, name, image, _id } = product;
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");

  function increaseQuantity() {
    setQuantity((prev) => prev + 1);
  }

  function decreaseQuantity() {
    setQuantity((prev) => Math.max(1, prev - 1));
  }

  async function cart() {
    if (!selectedColor) {
      setMessage("Please select a color");
      return;
    }

    if (!selectedSize) {
      setMessage("Please select a size");
      return;
    }
    setIsLoading(true);

    const cart: Cart = {
      product: _id,
      quantity,
      size: selectedSize,
      color: selectedColor,
    };

    try {
      await addToCart(cart);
      setMessage("Added to cart successfully");
      setQuantity(1);
      setSelectedColor("");
      setSelectedSize("");

      setTimeout(() => {
        setMessage("");
      }, 3000);
    } catch (error) {
      console.error("Failed to add to cart:", error);

      setMessage("Failed to add to cart");

      setTimeout(() => {
        setMessage("");
      }, 3000);
    } finally {
      setIsLoading(false);
    }
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
            <button
              onClick={cart}
              className="flex w-72 items-center justify-center rounded bg-gray-900 hover:bg-gray-800 px-6 py-3 cursor-pointer">
              {isLoading ? (
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
              ) : (
                <p className="text-sm font-medium text-white">Add to cart</p>
              )}
            </button>

            {/* <button className="transition-colors">
              {liked ? (
                <FaHeart className="text-xl text-red-500" />
              ) : (
                <FaRegHeart className="text-xl text-gray-400 hover:text-red-500" />
              )}
            </button> */}
          </div>

          <p className="text-xs font-medium uppercase text-gray-600">
            — Free shipping on orders $100+
          </p>

          <div className="flex flex-col gap-1">
            {message && (
              <p className="text-sm font-medium text-green-600">{message}</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
