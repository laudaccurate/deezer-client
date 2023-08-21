import { montserrat } from "@/lib/font";
import Image from "next/image";

const AppHeader: React.FC<{}> = () => {
  return (
    <div className="w-[70%] flex justify-between items-center left-[15%] shadow-md bg-primary p-3 fixed ">
      <div className=" flex items-center">
      <Image
          src="/images/deezer-logo.png"
          alt="ChatVE Logo"
          height={50}
          width={50}
        />
        <div className={`${montserrat.className} font-bold text-2xl px-2`}>Deezer</div>
      </div>
        <div className={`${montserrat.className} italic`}>...Listen to music</div>
    </div>
  )
}

export default AppHeader;