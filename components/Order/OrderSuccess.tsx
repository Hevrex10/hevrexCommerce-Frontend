import OrderCard from "@/components/OrderCard";

export default function OrderSuccess() {
  return (
    <OrderCard
      heading="Succesful Order"
      subHeading="succesful Order"
      image="/images/orderSuccess.png"
      result="Thank you for shopping"
      condition="Your order has been successfully placed and is now being processed."
      to="/Cart"
      bg="bg-blue-200"
      text="Go to my account"
    />
  );
}
