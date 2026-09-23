"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import InputCard from "../InputCard";
import ButtonCard from "../ButtonCard";
import loginUser from "@/app/api/AuthApi/loginUser";
import { useState } from "react";

export default function AdminLogin() {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      setIsLoading(true);
      const result = await loginUser({ email, password });
      localStorage.setItem("token", result.token);
      const user = result.data;

      if (user.role !== "admin") {
        throw new Error("You do not have permission to access the admin area.");
      }
      router.push("/Admin/dashboard");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#f8fafc]">
      <div className="w-full max-w-[420px] bg-white rounded-2xl shadow-sm border border-gray-100 px-8 py-10 mx-4">
        <div className="flex justify-center mb-10">
          <Image
            src="/image.png" // ← replace with your real logo path
            alt="Admin Logo"
            width={140}
            height={40}
            className="object-contain"
            priority
          />
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <InputCard name="email" type="email" text="Email" />
          <InputCard name="password" type="password" text="Password" />
          <div className="mt-10">
            <ButtonCard
              text="Login"
              type="submit"
              maxWidth="max-w-full"
              isLoading={isLoading}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
