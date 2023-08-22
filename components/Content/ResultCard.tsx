import { karla } from "@/lib/font";
import Image from "next/image";

const ResultCard:React.FC<{result: any}> = ({result}) => {
  return (
    <div className={`bg-white rounded-md shadow-md h-[300px] ${karla.className}`}>
      <div className="h-[120px] w-full relative" >
        <Image alt="Album Cover" src={result.album.cover} fill style={{objectFit: "cover", objectPosition: "center"}}/>
      </div>
      <div>
        {result.title}
      </div>
    </div>
  )
}

export default ResultCard;