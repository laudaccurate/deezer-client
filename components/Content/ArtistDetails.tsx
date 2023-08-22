import Image from "next/image";
import TopTracks from "./TopTracks";
import { formatNumber } from "@/lib/helperFunctions";
import Albums from "./Albums";
import { TbCircleArrowLeftFilled } from "react-icons/tb";
import Link from "next/link";
const ArtistDetails: React.FC<{ artist: any }> = ({ artist }) => {
  return (
    <div className="w-full h-full md:w-[70%] mx-auto mt-[80px]">
      <div className=" p-3 cursor-pointer no-underline">
        <Link href="/" passHref className="flex gap-2 items-center">
          <TbCircleArrowLeftFilled size={24} className="text-primary" />
          <div className="text-lg font-medium">Back to Home</div>
        </Link>
      </div>
      <div className="w-full flex flex-col md:flex-row h-[50%] md:h-[400px]">
        <div className="w-full mx-auto md:w-[60%] h-full relative">
          <Image
            alt="Artist Photo"
            src={artist.picture_xl}
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div className="opacity-80 h-full w-full p-6">
            <div className="text-4xl font-bold text-white">{artist.name}</div>
            <div className="font-medium text-lg text-neutral-600">
              {formatNumber(artist.nb_fan)} fans
            </div>
          </div>
        </div>
        <div className="w-full md:w-[40%]">
          <TopTracks id={artist.id} />
        </div>
      </div>
      <div>
        <Albums id={artist.id} />
      </div>
    </div>
  );
};

export default ArtistDetails;
