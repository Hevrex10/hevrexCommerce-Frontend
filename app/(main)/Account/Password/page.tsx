import InputCard from "@/components/InputCard";
import ButtonCard from "@/components/ButtonCard";
export default function page() {
  return (
    <>
      <form className="flex w-full max-w-[534px] flex-col gap-6 sm:gap-8 lg:gap-10">
        <p className="font-semibold text-gray-900">Change Password </p>

        <div className="flex flex-col w-full max-w-87.5 not-only:gap-3">
          <InputCard name="password" type="password" text="Password" />

          <InputCard
            name="confirm password"
            type="password"
            text="Confirm Password"
          />
        </div>
        <ButtonCard text="Change Password" type="submit" maxWidth="max-w-50" />
      </form>
    </>
  );
}
