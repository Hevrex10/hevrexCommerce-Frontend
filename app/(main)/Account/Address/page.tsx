import ButtonCard from "@/components/ButtonCard";

import InputCard from "@/components/InputCard";
export default function page() {
  return (
    <>
      <form className="flex w-full max-w-[534px] flex-col gap-6 sm:gap-8 lg:gap-10">
        <p className="font-semibold text-gray-900">Shipping Address</p>

        {/* Name + Phone */}
        <div className="gap-3 sm:flex-cols">
          <InputCard
            name="name"
            type="text"
            text="Street Address"
            // value={shippingData.name}
            // onChange={handleChange}
          />
        </div>

        {/* Address + State */}
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <InputCard name="address" type="text" text="City" />

            <InputCard name="state" type="text" text="State" />
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <InputCard name="country" type="text" text="Country" />
          </div>
        </div>
        <ButtonCard text="Save change" type="submit" maxWidth="max-w-50" />
      </form>
    </>
  );
}
