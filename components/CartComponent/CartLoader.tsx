"use client";

export default function CartLoader() {
  return (
    <div className="flex w-full flex-col gap-5">
      {/* Cart item 1 */}
      <div className="flex w-full items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          {/* Product image */}
          <div className="relative h-20 w-20 overflow-hidden rounded bg-gray-200">
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
          </div>

          {/* Product information */}
          <div className="flex flex-col gap-2">
            <div className="relative h-4 w-32 overflow-hidden rounded bg-gray-200">
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
            </div>

            <div className="relative h-3 w-24 overflow-hidden rounded bg-gray-200">
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
            </div>

            <div className="relative h-3 w-20 overflow-hidden rounded bg-gray-200">
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
            </div>
          </div>
        </div>

        {/* Quantity */}
        <div className="relative h-9 w-24 overflow-hidden rounded border border-gray-200 bg-gray-100">
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
        </div>
      </div>

      {/* Cart item 2 */}
      <div className="flex w-full items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="relative h-20 w-20 overflow-hidden rounded bg-gray-200">
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
          </div>

          <div className="flex flex-col gap-2">
            <div className="relative h-4 w-32 overflow-hidden rounded bg-gray-200">
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
            </div>

            <div className="relative h-3 w-24 overflow-hidden rounded bg-gray-200">
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
            </div>

            <div className="relative h-3 w-20 overflow-hidden rounded bg-gray-200">
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
            </div>
          </div>
        </div>

        <div className="relative h-9 w-24 overflow-hidden rounded border border-gray-200 bg-gray-100">
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
        </div>
      </div>

      {/* Cart item 3 */}
      <div className="flex w-full items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="relative h-20 w-20 overflow-hidden rounded bg-gray-200">
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
          </div>

          <div className="flex flex-col gap-2">
            <div className="relative h-4 w-32 overflow-hidden rounded bg-gray-200">
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
            </div>

            <div className="relative h-3 w-24 overflow-hidden rounded bg-gray-200">
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
            </div>

            <div className="relative h-3 w-20 overflow-hidden rounded bg-gray-200">
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
            </div>
          </div>
        </div>

        <div className="relative h-9 w-24 overflow-hidden rounded border border-gray-200 bg-gray-100">
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
        </div>
      </div>
    </div>
  );
}