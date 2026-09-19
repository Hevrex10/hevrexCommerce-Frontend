import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const jwt = cookieStore.get("jwt");

  if (!jwt) {
    redirect("/Login");
  }

  return <>{children}</>;
}