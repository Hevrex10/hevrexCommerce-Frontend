export default async function getCart() {
  const response = await fetch(
    "https://rexcommerce.onrender.com/api/v1/carts",
    {
      credentials: "include",
    },
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error("Failed to load cart");
  }

  return data.data.cart.items
}
