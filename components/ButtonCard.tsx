interface LoginButtonCardProps {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function ButtonCard({
  text,
  onClick,
  type = "submit",
  disabled = false,
}: LoginButtonCardProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="flex w-full max-w-80 items-center justify-center rounded bg-gray-900 px-6 py-2 transition-opacity hover:cursor-pointer hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50">
      <span className="text-sm font-medium leading-6 text-white">{text}</span>
    </button>
  );
}
