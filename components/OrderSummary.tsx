import Summary from "./CartComponent/CartSummary";
import Link from "next/link";
export default function OrderSummary({
  subTotal,
  tax,
  total,
  showShipping,
  handleCheckout,
  handlePlaceOrder,
  isOrdering,
  cartLength,
}: {
  subTotal: number;
  tax: number;
  total: number;
  showShipping: boolean;
  handleCheckout: () => void;
  handlePlaceOrder: () => void;
  isOrdering: boolean;
  cartLength: boolean;
}) {
  return (
    <div className="flex w-full max-w-[400px] flex-col justify-center gap-8 rounded px-5 py-8 outline outline-gray-200">
      <p className="text-base font-semibold text-gray-900">Order Summary</p>

      <div className="flex flex-col gap-5">
        <Summary text="Subtotal" price={subTotal} />

        <Summary text="Shipping" price="Free" />

        <Summary text="Tax" price={tax} />
      </div>

      <div className="h-1 w-full bg-gray-200" />

      <Summary text="Total" price={total} />

      <div className="flex flex-col items-center justify-center gap-6">
        {!showShipping ? (
          <button
            disabled={cartLength}
            onClick={handleCheckout}
            type="button"
            className={`flex w-full max-w-80 cursor-pointer items-center justify-center rounded ${cartLength ? "bg-gray-400" : "bg-gray-900 "} px-6 py-2`}>
            <p className="text-sm font-medium leading-6 text-white">
              {cartLength ? "Add to cart" : "Checkout"}
            </p>
          </button>
        ) : (
          <button
            onClick={handlePlaceOrder}
            type="button"
            disabled={isOrdering}
            className="flex w-full max-w-80 cursor-pointer items-center justify-center rounded bg-gray-900 px-6 py-2 disabled:cursor-not-allowed disabled:opacity-70">
            {isOrdering ? (
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
            ) : (
              <p className="text-sm font-medium leading-6 text-white">Order</p>
            )}
          </button>
        )}

        <Link
          href="/Products"
          className="text-center text-xs font-medium leading-4 text-gray-900 underline">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
