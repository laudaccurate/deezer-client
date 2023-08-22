import Image from "next/image";
import TopTracks from "./TopTracks";
import { formatNumber } from "@/lib/helperFunctions";

const ArtistDetails: React.FC<{ artist: any }> = ({ artist }) => {
  return (
    <div className="w-[70%] mx-auto mt-[100px]">
      <div className="w-full flex h-[400px]">
        <div className="w-[60%] h-full relative">
          <Image
            alt="Artist Photo"
            src={artist.picture_xl}
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div className="opacity-80 h-full w-full p-6">
            <div className="text-4xl font-bold text-white">
            {artist.name}
            </div>
            <div className="font-medium text-lg text-neutral-600">{formatNumber(artist.nb_fan)} fans</div>
          </div>
        </div>
        <div>
          <TopTracks id={artist.id}/>
        </div>
      </div>
    </div>
  );
};


export default ArtistDetails;