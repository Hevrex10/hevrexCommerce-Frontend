// import Button from '../component/Button'
import Navcard from "@/components/NavCard";
import Link from "next/link";

export default function OrderCard({
  heading,
  subHeading,
  image,
  result,
  condition,
  bg,
  to,
  text
}: {
  heading: string;
  subHeading: string;
  image: string;
  result: string;
  condition: string;
  bg: string;
  to: string;
  text:string
}) {
  return (
    <>
      <Navcard text={heading} main={subHeading} bg={bg} />
      <div className="flex items-center justify-center my-30">
        <div className="flex flex-col gap-7 items-center">
          <img src={image} alt="success box" />
          <p className="text-center text-gray-900 text-2xl font-bold font-['Inter']">
            {result}
          </p>
          <p className="max-w-96 w-full text-center  text-gray-600 text-sm font-normal font-['Inter'] leading-6">
            {condition}
          </p>
          <Link
            href={to}
            className=" flex w-full items-center max-w-[10rem] justify-center gap-2 rounded bg-gray-900 px-2 py-2 font-['Inter'] text-xs font-medium text-white hover:cursor-pointer sm:px-3 sm:py-3 sm:text-sm">
            {text}
          </Link>
        </div>
      </div>
    </>
  );
}
