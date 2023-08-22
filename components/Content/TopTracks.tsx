import React, { useContext, useState } from "react";
import { LoadingContext } from "../Utils/LoadingFallback";
import { getDuration } from "@/lib/helperFunctions";
import { karla } from "@/lib/font";
import { Skeleton } from "@mantine/core";

const TopTracks: React.FC<{ id: string }> = ({ id }) => {
  const { pageLoading, setPageLoading } = useContext(LoadingContext);
  const [tracks, setTracks] = useState([]);

  React.useEffect(() => {
    setPageLoading(true);

    fetch(`/api/artist/${id}/top`, {
      method: "GET",
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
    <div className="bg-white py-3 px-2 w-full">
      {pageLoading ? (
        <div className="w-full">
          <div className="text-xl font-semibold text-neutral-700 p-2">
            Top Tracks
          </div>
          <>
            <Skeleton height={45} width="90%" className="mx-auto" />
            <Skeleton height={45} mt={10} width="90%" className="mx-auto" />
            <Skeleton height={45} mt={10} width="90%" className="mx-auto" />
            <Skeleton height={45} mt={10} width="90%" className="mx-auto" />
            <Skeleton height={45} mt={10} width="90%" className="mx-auto" />
          </>
        </div>
      ) : (
        tracks && (
          <>
            <div className="text-xl font-semibold text-neutral-700 p-2">
              Top Tracks
            </div>
            <div>
              {tracks.map((track: any, index: number) => (
                <div
                  key={index}
                  className={`${karla.className} flex justify-between items-center p-3 shadow-md my-2 md:m-2 cursor-pointer `}
                >
                  <div className="text-base font-medium">
                    {index + 1}. {track.title}
                  </div>
                  <div className="text-neutral-400 text-xs px-4">
                    {getDuration(track.duration)}
                  </div>
                </div>
              ))}
            </div>
          </>
        )
      )}
    </div>
  );
};

export default TopTracks;
