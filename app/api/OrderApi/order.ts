import { CreateOrderData } from "@/Type/Type";

export async function createOrder(orderData: CreateOrderData) {
  const token = localStorage.getItem("token");

  const response = await fetch(
    "https://rexcommerce.onrender.com/api/v1/orders",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
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
  const token = localStorage.getItem("token");

  const response = await fetch(
    "https://rexcommerce.onrender.com/api/v1/orders/my-orders",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch order");
  }
  return data;
}
