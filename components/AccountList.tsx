import Link from "next/link";
import { usePathname } from "next/navigation";
import { GrCart } from "react-icons/gr";
import { IoIosLogOut } from "react-icons/io";
import { IoHeartOutline } from "react-icons/io5";
import { PiTruckBold } from "react-icons/pi";
import { FiKey } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import logout from "@/Lib/api/AuthApi/logout/route";
import { useRouter } from "next/navigation";
export default function AccountList({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const pathname = usePathname();
  const router = useRouter();
  async function handleLogout() {
    try {
      await logout();
      router.push("/Login");
    } catch (error) {
      throw error;
    }
  }
  return (
    <>
      <div
        className={`
    flex flex-col gap-5 bg-white px-6 py-8
    w-full
    absolute left-0 top-0
    z-40
    ${isOpen ? "flex" : "hidden"}

    lg:static
    lg:z-auto
    lg:w-68
    lg:flex
  `}>
        <Link
          href="/Account/Order"
          onClick={() => setIsOpen(false)}
          className={`flex items-center gap-3 p-3 ${
            pathname === "/Account/Order" ? "bg-neutral-100" : ""
          }`}>
          <GrCart />
          <span>Orders</span>
        </Link>

        <Link
          href="/Account/Address"
          onClick={() => setIsOpen(false)}
          className={`flex items-center gap-3 p-3 ${
            pathname === "/Account/Address" ? "bg-neutral-100" : ""
          }`}>
          <PiTruckBold />
          <span>Address</span>
        </Link>

        <Link
          href="/Account/Password"
          onClick={() => setIsOpen(false)}
          className={`flex items-center gap-3 p-3 ${
            pathname === "/Account/Password" ? "bg-neutral-100" : ""
          }`}>
          <FiKey />
          <span>Password</span>
        </Link>

        <Link
          href="/Account/User"
          onClick={() => setIsOpen(false)}
          className={`flex items-center gap-3 p-3 ${
            pathname === "/Account/User" ? "bg-neutral-100" : ""
          }`}>
          <FaRegUser />
          <span>User</span>
        </Link>

        <button
          onClick={handleLogout}
          type="button"
          className="flex items-center gap-3 p-3 text-left">
          <IoIosLogOut />
          <span>Logout</span>
        </button>
      </div>
    </>
  );
}
