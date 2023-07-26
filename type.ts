export type LocationAndArtistDetailsProps = {
  artistName: string;
  artistType: string;
  location: string;
};

export type ArtistImageProps = {
  image: string;
};

export type BookingDetailsProps = {
  enquiries: number;
  enquiriesDuration: number;
  recentlyBooked: string;
};

export type ArtistTagLineProps = {
  content: string;
};

export type PerformanceDetailsPointProps = {
  title: string;
  content: string;
};

export type PerformanceDetailsPointsProps = {
  points: PerformanceDetailsPointProps[];
};

export type RatingProps = {
  rating: number;
  title: string;
};

export type RatingsProps = {
  reviewCount: number;
  ratings: RatingProps[];
};

export type ReviewProps = {
  name: string;
  bookedDate: string;
  review: string;
};
