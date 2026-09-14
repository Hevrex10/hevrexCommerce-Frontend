import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Container from "../components/Container";
import Navcard from "./NavCard";

export default function Form({
  children,
  text,
  header,
  path,
  onSubmit,
}: {
  children: React.ReactNode;
  text: string;
  header: string;
  path: string;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}) {
  const pathname = usePathname();
  return (
    <>
      <Navcard text={path} main={header} />

      <Container>
        <section className="flex items-center justify-center px-4  sm:px-6 lg:px-8">
          <form
            onSubmit={onSubmit}
            className="my-25 flex w-full max-w-80 flex-col items-center justify-center gap-4">
            {pathname === "/Forgot-password" ? (
              <p className="text-xs leading-6 font-medium tracking-wide text-gray-600">
                Please enter the email address associated with your account.
                We&apos;ll promptly send you a link to reset your password.
              </p>
            ) : pathname === "/Reset-password" ? null : (
              <button
                type="button"
                className="flex w-full max-w-80 items-center justify-center gap-2 rounded bg-white px-6 py-3 outline outline-gray-400 hover:cursor-pointer hover:bg-gray-50">
                <img src="/images/Google.png" alt="Google" />

                <span className="text-sm leading-6 font-medium text-gray-600">
                  {text}
                </span>
              </button>
            )}

            <div className="flex w-full max-w-80 items-center justify-center gap-4">
              <div className="h-0 w-full max-w-32 outline outline-offset-[-0.50px] outline-gray-200" />

              {pathname === "/Forgot-password" || "/Forgot-password" ? (
                ""
              ) : (
                <p className="text-xs leading-6 font-medium tracking-wide text-gray-600">
                  OR
                </p>
              )}

              <div className="h-0 w-full max-w-32 outline outline-offset-[-0.50px] outline-gray-200" />
            </div>
            {children}
          </form>
        </section>
      </Container>
    </>
  );
}
