"use client";

import { useRouter } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="relative w-[90%] max-w-md rounded-2xl border border-gray-200 bg-white/90 p-8 text-center shadow-xl">
        <button
          onClick={() => router.back()}
          className="absolute left-3 top-3 flex items-center gap-1 text-xl text-gray-600 hover:text-gray-800">
          <FiArrowLeft />
        </button>

        <h1 className="mb-3 text-3xl font-bold text-gray-800">Oops!</h1>

        <p className="mb-4 text-gray-600">Something went wrong.</p>

        <div className="mb-6 text-sm text-gray-500">
          {error?.message ? (
            <span>{error.message}</span>
          ) : (
            <span>An unexpected error occurred.</span>
          )}
        </div>

        <button
          onClick={() => reset()}
          className="inline-block rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700">
          Try Again
        </button>
      </div>
    </div>
  );
}
