import { karla } from "@/lib/font";
import { getDuration } from "@/lib/helperFunctions";
import { ActionIcon, Avatar, Center, Group } from "@mantine/core";
import Image from "next/image";
import { TbClock, TbShare, TbHeart, TbBookmark } from "react-icons/tb";

const ResultCard: React.FC<{ result: any }> = ({ result }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md cursor-pointer ${karla.className}`}>
      <div className="h-[180px] w-full relative rounded-t-lg">
        <Image
          alt="Album Cover"
          src={result.album.cover}
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          className="rounded-t-lg"
        />
      </div>
      <div className="p-3">
        <div className="flex gap-3 text-sm items-center py-1">
          <div>{getDuration(result.duration)}</div>
        </div>
        <div className="text-lg font-bold py-2 leading-relaxed line-clamp-1">
          <div>{result.title}</div>
        </div>
        <div>
        <Group position="apart" className="mt-2 items-end">
          <Center>
            <Avatar
              src={result.artist.picture_big}
              size={24}
              radius="xl"
              mr="xs"
            />
            <div>{result.artist.name}</div>
          </Center>

          <Group spacing={8} mr={0}>
            <ActionIcon className="bg-gray-50 hover:bg-gray-200">
              <TbHeart size="1.2rem" className="text-primary" />
            </ActionIcon>
          </Group>
        </Group>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
