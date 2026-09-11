"use client";

import Newsletter from "@/components/Newsletter";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";

const newsletterHiddenPaths = [
  "/cart",
  "/login",
  "/sign-up",
  "/forgot-password",
  "/reset-password",
  "/cart/shipping",
  "/order-success",
  "/order-error",
];
const footerHiddenPaths = [
  "/admin",
  "/admin/products",
  "/admin/orders",
  "/admin/customers",
  "/admin/reviews",
  "/admin/settings",
  "/admin/dashboard",
  "/admin-login",
  "/admin/add-products",
];

export default function Footer() {
  const pathname = usePathname();
  const hideNewsletter = newsletterHiddenPaths.includes(pathname);
  const hideFooter =
    footerHiddenPaths.includes(pathname) ||
    pathname.startsWith("/admin/edit-product/");
  if (hideFooter) {
    return null;
  }
  return (
    <footer>
      <section className="w-full bg-neutral-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {!hideNewsletter && <Newsletter />}
          <div className="my-3 flex flex-col justify-between gap-10 px-4 py-10 md:my-14 md:px-8 lg:flex-row">
            <div className="flex w-full flex-col gap-8 lg:w-1/4">
              <Link href="/" className="flex items-center gap-4">
                <Image
                  src="/images/Logomark.png"
                  alt="Ecommerce logo"
                  width={32}
                  height={32}
                />
                <span className="font-['Manrope'] text-xl font-extrabold capitalize leading-6 text-gray-900">
                  ecommerce
                </span>
              </Link>
              <p className="w-full font-['Inter'] text-sm leading-6 text-gray-600 lg:w-64">
                DevCut is a YouTube channel for practical project-based
                learning.
              </p>
              {/* Social Links */}
              <div className="flex items-center gap-5">
                <Link
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub">
                  <FaGithub className="text-2xl text-gray-600 transition hover:text-gray-900" />
                </Link>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram">
                  <FaInstagram className="text-2xl text-gray-600 transition hover:text-gray-900" />
                </Link>
                <Link
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube">
                  <BsYoutube className="text-2xl text-gray-600 transition hover:text-gray-900" />
                </Link>
              </div>
            </div>
            {/* Footer Navigation */}
            <div className="flex w-full flex-col gap-16 sm:flex-row lg:w-auto">
              <FooterCard
                title="SUPPORT"
                links={[
                  { label: "FAQ", href: "/faq" },
                  { label: "Terms of use", href: "/terms" },
                  { label: "Privacy Policy", href: "/privacy" },
                ]}
              />
              <FooterCard
                title="COMPANY"
                links={[
                  { label: "About Us", href: "/about" },
                  { label: "Careers", href: "/careers" },
                  { label: "Contact", href: "/contact" },
                ]}
              />
              <FooterCard
                title="SHOP"
                links={[
                  { label: "My Account", href: "/account" },
                  { label: "Checkout", href: "/checkout" },
                  { label: "Cart", href: "/cart" },
                ]}
              />
            </div>
            {/* Payment Methods */}
            <div className="flex w-full flex-col items-start justify-start gap-10 lg:w-1/4 lg:items-end">
              <p className="font-['Inter'] text-sm font-medium leading-6 text-gray-500">
                ACCEPTED PAYMENTS
              </p>
              <div className="flex gap-4 opacity-80">
                <Image
                  src="/images/Mastercard.png"
                  alt="Mastercard"
                  width={50}
                  height={32}
                  className="grayscale"
                />
                <Image
                  src="/images/Amex.png"
                  alt="American Express"
                  width={50}
                  height={32}
                  className="grayscale"
                />
                <Image
                  src="/images/Visa.png"
                  alt="Visa"
                  width={50}
                  height={32}
                  className="grayscale"
                />
              </div>
            </div>
          </div>
          {/* Copyright */}
          <div className="mx-auto w-full max-w-[1116px] border-t border-neutral-200 py-7 text-center">
            <p className="font-['Inter'] text-sm leading-6 text-gray-600">
              © 2025 ADEAGBO. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
}

type FooterLink = { label: string; href: string };
type FooterCardProps = { title: string; links: FooterLink[] };

function FooterCard({ title, links }: FooterCardProps) {
  return (
    <div className="flex flex-col items-start gap-4 sm:gap-6">
      <p className="pb-2 font-['Inter'] text-sm font-medium text-gray-500">
        {" "}
        {title}{" "}
      </p>
      <nav>
        <ul className="flex flex-col gap-4">
          {" "}
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-['Inter'] text-sm font-medium leading-6 text-gray-600 transition hover:text-gray-900">
                {link.label}{" "}
              </Link>{" "}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
