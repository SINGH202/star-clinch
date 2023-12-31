import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { ShowDetails } from "@/components/ShowDetails";
import { ArtistImage } from "@/components/ArtistImage";
import { PerformanceDetails } from "@/components/PerformanceDetails";
import { Footer } from "@/components/Footer";
import { FeaturesAndReviewSection } from "@/components/FeaturesAndReviewSection";
import { PerformanceSlide } from "@/components/ShowSlider";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col gap-20 items-center justify-center ${inter.className}`}>
      <Navbar />
      <div className="flex gap-[100px] items-end justify-center w-full">
        <ArtistImage image="/images/arijit-image.svg" />
        <ShowDetails />
      </div>
      <PerformanceDetails />
      <FeaturesAndReviewSection />
      <PerformanceSlide />
      <Footer />
    </main>
  );
}
