import { Cart } from "../../../Type/Type";

export default async function addToCart({
  product,
  quantity,
  size,
  color,
}: Cart) {
  try {
    const response = await fetch(
      "https://rexcommerce.onrender.com/api/v1/carts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          product,
          quantity,
          size,
          color,
        }),
      },
    );

    if (!response.ok) {
      throw new Error("Failed to add product to cart");
    }

    const data = await response.json();

    console.log("Added to cart:", data);
  } catch (error) {
    console.log("Error adding to cart:", error);
  }
}
