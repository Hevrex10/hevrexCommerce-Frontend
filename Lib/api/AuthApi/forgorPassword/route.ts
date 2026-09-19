export default async function forgotPassword(email: string) {
  const response = await fetch(
    "https://rexcommerce.onrender.com/api/v1/users/forgotPassword",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        email,
      }),
    },
  );
  const data = await response.json();
  console.log("Status:", response.status);
  console.log("Response:", data);
  if (!response.ok) {
    throw new Error(data.message || "Login failed");
  }
  return data;
}
