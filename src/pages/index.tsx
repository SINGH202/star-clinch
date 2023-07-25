import Image from "next/image";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { ShowDetails } from "@/components/ShowDetails";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col gap-14 items-center ${inter.className}`}>
      <Navbar />
      <div className="flex gap-[100px] items-end justify-center w-full">
        <Image
          width={400}
          height={451}
          src={"/images/arijit-image.svg"}
          alt={""}
          className="w-[400px] h-[450px] rounded-t-[231px] border-2 border-[#828282] bg-contain bg-no-repeat"
        />
        <ShowDetails />
      </div>
    </main>
  );
}
