import { ArtistTagLineProps } from "../../type";

export const ArtistTagLine = ({ content }: ArtistTagLineProps) => {
  return (
    <span className="text-lg text-[#ffffff99] max-w-[594px]">{content}</span>
  );
};
