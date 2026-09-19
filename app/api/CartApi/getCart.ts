export default async function getCart() {
  const token = localStorage.getItem("token");
  const response = await fetch(
    "https://rexcommerce.onrender.com/api/v1/carts",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Failed to load cart");
  }

  return data.data.cart.items;
}
