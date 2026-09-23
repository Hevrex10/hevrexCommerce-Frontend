"use client";
import { getProducts } from "@/app/api/AuthApi/getProduct";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Product } from "@/Type/Type";
import {
  FiSearch,
  FiMoreHorizontal,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { HiOutlineSwitchVertical } from "react-icons/hi";

const Pagination = [1, 2, 3, 4, 5];

export default function AllProduct() {
  const [products, setProduct] = useState<Product[]>([]);
  useEffect(() => {
    async function getAllProduct() {
      const data = await getProducts();
      setProduct(data);
    }
    getAllProduct();
  }, []);

  return (
    <div className="w-full min-w-0 rounded-lg border border-gray-200 bg-white">
      <div className="flex w-full flex-col gap-3 border-b border-gray-200 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-sm font-medium text-gray-900">Products</h2>

        <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
          <Link
            className="
              h-9 rounded-md bg-gray-900 px-4
              text-xs font-medium text-white
              transition hover:bg-gray-800
            "
            href="/Admin/addProduct">
            Add product
          </Link>

          <div className="relative w-full sm:w-[190px]">
            <FiSearch
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
            />

            <input
              type="text"
              placeholder="Search products"
              className="
                h-9 w-full rounded-md border border-gray-200
                bg-white pl-9 pr-3
                text-xs text-gray-700
                outline-none
                placeholder:text-gray-400
                focus:border-gray-400
              "
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-[760px] table-auto text-left">
          <thead>
            <tr className="border-b border-gray-200 text-[11px] text-gray-500">
              <th className="w-12 px-5 py-3 font-medium">
                <HiOutlineSwitchVertical size={15} />
              </th>

              <th className="px-4 py-3 font-medium">Name</th>

              <th className="px-4 py-3 font-medium">Price</th>

              <th className="px-4 py-3 font-medium">Stock</th>

              <th className="px-4 py-3 font-medium">Categories</th>

              <th className="w-16 px-4 py-3 text-center font-medium">Action</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr
                key={product._id}
                className="
                  border-b border-gray-100
                  text-xs text-gray-600
                  last:border-b-0
                  hover:bg-gray-50/50
                ">
                <td className="">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={40}
                    height={40}
                    className="rounded-md object-cover"
                  />
                </td>

                {/* Product */}
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <span className="whitespace-nowrap text-gray-600">
                      {product.name}
                    </span>
                  </div>
                </td>

                {/* Price */}
                <td className="px-4 py-3 whitespace-nowrap">{product.price}</td>

                {/* Stock */}
                <td className="px-4 py-3 whitespace-nowrap">{product.stock}</td>

                {/* Categories */}
                <td className="px-4 py-3 whitespace-nowrap">
                  {product.category}
                </td>

                {/* Action */}
                <td className="px-4 py-3 text-center">
                  <Link
                    href={`products/${product._id}`}
                    className="
                      rounded p-1.5
                      text-gray-500
                      transition hover:bg-gray-100">
                    <FiMoreHorizontal size={17} />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-end gap-1 border-t border-gray-100 px-5 py-4">
        <button
          className="
            flex h-8 w-8 items-center justify-center
            rounded-md text-gray-500
            hover:bg-gray-100
          ">
          <FiChevronLeft size={15} />
        </button>

        <button
          className="
            flex h-8 w-8 items-center justify-center
            rounded-md bg-gray-100
            text-xs font-medium text-gray-900
          ">
          1
        </button>

        <button
          className="
            flex h-8 w-8 items-center justify-center
            rounded-md text-xs text-gray-600
            hover:bg-gray-100
          ">
          2
        </button>

        <span className="px-2 text-xs text-gray-400">...</span>

        <button
          className="
            flex h-8 w-8 items-center justify-center
            rounded-md text-xs text-gray-600
            hover:bg-gray-100
          ">
          23
        </button>

        <button
          className="
            flex h-8 w-8 items-center justify-center
            rounded-md text-xs text-gray-600
            hover:bg-gray-100
          ">
          24
        </button>

        <button
          className="
            flex h-8 w-8 items-center justify-center
            rounded-md text-gray-500
            hover:bg-gray-100
          ">
          <FiChevronRight size={15} />
        </button>
      </div>
    </div>
  );
}
