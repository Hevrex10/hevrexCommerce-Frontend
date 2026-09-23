export default function RecentOrderCard({
  date,
  price,
  status,
  productName,
}: {
  productName: string;
  date: string;
  price: number;
  status: string;
}) {
  return (
    <>
      <tr className="border-b border-gray-50">
        <td className="py-3">{productName}</td>
        <td className="py-3">{date}</td>
        <td className="py-3">{price}</td>
        <td className="py-3">{status}</td>
      </tr>
    </>
  );
}
