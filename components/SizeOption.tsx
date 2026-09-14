interface SizeOptionProps {
  size: string;
  onClick: () => void;
  selected: boolean;
}

export default function SizeOption({
  size,
  onClick,
  selected,
}: SizeOptionProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex h-10 min-w-10 items-center justify-center overflow-hidden rounded outline ${
        selected ? "outline-gray-900" : "outline-gray-400"
      }`}
    >
      <span className="text-center text-xs font-medium capitalize leading-6 text-gray-900">
        {size}
      </span>
    </button>
  );
}