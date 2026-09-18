interface LoginButtonCardProps {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  maxWidth?: string;
  isLoading?: boolean;
}

export default function ButtonCard({
  text,
  onClick,
  type = "submit",
  disabled = false,
  maxWidth = "max-w-80",
  isLoading = false,
}: LoginButtonCardProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`flex w-full ${maxWidth} items-center justify-center rounded bg-gray-900 px-6 py-2 transition-opacity hover:cursor-pointer hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50`}>
      {isLoading ? (
        <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
      ) : (
        <span className="text-sm font-medium leading-6 text-white">{text}</span>
      )}
    </button>
  );
}
