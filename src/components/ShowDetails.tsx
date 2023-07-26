import Image from "next/image";
import { LocationAndArtistDetails } from "./LocationAndArtistDetails";
import { BookingDetails } from "./BookingDetails";
import { ArtistTagLine } from "./ArtistTagLine";
import { BookingButton } from "./BookingButton";

export const ShowDetails = () => {
  return (
    <div className="flex flex-col gap-10 w-full max-w-[794px]">
      <LocationAndArtistDetails
        artistName={"Arijit Singh"}
        artistType={"Singer"}
        location={"Mumbai, Maharashtra"}
      />
      <BookingDetails
        enquiries={63}
        enquiriesDuration={24}
        recentlyBooked={"13 June"}
      />
      <ArtistTagLine
        content="Renowned for his super hits, Arijit Singh is now the talk of the town
      because of his golden voice and stellar performances!"
      />
      <BookingButton />
    </div>
  );
};
