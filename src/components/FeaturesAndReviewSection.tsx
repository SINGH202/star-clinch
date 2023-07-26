import Image from "next/image";
import { BookingButton } from "./BookingButton";
import { Ratings } from "./Rating";
import { Review } from "./Review";
import { config } from "@/pages/api/data";

export const FeaturesAndReviewSection = () => {
  return (
    <div className="flex flex-col gap-8 w-full px-[105px] text-white">
      <span className="text-[36px] font-bold">Featured Ratings & Reviews</span>
      <div className="flex justify-between gap-6 w-full">
        <Review {...config?.review} />
        <Ratings {...config?.ratingDetails} />
      </div>
      <div className="flex flex-col items-center justify-center gap-6 p-4">
        <BookingButton />
        <span className="text-lg text-[#7A7979]">
          Get quotes within 5 mins !
        </span>
      </div>
    </div>
  );
};
