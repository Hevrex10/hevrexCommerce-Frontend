import { SignUp } from "../../../Type/Type";
export default async function signup({
  name,
  email,
  password,
  passwordConfirm,
}: SignUp) {
  const response = await fetch(
    "https://rexcommerce.onrender.com/api/v1/users/signup",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        passwordConfirm,
      }),
    },
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Signup failed");
  }

  return data;
}
