export default async function clearCart() {
  const response = await fetch(
    "https://rexcommerce.onrender.com/api/v1/carts",
    {
      method: "DELETE",
      credentials: "include",
    },
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to clear cart");
  }

  return data;
}