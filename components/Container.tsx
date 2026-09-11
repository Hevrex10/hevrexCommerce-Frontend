export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-4">
      {children}
    </div>
  );
}