import { Cart } from "../../../Type/Type";

export default async function addToCart({
  product,
  quantity,
  size,
  color,
}: Cart) {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(
      "https://rexcommerce.onrender.com/api/v1/carts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },

        body: JSON.stringify({
          product,
          quantity,
          size,
          color,
        }),
      },
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to add product to cart");
    }
  } catch (error) {
    console.log("Error adding to cart:", error);
  }
}
