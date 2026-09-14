import ProductList from "@/components/ProductComponent/ProductList";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{
    category?: string;
    sort?: string;
    page?: number;
  }>;
}) {
  const params = await searchParams;

  return (
    <div>
      <ProductList
        category={params.category}
        sort={params.sort}
        page={params.page}
      />
    </div>
  );
}
