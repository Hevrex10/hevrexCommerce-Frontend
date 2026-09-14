import ProductsCard from "./ProductComponent/ProductsCard";
import { getProducts } from "../Lib/api/product";
import { Product } from "../Type/Type";

export default async function SimilarProduct() {
  const products = await getProducts();
  return (
    <section className="mx-auto my-20 flex w-full max-w-[1092px] flex-col px-4">
      <p className="text-2xl font-bold text-gray-900">You might also like</p>

      <div className="text-xs font-medium uppercase leading-6 tracking-wide text-gray-500">
        SIMILAR PRODUCTS
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.slice(0, 4).map((p: Product) => (
          <ProductsCard
            key={p._id}
            productName={p.name}
            id={p._id}
            src={p.image}
            price={p.price}
            stock={p.stock ? "INSTOCK" : "OUT OF STOCK"}
          />
        ))}
      </div>
    </section>
  );
}
