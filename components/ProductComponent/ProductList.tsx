import { FaAngleDown, FaChevronRight } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { getProducts } from "../../app/api/AuthApi/getProduct";
import ProductsCard from "./ProductsCard";
import Link from "next/link";
import MobileFilter from "./MobileFilter";

const categories = ["Perfume", "Trouser", "Shoe", "Handbag", "Hat"];

const colors = [
  "bg-black",
  "bg-orange-500",
  "bg-blue-200",
  "bg-gray-200",
  "bg-stone-400",
];

const sizes = ["S", "M", "L", "XL", "XXL"];

export default async function ProductList({
  category,
  sort,
  page,
}: {
  category?: string;
  sort?: string;
  page?: number;
}) {
  const products = await getProducts({
    category,
    sort,
    page,
  });
  return (
    <main>
      <section className="bg-neutral-100 py-4">
        <div className="mx-auto flex h-7 w-full max-w-[1116px] items-center px-3">
          <div className="flex items-center gap-2">
            <p className="text-sm font-medium leading-6 text-gray-600">
              Ecommerce
            </p>

            <FaChevronRight className="text-xs text-gray-600" />

            <p className="text-sm font-medium leading-6 text-gray-900">
              Categories
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-[1096px] gap-8 px-4 py-10 sm:px-6 lg:px-8">
        {/* FILTER SIDEBAR */}
        <aside className="hidden w-60 shrink-0 rounded-md bg-white lg:block">
          <div className="flex flex-col gap-12 border border-gray-200 px-4 pb-8 pt-6">
            {/* CATEGORIES */}
            <div className="flex flex-col gap-4">
              <p className="text-sm font-medium leading-6 text-gray-900">
                Categories
              </p>

              <div className="flex flex-col">
                {categories.map((item) => (
                  <Link
                    key={item}
                    href={`/Products?category=${encodeURIComponent(item)}`}
                    className="flex cursor-pointer items-center gap-3 border-b border-gray-200 px-1 py-3">
                    <input
                      type="checkbox"
                      checked={item === category}
                      readOnly
                      className="h-4 w-4 cursor-pointer accent-black"
                    />

                    <span className="text-sm leading-6 text-zinc-600">
                      {item}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* COLOR */}
            <div className="flex flex-col gap-3">
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
            <div className="flex flex-col gap-4">
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
            <div className="mb-10 flex flex-col gap-6">
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
        </aside>

        <div className="w-full">
          <MobileFilter category={category} />

          <div className="mb-6 flex flex-col gap-3">
            <p className="text-sm font-medium leading-6 text-black">
              Applied Filter:
            </p>

            {category && (
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/Products"
                  className="flex items-center gap-2 rounded-full border border-gray-200 px-4 py-1">
                  <p className="text-xs font-medium leading-6 text-gray-900">
                    {category}
                  </p>

                  <RxCross2 className="text-gray-600" />
                </Link>
              </div>
            )}
          </div>

          <div className="mb-6 flex items-center justify-between">
            <p className="text-xs font-medium leading-6 text-gray-600">
              Showing {products.length} results.
            </p>

            <button
              type="button"
              className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-gray-600">
              Sort by <FaAngleDown />
            </button>
          </div>

          <div className="w-full overflow-hidden">
            <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              {products.map((product) => (
                <ProductsCard
                  key={product._id}
                  id={product._id}
                  productName={product.name}
                  price={product.price}
                  stock={product.stock}
                  src={product.image}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
