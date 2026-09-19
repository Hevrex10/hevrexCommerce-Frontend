interface Login {
  email: string;
  password: string;
}

export default async function loginUser({ email, password }: Login) {
  const response = await fetch(
    "https://rexcommerce.onrender.com/api/v1/users/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ email, password }),
    },
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Login failed");
  }

  return data;
}
