import Image from "next/image";
import { ReviewProps } from "../../type";

export const Review = ({ name, review, bookedDate }: ReviewProps) => {
  return (
    <div className="flex flex-col gap-4 bg-[#181818] rounded-lg w-2/3 px-[55px] py-16">
      <Image
        width={60}
        height={60}
        src={"/images/double-quotes.svg"}
        alt={""}
      />
      <div className="flex gap-2 text-[#A1A1A1]">
        <span>{name}</span>
        <Image
          width={6}
          height={6}
          src={"/images/filled-circle.svg"}
          alt={""}
        />
        <span>Booked Artist on {bookedDate}</span>
      </div>
      <span className="text-[20px] max-w-[530px]">{review}</span>
    </div>
  );
};
