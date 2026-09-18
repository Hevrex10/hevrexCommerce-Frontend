import ProductsCard from "./ProductComponent/ProductsCard";
import Container from "./Container";
import { getProducts } from "../Lib/api/product";

export default async function BestSelling() {
  const products = await getProducts();

  const productsWithAvgRating = products.map((product) => {
    const reviews = Array.isArray(product.reviews) ? product.reviews : [];

    const ratings = reviews.map((review) => review.rating);

    const avgRating =
      ratings.length > 0
        ? ratings.reduce((total, rating) => total + rating, 0) / ratings.length
        : 0;

    return {
      ...product,
      avgRating,
    };
  });

  const bestSelling = productsWithAvgRating
    .sort((a, b) => b.avgRating - a.avgRating)
    .slice(0, 6);

  return (
    <section>
      <Container>
        <div className="mx-auto my-10 flex max-w-[1092px] flex-col gap-10 sm:my-15 md:my-23 lg:my-30 lg:gap-20">
          {/* Heading */}
          <div className="flex flex-col gap-4">
            <p className="text-center text-xs font-medium uppercase leading-6 tracking-wide text-gray-500">
              Shop Now
            </p>

            <h2 className="text-center text-2xl font-bold text-gray-900">
              Best Selling
            </h2>
          </div>

          {/* Products */}
          <div className="scrollbar-hide flex gap-6 overflow-x-auto">
            {bestSelling.map((product) => (
              <ProductsCard
                key={product._id}
                id={product._id}
                stock={product.stock ? "IN STOCK" : "Out of Stock"}
                productName={product.name}
                src={product.image}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
