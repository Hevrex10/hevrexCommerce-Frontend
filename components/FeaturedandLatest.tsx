import { getProducts } from "../Lib/api/product";
import Container from "./Container";
import FeaturedLatestTabs from "./FeaturedLatestTab";

export default async function FeaturedandLatest() {
  const products = await getProducts();

  const featured = products
    .filter((product) => product.colors.includes("Black"))
    .slice(0, 4);

  const latest = [...products]
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    )
    .slice(0, 4);
  return (
    <section>
      <Container>
        <div className="mx-auto my-20 max-w-[1116px] text-center sm:my-25 md:my-29 lg:my-32">
          <FeaturedLatestTabs featured={featured} latest={latest} />
        </div>
      </Container>
    </section>
  );
}
