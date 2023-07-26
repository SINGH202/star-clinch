import Image from "next/image";
import { PerformanceDetailsPoints } from "./PerformanceDetailsPoints";
import { config } from "@/pages/api/data";

export const PerformanceDetails = () => {
  return (
    <div className="flex items-end justify-center overflow-hidden w-full p-[42px] max-w-[935px] h-[884px] mb-10 performance-bg">
      <div className="flex items-end justify-center performance-details-card-border p-1 w-full h-full rounded-t-[550px]">
        <div className="flex flex-col items-center justify-between pt-32 pb-20 performance-details-card w-full h-full rounded-t-[550px] ">
          <div className="text-[48px] flex items-center justify-start gap-4">
            Performance
            <Image
              width={18}
              height={18}
              src={"/images/star-icon.svg"}
              alt={""}
            />
            Details
          </div>
          <PerformanceDetailsPoints points={config?.performanceDetailsPoints} />
          <div className="flex items-center justify-center gap-1.5 px-10 py-4 text-[27px] w-fit bg-[#d9d9d91a]">
            Customize your requirements while booking
            <Image width={60} height={32} src={"/images/union.svg"} alt={""} />
          </div>
        </div>
      </div>
    </div>
  );
};
