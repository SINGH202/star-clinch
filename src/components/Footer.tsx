import Image from "next/image";

export const Footer = () => {
  return (
    <div className="flex justify-between text-base text-[#565976] px-24 pt-[60px] pb-[130px] border-t border-[#5F5F62] w-full">
      <div className="flex flex-col gap-4 max-w-[420px]">
        <span className="font-[900]">SELEBZ</span>
        <span className="pb-2">
          Selebz, is the first ever de-influencing platform, making reels that
          boosts your business.
        </span>
        <span>Sign up and we will get in touch as soon as possible</span>
        <div className="relative">
          <input
            type="text"
            name=""
            id=""
            className="bg-transparent border border-[#565976] placeholder:text-[#565976] rounded-[10px] pl-5 pr-12 py-4 w-full"
            placeholder="Email Address"
          />
          <Image
            width={24}
            height={24}
            src={"/images/bttn-icon-arrow.svg"}
            alt={""}
            className="absolute right-4 top-4 cursor-pointer"
          />
        </div>
        <span className="text-sm">© 2023 by VINSM Globe Private Limited</span>
      </div>
      <div className="flex flex-col items-end gap-4 max-w-[400px] w-full">
        <span className="font-[900]">BREWING UP CREATIVITY AT OUR STUDIO!</span>
        <span className="text-right">
          E 48/4, Pocket - D, Okhla Phase - 2 <br /> New Delhi - 110020
        </span>
        <span className="text-right">
          +91-7042884270 <br /> hola@selebz.com
        </span>
      </div>
    </div>
  );
};
