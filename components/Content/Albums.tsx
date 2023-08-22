import React, { useContext, useState } from "react";
import { LoadingContext } from "../Utils/LoadingFallback";
import { karla } from "@/lib/font";
import { SimpleGrid } from "@mantine/core";
import Image from "next/image";

const Albums: React.FC<{ id: string }> = ({ id }) => {
  const { pageLoading, setPageLoading } = useContext(LoadingContext);
  const [albums, setAlbums] = useState([]);

  React.useEffect(() => {
    setPageLoading(true);

    fetch(`/api/artist/${id}/albums`, {
      method: "GET",
    })
      .then((res) => res.text())
      .then((result) => {
        const data = JSON.parse(result).data;
        console.log("final res = ", data);
        setAlbums(data);
        setPageLoading(false);
      });
  }, [id, setPageLoading]);

  return (
    <div className="bg-white py-3 px-2">
      {pageLoading ? (
        <>Loading</>
      ) : (
        albums && (
          <>
            <div className="text-2xl font-bold text-neutral-700 p-3">
              Albums
            </div>
            <div className="">
              <SimpleGrid cols={5}>
                {albums.map((album: any, index: number) => (
                  <div key={index} className={`${karla.className} shadow-sm cursor-pointer`}>
                    <div className="w-full h-[200px] relative">
                      <Image
                        alt="Album Cover"
                        src={album.cover_big}
                        fill
                        style={{ objectFit: "cover", objectPosition: "center" }}
                      />
                    </div>
                    <div className="p-2">
                      <div className="font-medium text-base text-neutral-600">
                        {album.title}
                      </div>
                      <div className="text-neutral-400 text-sm">
                        {new Date(album.release_date).getFullYear()}
                      </div>
                    </div>
                  </div>
                ))}
              </SimpleGrid>
            </div>
          </>
        )
      )}
    </div>
  );
};

export default Albums;
