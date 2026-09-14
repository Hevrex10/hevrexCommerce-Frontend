import Summary from "./CartSummary";

export default function OrderSummary() {
  return (
    <div className="flex w-full max-w-[400px] flex-col justify-center gap-8 rounded px-5 py-8 outline outline-gray-200">
      <p className="text-base font-semibold text-gray-900">Order Summary</p>

      <div className="flex flex-col gap-5">
        <Summary text="Subtotal" price={0} />

        <Summary text="Shipping" price="Free" />

        <Summary text="Tax" price={0} />
      </div>

      <div className="h-1 w-full bg-gray-200" />

      <Summary text="Total" price={0} />

      <div className="flex flex-col items-center justify-center gap-6">
        <button
          type="button"
          className="flex w-full max-w-80 items-center justify-center rounded bg-gray-900 px-6 py-2 hover:cursor-pointer">
          <p className="text-sm font-medium leading-6 text-white">Checkout</p>
        </button>

        <p className="text-center text-xs font-medium leading-4 text-gray-900 underline">
          Continue Shopping
        </p>
      </div>
    </div>
  );
}
