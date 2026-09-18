export default function CartList({
  name,
  price,
  size,
  quantity,
  image,
  color,
  handleDecrease,
  handleIncrease,
  handleDelete,
}: {
  name: string;
  price: number;
  size: string;
  quantity: number;
  image: string;
  color: string;
  handleDecrease: () => void;
  handleIncrease: () => void;
  handleDelete: () => void;
}) {
  return (
    <div className="flex max-w-full flex-row md:flex-row md:items-center md:justify-between gap-3 sm:gap-5 pt-4">
      <div className="flex gap-3">
        <div className="max-w-20 w-full h-20 bg-neutral-100 rounded flex justify-center items-center">
          <img src={image} alt={name} />
        </div>

        <div className="flex flex-col justify-center items-start gap-1.5">
          <p className="text-gray-900 text-sm font-medium font-['Inter'] leading-6">
            {name}
          </p>

          <div className="inline-flex justify-start items-center gap-2">
            <p className="text-gray-600 text-xs font-medium font-['Inter'] leading-6">
              Color:{color}
            </p>

            <div className="w-3 h-3 rounded-full" />

            <p className="text-gray-600 text-xs font-medium font-['Inter'] uppercase leading-6 tracking-wide">
              —
            </p>

            <p className="text-gray-600 text-xs font-medium font-['Inter'] capitalize leading-6">
              Size: {size}
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-2 lg:gap-5 justify-center items-center">
        <p className="text-gray-900 text-sm font-medium font-['Inter']">
          ${price}
        </p>

        <div className="flex items-center justify-between max-w-24 w-full h-9 border border-gray-300 px-3">
          <button
            onClick={handleDecrease}
            className="text-lg text-gray-700 font-semibold hover:text-gray-900">
            -
          </button>

          <p className="text-base text-gray-800 font-medium select-none">
            {quantity}
          </p>

          <button
            onClick={handleIncrease}
            className="text-lg text-gray-700 font-semibold hover:text-gray-900">
            +
          </button>
        </div>

        <div
          onClick={handleDelete}
          className="flex items-center justify-center w-9 h-9 bg-gray-200 rounded-[5px] cursor-pointer">
          x
        </div>
      </div>
    </div>
  );
}
