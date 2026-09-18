"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <section className="w-full">
      <nav className="w-full bg-white shadow">
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* LOGO */}
          <div className="flex shrink-0 items-center gap-3">
            <Image
              src="/images/Logomark.png"
              alt="REXcommerce logo"
              width={40}
              height={40}
              className="h-10 w-10"
            />

            <Link
              href="/Home"
              className="font-['Manrope'] text-[15px] font-extrabold text-gray-900 sm:text-[17px] lg:text-[20px]"
            >
              REXcommerce
            </Link>
          </div>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-8 font-['Inter'] text-sm font-medium text-gray-600 lg:flex">
            <Link href="/Home" className="transition hover:text-gray-900">
              Home
            </Link>

            <Link
              href="/Products"
              className="flex items-center gap-1 transition hover:text-gray-900"
            >
              Categories

              <Image
                src="/images/ChevronDown.png"
                alt="Caret"
                width={20}
                height={20}
              />
            </Link>

            <Link href="/About" className="transition hover:text-gray-900">
              About
            </Link>

            <Link href="/Contact" className="transition hover:text-gray-900">
              Contact
            </Link>
          </div>

          {/* DESKTOP SEARCH + ICONS */}
          <div className="hidden w-full max-w-90 items-center gap-4 lg:flex">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search products"
                className="w-full rounded-md px-10 py-2.5 font-['Inter'] text-sm font-medium text-gray-500 outline outline-gray-200"
              />

              <span className="absolute left-3 top-1/2 -translate-y-1/2">
                <Image
                  src="/images/Search.png"
                  alt="Search"
                  width={18}
                  height={18}
                />
              </span>
            </div>

            <div className="flex shrink-0 items-center gap-5">
              <Link
                href="/Cart"
                className="flex h-6 w-6 items-center justify-center"
              >
                <Image
                  src="/images/Icon.png"
                  alt="Cart"
                  width={20}
                  height={20}
                  className="h-6 w-6"
                />
              </Link>

              <Link
                href="/Account/Order"
                className="flex h-6 w-6 items-center justify-center"
              >
                <Image
                  src="/images/User.png"
                  alt="Account"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="z-50 flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-gray-200 bg-white text-gray-900 lg:hidden"
          >
            <motion.div
              animate={{
                rotate: isOpen ? 90 : 0,
              }}
              transition={{
                duration: 0.25,
                ease: "easeInOut",
              }}
            >
              {isOpen ? (
                <RxCross1 className="text-xl" />
              ) : (
                <RxHamburgerMenu className="text-2xl" />
              )}
            </motion.div>
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: "auto",
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="overflow-hidden border-t border-gray-200 lg:hidden"
            >
              <motion.div
                initial={{
                  y: -20,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                exit={{
                  y: -20,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="px-5 pb-6 pt-5"
              >

                {/* SEARCH */}
                <div className="relative mb-5">
                  <input
                    type="text"
                    placeholder="Search products"
                    className="w-full rounded-md px-10 py-3 font-['Inter'] text-sm text-gray-600 outline outline-gray-200"
                  />

                  <span className="absolute left-3 top-1/2 -translate-y-1/2">
                    <Image
                      src="/images/Search.png"
                      alt="Search"
                      width={18}
                      height={18}
                    />
                  </span>
                </div>

                {/* LINKS */}
                <div className="flex flex-col">
                  <Link
                    href="/Home"
                    onClick={closeMenu}
                    className="border-b border-gray-100 px-2 py-4 font-['Inter'] text-sm font-medium text-gray-700 transition hover:bg-gray-50"
                  >
                    Home
                  </Link>

                  <Link
                    href="/Products"
                    onClick={closeMenu}
                    className="border-b border-gray-100 px-2 py-4 font-['Inter'] text-sm font-medium text-gray-700 transition hover:bg-gray-50"
                  >
                    Categories
                  </Link>

                  <Link
                    href="/About"
                    onClick={closeMenu}
                    className="border-b border-gray-100 px-2 py-4 font-['Inter'] text-sm font-medium text-gray-700 transition hover:bg-gray-50"
                  >
                    About
                  </Link>

                  <Link
                    href="/Contact"
                    onClick={closeMenu}
                    className="border-b border-gray-100 px-2 py-4 font-['Inter'] text-sm font-medium text-gray-700 transition hover:bg-gray-50"
                  >
                    Contact
                  </Link>
                </div>

                {/* CART + ACCOUNT */}
                <div className="mt-5 flex gap-6">
                  <Link
                    href="/Cart"
                    onClick={closeMenu}
                    className="flex items-center gap-2 text-sm font-medium text-gray-700"
                  >
                    <Image
                      src="/images/Icon.png"
                      alt="Cart"
                      width={20}
                      height={20}
                    />
                    Cart
                  </Link>

                  <Link
                    href="/Account/Order"
                    onClick={closeMenu}
                    className="flex items-center gap-2 text-sm font-medium text-gray-700"
                  >
                    <Image
                      src="/images/User.png"
                      alt="Account"
                      width={20}
                      height={20}
                    />
                    Account
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </section>
  );
}
