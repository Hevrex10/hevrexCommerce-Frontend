import React from "react";
import Container from "./Container";
import { MdOutlineLocalShipping } from "react-icons/md";
import { FaAward } from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";

export default function Service() {
  return (
    <section>
      <Container>
        <div className="mx-auto mt-20 flex flex-col items-center justify-between gap-6 pb-12 sm:flex-row">
          {" "}
          <ServiceCard
            main="Upgrade your style today and get FREE shipping on all orders! Don't miss out."
            text="Free Shipping"
            icon={<MdOutlineLocalShipping className="text-3xl text-gray-600" />}
          />{" "}
          <ServiceCard
            main="Shop confidently with our Satisfaction Guarantee: Love it or get a refund."
            text="Satisfaction Guarantee"
            icon={<FaAward className="text-3xl text-gray-600" />}
          />{" "}
          <ServiceCard
            main="Your security is our priority. Your payments are secure with us."
            text="Secure Payment"
            icon={<RiSecurePaymentLine className="text-3xl text-gray-600" />}
          />{" "}
        </div>
      </Container>
    </section>
  );
}

import type { ReactNode } from "react";

function ServiceCard({
  main,
  text,
  icon,
}: {
  main: string;
  text: string;
  icon: ReactNode;
}) {
  return (
    <div className="flex w-80 flex-col gap-4 px-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100">
        {icon}
      </div>

      <div className="text-base font-semibold text-gray-800">{text}</div>

      <div className="text-sm font-normal leading-6 text-gray-600">{main}</div>
    </div>
  );
}
