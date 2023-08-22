import Image from "next/image";

const ArtistDetails: React.FC<{ artist: any }> = ({ artist }) => {
  return (
    <div className="w-[70%] mx-auto">
      <div className="w-full flex h-[400px]">
        <div className="w-2/3 h-full relative">
          <Image
            alt="Artist Photo"
            src={artist.picture_big}
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <div>

        </div>
      </div>
    </div>
  );
};


export default ArtistDetails;