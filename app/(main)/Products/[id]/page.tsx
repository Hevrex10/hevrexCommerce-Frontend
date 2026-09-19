import Link from "next/link";
import { getProduct } from "@/app/api/AuthApi/product/route";
import { FaAngleRight } from "react-icons/fa";
import ProductInfo from "../../../../components/ProductComponent/ProductInfo";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = await getProduct(id);

  return (
    <>
      <div className="mx-auto my-4 flex h-7 w-full max-w-[1116px] items-center px-3">
        <div className="flex items-center gap-1">
          <Link
            href="/"
            className="text-sm font-medium leading-6 text-gray-600">
            Ecommerce
          </Link>

          <FaAngleRight className="text-gray-600" />

          <p className="text-sm font-medium leading-6 text-gray-900">
            {product.name}
          </p>
        </div>
      </div>

      <ProductInfo {...product} />
    </>
  );
}
