"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import protect from "@/app/api/Protect/protect";
import Loader from "@/components/Loader";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    async function checkAuth() {
      const user = await protect();

      if (!user) {
        router.replace("/Login");
        return;
      }

      setIsChecking(false);
    }

    checkAuth();
  }, [router]);

  if (isChecking) {
    return <Loader />;
  }

  return <>{children}</>;
}