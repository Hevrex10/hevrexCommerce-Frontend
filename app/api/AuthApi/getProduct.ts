import type { Product } from "../../../Type/Type";

interface ProductFilters {
  category?: string;
  sort?: string;
  page?: number;
}

export async function getProducts(
  filters?: ProductFilters,
): Promise<Product[]> {
  const params = new URLSearchParams();

  if (filters?.category) {
    params.set("category", filters.category);
  }

  if (filters?.sort) {
    params.set("sort", filters.sort);
  }

  if (filters?.page) {
    params.set("page", String(filters.page));
  }

  const query = params.toString();

  const response = await fetch(
    `https://rexcommerce.onrender.com/api/v1/products${query ? `?${query}` : ""}`,
    {
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await response.json();

  return data.data.products;
}

export async function getProduct(id: string): Promise<Product> {
  const response = await fetch(
    `https://rexcommerce.onrender.com/api/v1/products/${id}`,
    {
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  const data = await response.json();

  return data.data.product;
}
