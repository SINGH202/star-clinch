import Image from "next/image";
import { LocationAndArtistDetails } from "./LocationAndArtistDetails";

export const ShowDetails = () => {
  return (
    <div className="flex flex-col gap-10 w-full max-w-[794px]">
      <LocationAndArtistDetails
        artistName={"Arijit Singh"}
        artistType={"Singer"}
        location={"Mumbai, Maharashtra"}
      />
    </div>
  );
};
