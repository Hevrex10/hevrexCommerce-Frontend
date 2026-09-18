"use client";

import InputCard from "../../components/InputCard";
import Link from "next/link";
import ButtonCard from "@/components/ButtonCard";
import Form from "@/components/Form";
import signup from "../../Lib/api/AuthApi/signup";
import { useState } from "react";
import { useRouter } from "next/navigation";
import LoginUser from "@/Lib/api/AuthApi/login";

export default function SignUpComponent() {
  const [isError, setIsError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const passwordConfirm = formData.get("passwordConfirm") as string;

    try {
      await signup({ name, email, password, passwordConfirm });
      await LoginUser({ email, password });
      router.push("/Home");
      form.reset();
    } catch (error) {
      setIsError(error instanceof Error ? error.message : "Error signing up");
    } finally {
      setIsLoading(false);
    }
    form.reset();
  }
  return (
    <>
      <Form
        onSubmit={handleSubmit}
        text="Sign up"
        header="Sign up"
        path="Sign up">
        <InputCard name="name" type="name" text="Name" />
        <InputCard name="email" type="email" text="Email Address" />
        <InputCard name="password" type="password" text="Password" />
        <InputCard
          name="passwordConfirm"
          type="password"
          text="Confirm Password"
        />
        <div className="flex w-full flex-col gap-4">
          <div className="flex w-full justify-end">
            <p className=" text-xs leading-6 font-medium text-zinc-600">
              By creating an account you agree with our Terms of Service,
              Privacy Policy,
            </p>
          </div>

          <ButtonCard text="Sign up" isLoading={isLoading} />
        </div>
        <Link
          href="/Login"
          className="text-sm leading-6 font-normal text-gray-600">
          Already have an account ? Log in
        </Link>
        {isError && <p className="text-sm text-red-500">{isError}</p>}
      </Form>
    </>
  );
}
