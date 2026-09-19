export default async function removeFromCart(cartItemId: string) {
  const token = localStorage.getItem("token");

  try {
    const response = await fetch(
      `https://rexcommerce.onrender.com/api/v1/carts/${cartItemId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.log("Delete error from backend:", errorData);

      throw new Error("Failed to delete cart item");
    }

    const data = await response.json();

    return data.data.cart.items;
  } catch (error) {
    console.error("Error deleting product from cart:", error);
    throw error;
  }
}
