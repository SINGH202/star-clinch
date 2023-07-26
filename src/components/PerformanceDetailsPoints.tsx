import {
  PerformanceDetailsPointProps,
  PerformanceDetailsPointsProps,
} from "../../type";

export const PerformanceDetailsPoints = ({
  points,
}: PerformanceDetailsPointsProps) => {
  return (
    <div className="flex flex-wrap gap-x-[70px] gap-y-[55px] items-center justify-center w-full max-w-[720px]">
      {points.map((point, index) => (
        <PerformanceDetailsPoint
          key={`performance-details-point-${index}`}
          {...point}
        />
      ))}
    </div>
  );
};

const PerformanceDetailsPoint = ({
  title,
  content,
}: PerformanceDetailsPointProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <span className="text-[#EB794A] font-bold text-[32px] text-center">
        {content}
      </span>
      <span className="text-[#ffffff80] text-lg text-center">{title}</span>
    </div>
  );
};
