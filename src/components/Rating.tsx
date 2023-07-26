import Image from "next/image";
import { RatingProps, RatingsProps } from "../../type";

export const Ratings = ({ ratings, reviewCount }: RatingsProps) => {
  return (
    <div className="flex flex-col bg-[#181818] rounded-lg w-1/3 px-6 py-5 gap-2 relative">
      <span className="text-4xl">100% Value for Money</span>
      <span className="text-[#5C5C5C]">Based on {reviewCount} Reviews</span>
      <div className="flex flex-col gap-6 my-4">
        {ratings.map((rating, index) => (
          <Rating key={`rating-${index}`} {...rating} />
        ))}
      </div>
      <Image
        height={200}
        width={137}
        src={"/images/top-rated-img.svg"}
        alt={""}
        className="w-[256px] absolute -right-14 -bottom-24"
      />
    </div>
  );
};

const Rating = ({ rating, title }: RatingProps) => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-2xl font-semibold bg-gradient-to-b from-[#F88E41] to-[#FF9B3B] text-transparent bg-clip-text">
        {rating}
      </span>
      <Image
        width={22}
        height={22}
        src={"/images/iconamoon-star-fill.svg"}
        alt={""}
      />
      <span className="text-lg text-[#A1A1A1]">{title}</span>
    </div>
  );
};
