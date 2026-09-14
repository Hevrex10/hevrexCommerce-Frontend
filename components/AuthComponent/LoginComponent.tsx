"use client";

import Link from "next/link";
import InputCard from "../InputCard";
import ButtonCard from "../ButtonCard";
import Form from "../Form";
import LoginUser from "@/Lib/api/AuthApi/login";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginComponent() {
  const [isError, setIsError] = useState("");

  const router = useRouter();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      await LoginUser({ email, password });

      router.push("/");
      form.reset();
    } catch (error) {
      setIsError(error instanceof Error ? error.message : "Login failed");
    }
  }
  return (
    <>
      <Form
        onSubmit={handleSubmit}
        text="Continue with Google"
        header="Login"
        path="Login">
        <InputCard name="email" type="email" text="Email Address" />
        <InputCard name="password" type="password" text="Password" />
        {isError && <p className="text-sm text-red-500">{isError}</p>}
        <div className="flex w-full flex-col gap-4">
          <div className="flex w-full justify-end">
            <p className="text-end  text-xs leading-6 font-medium text-zinc-600">
              Forgot password?
            </p>
          </div>

          <ButtonCard text="Login" />
        </div>

        <Link
          href="/sign-up"
          className="text-sm leading-6 font-normal text-gray-600">
          Don`t have an account? SIgn up
        </Link>
      </Form>
    </>
  );
}
