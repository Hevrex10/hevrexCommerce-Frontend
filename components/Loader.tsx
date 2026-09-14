"use client";

import React, { useEffect } from "react";

export default function Loader() {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="flex flex-col items-center">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-gray-200 border-b-blue-500 border-t-blue-500" />

        <p className="mt-4 font-['Inter'] text-lg font-semibold text-blue-200">
          Loading...
        </p>
      </div>
    </div>
  );
}