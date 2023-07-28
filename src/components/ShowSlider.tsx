import Image from "next/image";
import Carousel from "./Carousel";

export const PerformanceSlide = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-14 w-full my-20">
      <div className="flex items-center justify-center gap-16 w-full">
        <Image
          width={120}
          height={120}
          src={"/images/arrow-left.svg"}
          alt={""}
          className=""
        />
        <span className="text-2xl font-semibold">Live Performance</span>
        <Image
          width={120}
          height={120}
          src={"/images/arrow-right.svg"}
          alt={""}
          className=""
        />
      </div>
      {/* <Carousel autoSlide slides={["", "", ""]} /> */}
      <div className="grid grid-flow-col gap-10 overflow-x-scroll w-full relative px-5">
        <SlideCard />
        <SlideCard />
        <SlideCard />
      </div>
    </div>
  );
};

export const SlideCard = () => {
  return (
    <div className="w-[800px] h-[680px] rounded-[41px] bg-gradient-to-t from-gray-400 via-black to-gray-400 p-[1px] overflow-hidden">
      <div className="w-full h-full bg-black rounded-[41px] overflow-hidden">
        <div className="">
          <Image
            width={1600}
            height={1600}
            src={"/images/slide-image-1.svg"}
            alt={""}
            className="h-full w-full"
          />
        </div>
        <div className="flex flex-col gap-2 p-10 bg-gradient-to-r from-[#0E0E0E] via-black to-[#08020D] rounded-b-[41px] h-[235px] w-full">
          <span className="text-[48px]">Live at Amity University</span>
          <span className="text-[#ffffff99] text-2xl">
            Booked via starclinch on 18 June
          </span>
        </div>
      </div>
    </div>
  );
};
