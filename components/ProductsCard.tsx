import Image from "next/image";
import Link from "next/link";
import type { ProductsCardProps } from "../Type/Type";
export default function ProductsCard({
  productName,
  src,
  price,
  stock,
  id,
}: ProductsCardProps) {
  return (
    <Link href={`/products/${id}`}>
      <div className="flex w-[270px] shrink-0 flex-col items-start gap-6 rounded px-2 py-4">
        <div className="h-80 w-full overflow-hidden rounded bg-neutral-100">
          <Image
            src={src}
            alt={productName}
            width={240}
            height={320}
            className="h-80 w-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-sm font-medium leading-6 text-gray-900">
            {productName}
          </p>

          <div className="flex items-center gap-4">
            {/* Stock */}
            <div className="rounded-full px-4 py-0.5 outline outline-gray-200">
              <p
                className={`text-xs font-medium capitalize leading-6 ${
                  stock === "IN STOCK" ? "text-blue-600" : "text-red-700"
                }`}>
                {stock}
              </p>
            </div>

            {/* Price */}
            <p className="text-sm font-normal leading-6 text-zinc-600">
              ${price}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
