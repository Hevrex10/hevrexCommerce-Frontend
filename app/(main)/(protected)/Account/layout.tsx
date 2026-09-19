"use client";
import React, { useState } from "react";

import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import Navcard from "@/components/NavCard";
import AccountList from "@/components/AccountList";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <Navcard text="My Account" main="ACCOUNT" />

      <div
        className="block px-10 pb-4 mt-15 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <RxCross1 /> : <RxHamburgerMenu />}
      </div>

      <section className="flex justify-center items-center mb-29 lg:my-29 relative">
        <div className="flex max-w-[1092px] w-full">
          <AccountList isOpen={isOpen} setIsOpen={setIsOpen} />

          <div className="flex flex-col gap-19 max-w-140 w-full overflow-y-auto max-h-[400px] px-2">
            {children}
          </div>
        </div>
      </section>
    </>
  );
}
