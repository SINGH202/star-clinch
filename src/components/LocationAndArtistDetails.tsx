import Image from "next/image";
import { LocationAndArtistDetailsProps } from "../../type";

export const LocationAndArtistDetails = ({
  artistName,
  artistType,
  location,
}: LocationAndArtistDetailsProps) => {
  return (
    <div className="flex items-end gap-5">
      <span className="text-[64px]">{artistName}</span>
      <div className="flex gap-4 pb-5">
        <div className="flex items-center">
          <Image
            width={18}
            height={18}
            src={"/images/iconamoon-profile-fill.svg"}
            alt={""}
            className="bg-contain bg-no-repeat"
          />
          <span>{artistType}</span>
        </div>
        <div className="flex items-center">
          <Image
            width={18}
            height={18}
            src={"/images/carbon-location-filled.svg"}
            alt={""}
            className="bg-contain bg-no-repeat"
          />
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
};
