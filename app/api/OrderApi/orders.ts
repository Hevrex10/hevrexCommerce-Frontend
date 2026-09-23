export async function orders() {
  
  const token = localStorage.getItem("token");
  const response = await fetch(
    "https://rexcommerce.onrender.com/api/v1/orders",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Failed to get orders");
  }

  return data
}
