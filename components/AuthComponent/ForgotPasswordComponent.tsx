"use client";
import InputCard from "../InputCard";
import ButtonCard from "../ButtonCard";
import Form from "@/components/Form";
import forgotPassword from "@/Lib/api/AuthApi/forgotPassword";
import { useState, useEffect } from "react";

export default function ForgotPasswordComponent() {
  const [isError, setIsError] = useState("");
  useEffect(() => {
    if (isError) {
      const timer = setTimeout(() => {
        setIsError("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isError]);
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    console.log("clicked");
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const email = formData.get("email") as string;

    try {
      await forgotPassword(email);
      form.reset();
    } catch (error) {
      console.log(error);
      setIsError(error instanceof Error ? error.message : "Failed to process");
    }
  }

  return (
    <Form
      onSubmit={handleSubmit}
      text="Continue with Google"
      header="Forgot Password"
      path="Forgot Password">
      <InputCard name="email" type="email" text="Email" />
      {isError && <p className="text-sm text-red-500">{isError}</p>}

      <div className="flex w-full flex-col gap-4">
        <div className="flex w-full justify-end">
          <p className="text-end  text-xs leading-6 font-medium text-zinc-600">
            Forgot password?
          </p>
        </div>

        <ButtonCard text="Send reset Link" />
      </div>
    </Form>
  );
}
