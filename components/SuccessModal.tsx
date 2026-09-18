type SuccessModalProps = {
  onLogin: () => void;
};

export default function SuccessModal({ onLogin }: SuccessModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4">
      <div className="w-full max-w-sm rounded-lg bg-white p-6 text-center shadow-lg">
        <div className="mb-4 flex justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
            <span className="text-xl text-green-600">✓</span>
          </div>
        </div>

        <h2 className="text-xl font-semibold text-gray-900">Successful</h2>

        <p className="mt-2 text-sm text-gray-600">
          Your account has been created successfully.
        </p>

        <button
          onClick={onLogin}
          className="mt-6 w-full rounded bg-gray-900 px-6 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90">
          Login
        </button>
      </div>
    </div>
  );
}
