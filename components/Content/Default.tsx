import { Center } from "@mantine/core";
import Image from "next/image";
import React from "react";

export default function DefaultContent() {
  return (
    <Center className="mx-auto w-full mt-[150px]">
      <div>
        <Image
          alt="Search Music"
          src="/images/music.svg"
          height={150}
          width={150}
          className="mx-auto"
        />
        <div className="p-4 text-neutral-400 font-medium text-lg text-center">
          Search for a song, album or an artiste
        </div>
      </div>
    </Center>
  );
}
