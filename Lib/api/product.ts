import type { Product } from "../../Type/Type";

export async function getProducts(): Promise<Product[]> {
  const res = await fetch("https://rexcommerce.onrender.com/api/v1/products", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();

  return data.data.products;
}
