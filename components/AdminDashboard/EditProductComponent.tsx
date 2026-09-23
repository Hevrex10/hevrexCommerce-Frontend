"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FiArrowLeft, FiUpload, FiX } from "react-icons/fi";
import Link from "next/link";

type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  sizes?: string[];
  color?: string;
  stock?: number;
  image?: string;
};

type EditProductProps = {
  product: Product;
};

const categories = ["Perfume", "Trouser", "Shoe", "Handbag", "Hat"];

const availableSizes = ["S", "M", "L", "XL", "XXL"];

export default function EditProductComponent({ product }: EditProductProps) {
  const [name, setName] = useState(product.name || "");
  const [description, setDescription] = useState(product.description || "");
  const [price, setPrice] = useState(String(product.price || ""));
  const [category, setCategory] = useState(product.category || "");
  const [color, setColor] = useState(product.color || "");
  const [stock, setStock] = useState(String(product.stock || ""));

  const [sizes, setSizes] = useState<string[]>(product.sizes || []);

  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState(product.image || "");

  const [loading, setLoading] = useState(false);

  // Clean up object URL when component unmounts
  useEffect(() => {
    return () => {
      if (previewUrl.startsWith("blob:")) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (!file) return;

    setSelectedImage(file);

    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
  }

  function removeImage() {
    setSelectedImage(null);
    setPreviewUrl(product.image || "");
  }

  function toggleSize(size: string) {
    setSizes((currentSizes) => {
      if (currentSizes.includes(size)) {
        return currentSizes.filter((item) => item !== size);
      }

      return [...currentSizes, size];
    });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);

    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("color", color);
      formData.append("stock", stock);

      sizes.forEach((size) => {
        formData.append("sizes", size);
      });

      if (selectedImage) {
        formData.append("image", selectedImage);
      }

      // Replace this URL with your actual API endpoint
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/products/${product._id}`,
        {
          method: "PATCH",
          body: formData,
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to update product");
      }

      console.log("Product updated:", data);

      // You can redirect or show a success message here
    } catch (error) {
      console.error("Error updating product:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto w-full max-w-[1100px]">
      {/* Header */}
      <div className="mb-6 flex items-center gap-3">
        <Link
          href="/Admin/products"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 transition hover:bg-gray-50">
          <FiArrowLeft size={18} />
        </Link>

        <div>
          <h1 className="text-[22px] font-semibold text-gray-900">
            Edit Product
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Update your product information.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_350px]">
          {/* Left side */}
          <div className="space-y-5">
            {/* Product information */}
            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-[16px] font-semibold text-gray-900">
                Product Information
              </h2>

              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Product Name
                  </label>

                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter product name"
                    className="h-11 w-full rounded-lg border border-gray-200 px-4 text-sm outline-none transition focus:border-gray-400"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Description
                  </label>

                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter product description"
                    rows={5}
                    className="w-full resize-none rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-gray-400"
                  />
                </div>

                {/* Price + Stock */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Price
                    </label>

                    <input
                      type="number"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      placeholder="0"
                      className="h-11 w-full rounded-lg border border-gray-200 px-4 text-sm outline-none transition focus:border-gray-400"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Stock
                    </label>

                    <input
                      type="number"
                      value={stock}
                      onChange={(e) => setStock(e.target.value)}
                      placeholder="0"
                      className="h-11 w-full rounded-lg border border-gray-200 px-4 text-sm outline-none transition focus:border-gray-400"
                    />
                  </div>
                </div>

                {/* Category + Color */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Category
                    </label>

                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="h-11 w-full rounded-lg border border-gray-200 bg-white px-4 text-sm outline-none focus:border-gray-400">
                      <option value="">Select category</option>

                      {categories.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Color
                    </label>

                    <input
                      type="text"
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                      placeholder="e.g. Black"
                      className="h-11 w-full rounded-lg border border-gray-200 px-4 text-sm outline-none transition focus:border-gray-400"
                    />
                  </div>
                </div>

                {/* Sizes */}
                <div>
                  <label className="mb-3 block text-sm font-medium text-gray-700">
                    Sizes
                  </label>

                  <div className="flex flex-wrap gap-2">
                    {availableSizes.map((size) => {
                      const selected = sizes.includes(size);

                      return (
                        <button
                          type="button"
                          key={size}
                          onClick={() => toggleSize(size)}
                          className={`flex h-10 min-w-10 items-center justify-center rounded-lg border px-4 text-sm transition ${
                            selected
                              ? "border-gray-900 bg-gray-900 text-white"
                              : "border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
                          }`}>
                          {size}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="space-y-5">
            {/* Image */}
            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-[16px] font-semibold text-gray-900">
                Product Image
              </h2>

              <div className="relative overflow-hidden rounded-xl border border-dashed border-gray-300 bg-gray-50">
                {previewUrl ? (
                  <div className="relative aspect-square w-full">
                    <Image
                      src={previewUrl}
                      alt={name || "Product"}
                      fill
                      className="object-cover"
                      unoptimized={previewUrl.startsWith("blob:")}
                    />

                    <button
                      type="button"
                      onClick={removeImage}
                      className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-700 shadow-sm">
                      <FiX size={17} />
                    </button>
                  </div>
                ) : (
                  <label className="flex aspect-square cursor-pointer flex-col items-center justify-center">
                    <FiUpload size={25} className="mb-3 text-gray-400" />

                    <span className="text-sm font-medium text-gray-600">
                      Upload image
                    </span>

                    <span className="mt-1 text-xs text-gray-400">
                      PNG, JPG or WEBP
                    </span>

                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </label>
                )}
              </div>

              {previewUrl && (
                <label className="mt-4 flex h-11 cursor-pointer items-center justify-center rounded-lg border border-gray-200 text-sm font-medium text-gray-600 transition hover:bg-gray-50">
                  Change Image
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>
              )}
            </div>

            {/* Actions */}
            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
              <button
                type="submit"
                disabled={loading}
                className="flex h-11 w-full items-center justify-center rounded-lg bg-gray-900 text-sm font-medium text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60">
                {loading ? "Updating..." : "Update Product"}
              </button>

              <Link
                href="/Admin/products"
                className="mt-3 flex h-11 w-full items-center justify-center rounded-lg border border-gray-200 text-sm font-medium text-gray-600 transition hover:bg-gray-50">
                Cancel
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
