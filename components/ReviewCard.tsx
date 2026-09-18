import { FaRegStar, FaStar } from "react-icons/fa";

interface ReviewCardProps {
  name: string;
  date: string;
  text: string;
  rating: number;
}

export default function ReviewCard({
  name,
  date,
  text,
  rating,
}: ReviewCardProps) {
  return (
    <div className="flex gap-4 border-b border-gray-200 py-8">
      {/* AVATAR */}
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-indigo-50 font-medium text-blue-500">
        {name.slice(0, 2).toUpperCase()}
      </div>

      {/* REVIEW CONTENT */}
      <div className="min-w-0 flex-1">
        {/* NAME + STARS */}
        <div className="flex items-start justify-between gap-4">
          <p className="text-sm font-medium text-gray-900">{name}</p>

          <div className="flex shrink-0 items-center gap-1 text-gray-600">
            {[...Array(5)].map((_, index) =>
              index < rating ? (
                <FaStar key={index} size={14} />
              ) : (
                <FaRegStar key={index} size={14} className="text-gray-300" />
              ),
            )}
          </div>
        </div>

        {/* DATE */}
        <p className="mt-1 text-xs font-medium uppercase tracking-wide text-gray-500">
          {date}
        </p>

        {/* COMMENT */}
        <p className="mt-4 text-sm leading-6 text-gray-600">{text}</p>
      </div>
    </div>
  );
}
