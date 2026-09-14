import { ChangeEvent } from "react";

interface InputCardProps {
  text: string;
  name?: string;
  type?: string;
  accept?: string;
  placeholder?: string;
  value?: string;
  required?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function InputCard({
  text,
  name,
  type = "text",
  accept,
  placeholder,
  value,
  required,
  onChange,
}: InputCardProps) {
  return (
    <div className="flex w-full max-w-full flex-col gap-1">
      <p className="justify-start text-sm font-medium leading-6 text-zinc-600">
        {text}
      </p>
      <input
        type={type}
        name={name}
        accept={accept}
        placeholder={placeholder}
        value={value}
        required={required}
        onChange={onChange}
        className="w-full rounded-md px-5 py-2 text-sm font-medium text-gray-500 outline outline-gray-200"
      />
    </div>
  );
}