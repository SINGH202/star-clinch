import Image from "next/image";
import { ArtistImageProps } from "../../type";

export const ArtistImage = ({ image }: ArtistImageProps) => {
  return (
    <div className="relative">
      <Image
        width={400}
        height={451}
        src={image}
        alt={""}
        className="min-w-[300px] rounded-t-[231px] border-2 border-[#828282] bg-contain bg-no-repeat"
      />
      <Image
        width={122}
        height={122}
        src={"/images/meet-your-celebrity-tag.svg"}
        alt={""}
        className="absolute -bottom-10 -right-8 bg-contain bg-no-repeat"
      />
    </div>
  );
};
