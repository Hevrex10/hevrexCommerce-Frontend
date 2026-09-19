"use client";

import InputCard from "../InputCard";
import ButtonCard from "../ButtonCard";
import Form from "@/components/Form";
import forgotPassword from "@/Lib/api/AuthApi/forgorPassword/route";
import { useState, useEffect } from "react";
import Loader from "../Loader";

export default function ForgotPasswordComponent() {
  const [isError, setIsError] = useState("");
  const [isSuccess, setIsSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isError) {
      const timer = setTimeout(() => {
        setIsError("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isError]);

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        setIsSuccess("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const email = formData.get("email") as string;
    console.log("link sent to email");
    try {
      setIsError("");
      setIsSuccess("");

      await forgotPassword(email);

      form.reset();
      setIsSuccess("Reset link sent successfully. Please check your email.");
    } catch (error) {
      setIsError(error instanceof Error ? error.message : "Failed to process");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Form
        onSubmit={handleSubmit}
        text="Continue with Google"
        header="Forgot Password"
        path="Forgot Password">
        <InputCard name="email" type="email" text="Email" />

        {isError && <p className="text-sm text-red-500">{isError}</p>}

        <div className="flex w-full flex-col gap-4">
          <ButtonCard text="Send reset Link" isLoading={isLoading} />
        </div>

        {isSuccess && <p className="text-sm text-green-600">{isSuccess}</p>}
      </Form>
    </>
  );
}
