export default async function logout() {
  const response = await fetch(
    "https://rexcommerce.onrender.com/api/v1/users/logout",
    {
      method: "POST",
      credentials: "include",
    },
  );

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Logout failed");
  }
  return data;
}
