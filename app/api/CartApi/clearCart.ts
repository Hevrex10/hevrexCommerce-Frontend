export default async function clearCart() {
  const token = localStorage.getItem("token");

  const response = await fetch(
    "https://rexcommerce.onrender.com/api/v1/carts",
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to clear cart");
  }

  return data;
}
