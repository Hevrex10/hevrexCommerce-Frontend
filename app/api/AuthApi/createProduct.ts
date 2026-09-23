interface CreateProduct {
  name: string;
  price: number;
  stock: number;
  category?: string;
  description: string;
  colors: string[];
  tags: string[];
  sizes: string[];
  image: File;
}

export async function createProduct({
  name,
  price,
  stock,
  category,
  description,
  colors,
  tags,
  sizes,
  image,
}: CreateProduct) {
  const token = localStorage.getItem("token");

  const formData = new FormData();

  formData.append("name", name);
  formData.append("price", String(price));
  formData.append("stock", String(stock));
  formData.append("category", category || "");
  formData.append("description", description);

  formData.append("colors", JSON.stringify(colors));
  formData.append("sizes", JSON.stringify(sizes));
  formData.append("tags", JSON.stringify(tags));

  formData.append("image", image);

  const response = await fetch(
    "https://rexcommerce.onrender.com/api/v1/products",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    },
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to create product");
  }

  return data;
}
