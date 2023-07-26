import Image from "next/image";
import { BookingDetailsProps } from "../../type";

export const BookingDetails = ({
  enquiries,
  enquiriesDuration,
  recentlyBooked,
}: BookingDetailsProps) => {
  return (
    <div className="flex justify-between border border-[#ffffff33] w-full text-lg text-[#D7D7D7]">
      <div className="flex items-center justify-start gap-1 px-4 py-6 border-r border-[#ffffff33] w-full">
        <Image width={16} height={16} src={"/images/bi-fire.svg"} alt={""} />
        <span className="text-[#EB794A]">{enquiries} Enquiries</span> made in
        last {enquiriesDuration} Hrs
      </div>
      <div className="flex items-center justify-start gap-1 px-7 py-4 w-full">
        <span className="text-[#EB794A]"> Recently booked </span> on{" "}
        {recentlyBooked}
      </div>
    </div>
  );
};
