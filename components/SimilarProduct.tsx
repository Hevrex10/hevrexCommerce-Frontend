import ProductsCard from "./ProductComponent/ProductsCard";
import { getProducts } from "../app/api/AuthApi/getProduct";
import { Product } from "../Type/Type";

export default async function SimilarProduct() {
  const products = await getProducts();
  return (
    <section className="mx-auto my-20 flex w-full max-w-[1092px] flex-col px-4">
      <p className="text-2xl font-bold text-gray-900">You might also like</p>

      <div className="text-xs font-medium uppercase leading-6 tracking-wide text-gray-500">
        SIMILAR PRODUCTS
      </div>

      <div className="mt-8 flex gap-4 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 lg:grid-cols-4">
        {products.slice(0, 4).map((p: Product) => (
          <div key={p._id} className="w-[calc(50%-8px)] shrink-0 sm:w-auto">
            <ProductsCard
              productName={p.name}
              id={p._id}
              src={p.image}
              price={p.price}
              stock={p.stock ? "INSTOCK" : "OUT OF STOCK"}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
