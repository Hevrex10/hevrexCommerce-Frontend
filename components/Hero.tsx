import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-neutral-100 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-[1096px] flex-col-reverse items-center justify-between gap-10 py-10 sm:gap-16 md:flex-row md:gap-7">
        {/* Text */}
        <div className="flex justify-center md:justify-start">
          <div className="flex flex-col items-center gap-6 text-center sm:gap-7 md:items-start md:gap-9 md:text-left">
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-semibold text-gray-800">
                Fresh Arrivals Online
              </h1>

              <p className="text-sm font-normal text-zinc-600">
                Discover Our Newest Collection Today.
              </p>
            </div>

            <Link
              href="/products"
              className="rounded-md bg-gray-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800">
              View Collection
            </Link>
          </div>
        </div>

        <div className="relative mb-6 flex items-center justify-center md:mb-0 md:justify-end">
          {/* Circle */}
          <div className="h-60 w-60 rounded-full bg-gray-200 opacity-60 sm:h-72 sm:w-72 md:h-80 md:w-80" />

          <Image
            src="/images/Burst-pucker.png"
            alt=""
            width={250}
            height={250}
            className="absolute -left-2 top-6 grayscale sm:w-48 md:w-auto"
          />

          <Image
            src="/images/Hero-Image.png"
            alt="Featured product"
            width={256}
            height={384}
            className="absolute h-72 w-52 object-contain sm:h-96 sm:w-64 md:w-64"
            priority
          />
        </div>
      </div>
    </section>
  );
}
