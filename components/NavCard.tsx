import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

interface NavcardProps {
  text: string;
  main: string;
  bg?: string;
}

export default function Navcard({
  text,
  main,
  bg = "bg-neutral-100",
}: NavcardProps) {
  return (
    <section className={`flex w-full items-center justify-center ${bg}`}>
      <div className="my-12 flex w-full max-w-[1116px] flex-col items-start justify-center gap-2 px-3">
        <h1 className="text-2xl font-bold text-gray-900">{main}</h1>

        <div className="flex items-center gap-1">
          <Link
            href="/Home"
            className="text-sm font-medium leading-6 text-gray-600 hover:text-gray-900">
            Ecommerce
          </Link>

          <FaAngleRight className="text-gray-600" />

          <p className="text-sm font-medium leading-6 text-gray-900">{text}</p>
        </div>
      </div>
    </section>
  );
}
