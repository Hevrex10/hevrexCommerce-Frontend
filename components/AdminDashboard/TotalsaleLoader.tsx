
export default function TotalsaleLoader() {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
      {/* Title */}
      <div className="mb-1 h-3 w-20 animate-pulse rounded bg-gray-200" />

      {/* Subtitle */}
      <div className="mb-4 h-3 w-16 animate-pulse rounded bg-gray-200" />

      {/* Total amount */}
      <div className="mb-4 h-9 w-32 animate-pulse rounded bg-gray-200" />

      {/* Bar chart skeleton */}
      <div className="flex h-16 w-full items-end justify-between gap-1">
        {[
          35, 55, 45, 70, 50, 65, 40, 75, 55, 85, 45, 65, 50, 70, 40, 60, 75,
          50, 65, 45,
        ].map((height, index) => (
          <div
            key={index}
            className="w-1.5 animate-pulse rounded-t bg-gray-200"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
    </div>
  );
}
