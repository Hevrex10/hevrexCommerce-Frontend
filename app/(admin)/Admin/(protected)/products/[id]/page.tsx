import EditProduct from "@/components/AdminDashboard/EditProductComponent";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <EditProduct
      product={{
        _id: id,
        name: "Example Product",
        description: "Product description",
        price: 50000,
        category: "Shoe",
        sizes: ["M", "L"],
        color: "Black",
        stock: 10,
        image: "/images/product.jpg",
      }}
    />
  );
}
