import React, { useContext, useState } from "react";
import { LoadingContext } from "../Utils/LoadingFallback";
import { getDuration } from "@/lib/helperFunctions";
import { karla } from "@/lib/font";

const TopTracks: React.FC<{ id: string }> = ({ id }) => {
  const { pageLoading, setPageLoading } = useContext(LoadingContext);
  const [tracks, setTracks] = useState([]);

  React.useEffect(() => {
    setPageLoading(true);

    fetch(`/api/artist/${id}/top`, {
      method: "POST",
      body: JSON.stringify({ id: id }),
    })
      .then((res) => res.text())
      .then((result) => {
        const data = JSON.parse(result).data;
        console.log("final res = ", data);
        setTracks(data);
        setPageLoading(false);
      });
  }, [id, setPageLoading]);

  return (
    <div className="bg-white py-3 px-2">
      <div className="text-lg font-semibold text-neutral-700 p-2">
        Top Tracks
      </div>
      <div>
        {tracks.map((track: any, index: number) => (
          <div
            key={index}
            className={`${karla.className} flex justify-between items-center p-2 border-b border-neutral-400`}
          >
            <div className="text-base font-medium">
              {index + 1}. {track.name}
            </div>
            <div className="text-neutral-400 text-xs">
              {getDuration(track.duration)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};