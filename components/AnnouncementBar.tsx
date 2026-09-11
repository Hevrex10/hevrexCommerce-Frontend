import React from "react";

export default function AnnouncementBar() {
  return (
    <div className="flex h-10 items-center justify-center bg-gray-900">
      <div className="flex flex-col gap-1 text-center sm:flex-row sm:gap-4 sm:text-left">
        <p className="font-['Inter'] text-sm font-normal text-white">
          Get 25% OFF on your first order.
        </p>

        <p className="font-['Inter'] text-sm font-medium text-white">
          Order Now
        </p>
      </div>
    </div>
  );
}
