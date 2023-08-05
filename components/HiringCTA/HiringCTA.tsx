import Link from "next/link";
import ChevronRight from "@/components/icons/Chevron_right.svg";

export const HiringCTA = () => {
  return (
    <Link
      className="mt-10 p-1 pr-2 flex items-center text-white bg-black w-fit rounded-2xl"
      href="#"
    >
      <div className="flex items-center px-3 rounded-xl uppercase text-xs font-medium tracking-wide leading-5 bg-indigo-500">
        We&rsquo;re hiring
      </div>
      <div className="text-sm pl-4 pr-2 leading-5">Visit our careers page</div>
      <ChevronRight aria-hidden />
    </Link>
  );
};
