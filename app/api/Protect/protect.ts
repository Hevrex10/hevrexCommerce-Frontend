export default async function protect() {
  const token = localStorage.getItem("token");

  const response = await fetch(
    "https://rexcommerce.onrender.com/api/v1/users/me",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  if (!response.ok) {
    localStorage.removeItem("token");
    return null;
  }

  const data = await response.json();
  return data.data.user;
}
