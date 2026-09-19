import { CreateOrderData } from "@/Type/Type";

export async function createOrder(orderData: CreateOrderData) {
  const response = await fetch(
    "https://rexcommerce.onrender.com/api/v1/orders",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(orderData),
    },
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to create order");
  }

  return data;
}

export async function getOrders() {
  const response = await fetch(
    "https://rexcommerce.onrender.com/api/v1/orders/my-orders",
    {
      credentials: "include",
    },
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch order");
  }
  return data;
}
