import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  return (
    <section className="w-full">
      <nav className="flex justify-center bg-white shadow">
        <div className="relative mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Image
              src="/images/Logomark.png"
              alt="REXcommerce logo"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <Link
              href="/"
              className="font-['Manrope'] text-[15px] font-extrabold capitalize text-gray-900 lg:text-[20px]">
              REXcommerce
            </Link>
          </div>
          <div className="hidden items-center gap-8 font-['Inter'] text-sm font-medium text-gray-600 lg:flex">
            <Link href="/" className="hover:text-gray-900">
              Home
            </Link>
            <div className="flex cursor-pointer items-center gap-1 hover:text-gray-900">
              <Link href="/products"> Categories </Link>
             <Image
                src="/images/ChevronDown.png"
                alt="Caret"
                width={20}
                height={20}
              />
            </div>
            <Link href="/about" className="hover:text-gray-900">
              About
            </Link>
            <Link href="/contact" className="hover:text-gray-900">
              Contact
            </Link>
          </div>
          <div className="relative flex w-full max-w-90 gap-4">
            <input
              type="text"
              placeholder="Search products"
              className="w-full rounded-md px-10 py-2.5 font-['Inter'] text-sm font-medium text-gray-500 outline outline-gray-200"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xl text-gray-600">
              <Image
                src="/images/Search.png"
                alt="Search"
                width={18}
                height={18}
              />
            </span>
            <div className="flex gap-5 items-center">
              <button className="flex h-6 w-6 items-center justify-center relative">
                <Image
                  src="/images/Icon.png"
                  alt="Cart"
                  width={20}
                  height={20}
                  className="h-6 w-6"
                />
                <div className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-gray-500">
                  <p className="font-['Inter'] text-xs font-bold text-black">
                    0
                  </p>
                </div>
              </button>
              <button className="flex h-6 w-6 items-center justify-center">
                <Image
                  src="/images/User.png"
                  alt="Account"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
}

//  <button className="flex items-center lg:hidden">
//             <span className="text-3xl text-gray-600"> ☰ </span>
//           </button>
