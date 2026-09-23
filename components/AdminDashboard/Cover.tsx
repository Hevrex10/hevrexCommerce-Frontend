import React from "react";

export default function Cover({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-full bg-gray-50 p-6">
      <div className="mb-6 flex items-center gap-2 text-sm text-gray-500">
        <span>Admin</span>
        <span>›</span>
        <span className="font-medium text-gray-800">Dashboard</span>
      </div>
      {children}
    </div>
  );
}
