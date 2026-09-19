export default async function updateCartQuantity(
  productId: string,
  quantity: number,
) {
  const response = await fetch(
    `https://rexcommerce.onrender.com/api/v1/carts/${productId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        quantity,
      }),
    },
  );

  if (!response.ok) {
    throw new Error("Failed to update cart quantity");
  }

  const data = await response.json();

  return data.data.cart.items;
}
