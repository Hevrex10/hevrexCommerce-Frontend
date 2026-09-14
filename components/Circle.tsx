"use client";

interface CircleProps {
  bg: string;
  onClick: () => void;
  isActive: boolean;
}

export default function Circle({ bg, onClick, isActive }: CircleProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex h-8 w-8 items-center justify-center rounded-full ${
        isActive ? "outline outline-1 outline-gray-900" : ""
      }`}>
      <span className="h-6 w-6 rounded-full" style={{ backgroundColor: bg }} />
    </button>
  );
}
