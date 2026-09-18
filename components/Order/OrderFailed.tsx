import OrderCard from "@/components/OrderCard";

export default function OrderFailedr() {
  return (
    <OrderCard
      heading="Failed Order"
      subHeading="failed Order"
      image="/images/orderFailed.svg"
      result="Oops! There was an issue"
      condition="Oops! There was a problem processing your order. Please review the details and try again."
      to="/Cart"
      bg="bg-rose-200 "
      text="Reorder"
    />
  );
}
