import { FaAngleDown } from "react-icons/fa";
import { Product } from "../Type/Type";
import ReviewCard from "./ReviewCard";

export default function Review({ product }: { product: Product }) {
  const reviews = product.reviews ?? [];
  return (
    <div className="flex w-full max-w-3xl flex-col gap-6">
      {/* Review summary */}
      <div className="border-b border-zinc-300 pb-6">
        <div className="flex gap-3 pb-6">
          <span className="text-3xl font-bold leading-14 text-gray-900">
            4.2
          </span>

          <span className="flex items-center justify-center text-sm text-zinc-500">
            — {reviews.length} Reviews
          </span>
        </div>

        <button
          type="button"
          // onClick={() => setSelected("write review")}
          className="rounded border border-gray-900 px-6 py-3 text-sm font-medium">
          Write a review
        </button>

        <div className="flex justify-end">
          <button
            type="button"
            className="flex items-center gap-2 text-sm text-gray-600">
            <span>Sort By</span>
            <FaAngleDown />
          </button>
        </div>
      </div>

      {/* Reviews */}
      <div className="flex flex-col gap-10">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            name={review.user.name}
            date={review.createdAt}
            text={review.review}
            rating={review.rating}
          />
        ))}
      </div>

      {/* Load more */}
      <button
        type="button"
        className="transform self-center rounded border border-gray-400 px-6 py-3 text-sm font-medium text-gray-600 transition duration-300 hover:scale-105">
        Load more reviews
      </button>
    </div>
  );
}
