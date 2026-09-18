"use client";
import InputCard from "@/components/InputCard";

type ShippingData = {
  name: string;
  phone: string;
  address: string;
  state: string;
  city: string;
  country: string;
};

type ShippingAddressProps = {
  shippingData: ShippingData;
  setShippingData: React.Dispatch<React.SetStateAction<ShippingData>>;
};

export default function ShippingAddress({
  shippingData,
  setShippingData,
}: ShippingAddressProps) {


  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setShippingData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  
  return (
<form className="flex w-full max-w-[534px] flex-col gap-6 sm:gap-8 lg:gap-10">
  <p className="font-['Inter'] font-semibold text-gray-900">
    Shipping Address
  </p>

  {/* Name + Phone */}
  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
    <InputCard
      name="name"
      type="text"
      text="Full Name"
      value={shippingData.name}
      onChange={handleChange}
    />

    <InputCard
      name="phone"
      type="tel"
      text="Phone"
      value={shippingData.phone}
      onChange={handleChange}
    />
  </div>

  {/* Address + State */}
  <div className="flex flex-col gap-3">
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      <InputCard
        name="address"
        type="text"
        text="Address"
        value={shippingData.address}
        onChange={handleChange}
      />

      <InputCard
        name="state"
        type="text"
        text="State"
        value={shippingData.state}
        onChange={handleChange}
      />
    </div>

    {/* City + Country */}
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      <InputCard
        name="city"
        type="text"
        text="City"
        value={shippingData.city}
        onChange={handleChange}
      />

      <InputCard
        name="country"
        type="text"
        text="Country"
        value={shippingData.country}
        onChange={handleChange}
      />
    </div>
  </div>
</form>

  );
}
