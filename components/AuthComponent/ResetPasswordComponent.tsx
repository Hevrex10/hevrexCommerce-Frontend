"use client";
import InputCard from "../InputCard";
import ButtonCard from "../ButtonCard";
import Form from "@/components/Form";
import { useState } from "react";

export default function ResetPasswordComponent() {
  const [isError, setIsError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const password = formData.get("password") as string;
    const passwordConfirm = formData.get("passwordConfirm") as string;

    // try {
    //   await loginUser({ email, password });
    //   form.reset();
    // } catch (error) {
    //   setIsError(error instanceof Error ? error.message : "Login failed");
    //   console.log(error);
    // }
  }
  return (
    <Form
      onSubmit={handleSubmit}
      text="Continue with Google"
      header="Reset Password"
      path="Reset Password">
      <InputCard name="password" type="email" text="Password" />
      <InputCard name="passwordConfirm" type="email" text="Confirm Password" />
      {isError && <p className="text-sm text-red-500">{isError}</p>}

      <div className="flex w-full flex-col gap-4 mt-3">
        <ButtonCard text="Reset Password" />
      </div>
    </Form>
  );
}
