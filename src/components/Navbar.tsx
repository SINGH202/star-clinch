import { config } from "@/pages/api/data";
import Image from "next/image";
import { useRouter } from "next/router";

export const Navbar = () => {
  const router = useRouter();
  return (
    <div className="flex justify-between items-center w-full border-b border-[#E7CBBC]">
      <Image
        src={"/images/star-clinch.svg"}
        alt=""
        width={300}
        height={50}
        className="p-10 w-52 h-28 border-r border-[#E7CBBC] text-2xl"
      />
      <NavLinks />
      <span
        className="p-10 border-l cursor-pointer border-[#E7CBBC] text-[22px]"
        onClick={() => {
          router.push("/book-your-celebrity");
        }}>
        Book Your Celebrity
      </span>
    </div>
  );
};

export const NavLinks = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center gap-12 text-[22px]">
      {config.navLinks.map((navLink, index) => (
        <a
          className="cursor-pointer"
          onClick={() => {
            router.push(navLink?.link);
          }}
          key={`nav-link-${index}`}>
          {navLink?.label}
        </a>
      ))}
    </div>
  );
};
