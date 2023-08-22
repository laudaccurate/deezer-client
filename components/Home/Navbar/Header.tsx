import { karla, montserrat } from "@/lib/font";
import Image from "next/image";
import Link from "next/link";

const AppHeader: React.FC<{}> = () => {
  return (
    <div className="w-full md:w-[70%] flex justify-between border-white border-b-2 items-center md:left-[15%] shadow-md bg-primary p-3 fixed z-[99]">
      <div className=" flex items-center">
        <Image
          src="/images/deezer-logo.png"
          alt="ChatVE Logo"
          height={50}
          width={50}
        />
        <div
          className={`${montserrat.className} font-bold text-2xl px-2 no-underline`}
        >
          <Link href="/" passHref>
            Deezer
          </Link>
        </div>
      </div>
      <div className={`${karla.className} italic`}>...Listen to music</div>
    </div>
  );
};

export default AppHeader;
