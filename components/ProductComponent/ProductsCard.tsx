import Image from "next/image";
import Link from "next/link";
import type { ProductsCardProps } from "../../Type/Type";
export default function ProductsCard({
  productName,
  src,
  price,
  stock,
  id,
}: ProductsCardProps) {
  const stockStatus = stock ? "IN STOCK" : "Out of Stock";
  return (
    <Link href={`/Products/${id}`}>
      <div className="flex w-[270px] shrink-0 flex-col items-start gap-6 rounded px-2 py-4">
        <div className="h-80 w-full overflow-hidden rounded bg-neutral-100">
          <Image
            src={src}
            alt={productName}
            width={240}
            height={320}
            className="h-80  object-cover"
          />
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-sm font-medium leading-6 text-gray-900">
            {productName}
          </p>

          <div className="flex items-center gap-4">
            <div className="rounded-full px-4 py-0.5 outline outline-gray-200">
              <p
                className={`text-xs font-medium capitalize leading-6 ${
                  stock ? "text-blue-600" : "text-red-700"
                }`}>
                {stockStatus}
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
