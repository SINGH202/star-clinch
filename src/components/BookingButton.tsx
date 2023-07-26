import Image from "next/image";

export const BookingButton = () => {
  return (
    <button
      className="flex justify-center items-center gap-1.5 text-[27px] max-w-[420px] px-10 py-4 rounded-[41px] bg-[#d9d9d91a]"
      onClick={() => {}}>
      See Pricing & Book
      <Image width={60} height={32} src={"/images/union.svg"} alt={""} />
    </button>
  );
};
