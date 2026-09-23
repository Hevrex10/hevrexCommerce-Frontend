import React from "react";

export default function BestSelling() {
  return (
    <>
      <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
        <div className="mb-1 text-sm font-semibold text-gray-800">
          Best Selling
        </div>
        <div className="mb-4 text-xs text-gray-400">THIS MONTH</div>

        <div className="mb-4 flex items-baseline gap-2">
          <span className="text-2xl font-semibold text-gray-900">$2,400</span>
          <span className="text-sm text-gray-500">— Total Sales</span>
        </div>

        <div className="mb-6 space-y-2">
          <div className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs text-gray-700">
            Classic Monochrome Tees — $940 Sales
          </div>
          <div className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs text-gray-700">
            Monochromatic Wardrobe — $790 Sales
          </div>
          <div className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs text-gray-700">
            Essential Neutrals — $740 Sales
          </div>
        </div>

        <div className="flex justify-center">
          <svg
            width="120"
            height="120"
            viewBox="0 0 36 36"
            className="-rotate-90">
            <circle
              cx="18"
              cy="18"
              r="15.5"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="3"
            />
            <circle
              cx="18"
              cy="18"
              r="15.5"
              fill="none"
              stroke="#60a5fa"
              strokeWidth="3"
              strokeDasharray="70 30"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
