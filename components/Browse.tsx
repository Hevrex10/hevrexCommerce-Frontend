import Image from "next/image";
import Link from "next/link";
import Container from "./Container";

export default function Browse() {
  return (
    <Container>
      <section>
        <div className="flex flex-col-reverse items-center justify-between lg:flex-row">
          <div className="flex flex-col items-center justify-center gap-5 lg:items-start">
            <p className="text-center text-2xl font-bold text-gray-900 lg:text-left">
              Browse Our Fashion Paradise!
            </p>

            <p className="text-center text-sm leading-6 text-gray-600 lg:text-left">
              Step into a world of style and explore our diverse collection of
              <br className="hidden sm:block" />
              clothing categories.
            </p>

            <Link
              href="/products"
              className="rounded bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800">
              Start Browsing
            </Link>
          </div>

          <div className="flex h-80 w-56 items-center">
            <Image
              src="/images/CategoryImage.png"
              alt="Fashion skirt"
              width={224}
              height={320}
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </section>
    </Container>
  );
}
