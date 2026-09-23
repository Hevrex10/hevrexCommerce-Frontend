export default function MonthlyOrderLoader() {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
      {/* Orders */}
      <div className="mb-1 h-3 w-14 animate-pulse rounded bg-gray-200" />

      {/* Monthly goal */}
      <div className="mb-4 h-3 w-32 animate-pulse rounded bg-gray-200" />

      {/* Total orders */}
      <div className="mb-4 h-9 w-16 animate-pulse rounded bg-gray-200" />

      {/* Orders left */}
      <div className="mb-2 h-3 w-16 animate-pulse rounded bg-gray-200" />

      {/* Progress bar */}
      <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
        <div className="h-full w-[70%] animate-pulse rounded-full bg-gray-200" />
      </div>
    </div>
  );
}
