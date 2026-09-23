"use client";

import { useState } from "react";
import InputCard from "../InputCard";
import Image from "next/image";
import { createProduct } from "@/app/api/AuthApi/createProduct";
export default function AddProductComponent() {
  const [selectImage, setSelectImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formdata = new FormData(form);
    for (const [key, value] of formdata.entries()) {
      console.log(key, value);
    }

    const name = formdata.get("name") as string;
    const price = Number(formdata.get("price"));
    const stock = Number(formdata.get("stock"));
    const category = formdata.get("category") as string;
    const description = formdata.get("description") as string;

    const colors = (formdata.get("color") as string)
      .split(",")
      .map((color) => color.trim())
      .filter(Boolean);

    const tags = (formdata.get("tags") as string)
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);

    const sizes = (formdata.get("size") as string)
      .split(",")
      .map((size) => size.trim())
      .filter(Boolean);

    const image = formdata.get("image") as File;

    if (!image || image.size === 0) {
      console.log("Please select an image");
      return;
    }

    try {
      await createProduct({
        name,
        price,
        stock,
        category,
        description,
        colors,
        tags,
        sizes,
        image,
      });
      form.reset();
    } catch (error) {
      console.error(error);
    }
  }

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] || null;

    if (!file) {
      setSelectImage(null);
      setPreviewUrl(null);
      return;
    }

    setSelectImage(file);

    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 pb-50">
      <div className="flex flex-col gap-12 sm:flex-col md:flex-col lg:flex-row">
        {/* LEFT SIDE */}
        <div className="flex w-full max-w-80 flex-col gap-5">
          <InputCard text="Name" name="name" />

          <InputCard text="Price" name="price" type="number" />

          <InputCard text="Categories" name="category" />

          <InputCard text="Stock Status" name="stock" type="number" />

          <label className="font-['Inter'] text-sm font-medium leading-6 text-zinc-600">
            Description
          </label>

          <textarea
            name="description"
            placeholder="Product description"
            rows={5}
            className="w-full rounded-md px-5 py-2 font-['Inter'] text-sm font-medium text-gray-500 outline outline-gray-200"
          />
        </div>

        <div className="flex w-full max-w-80 flex-col gap-5">
          <InputCard
            text="Images"
            name="image"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />

          {previewUrl && (
            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium text-zinc-600">Image Preview</p>

              <Image
                src={previewUrl}
                alt="Selected product"
                width={34}
                height={34}
                className="rounded-md object-cover"
              />

              <p className="max-w-32 truncate text-xs text-gray-400">
                {selectImage?.name}
              </p>
            </div>
          )}

          <div className="flex flex-col items-start justify-center gap-2.5">
            <InputCard text="Color" name="color" />

            <InputCard text="Size" name="size" />

            <InputCard text="Tags" name="tags" />
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="flex w-[170px] items-center justify-center rounded bg-gray-900 p-2 outline-1 outline-gray-300 hover:cursor-pointer">
        <p className="text-white">Save Product</p>
      </button>
    </form>
  );
}
