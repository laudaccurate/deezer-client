import { useSearchResultContext } from "@/hooks/context/SearchResult";
import ResultCard from "./ResultCard";
import { SimpleGrid } from "@mantine/core";

const SearchResultComponent: React.FC<{}> = () => {
  const { searchResult } = useSearchResultContext();
  return (
    <div className="mt-[100px]">
      <div className="hidden md:block">
      <SimpleGrid cols={3} spacing={30}>
        {searchResult.map((item: any) => (
          <ResultCard result={item} key={item.id} />
        ))}
      </SimpleGrid>
      </div>
      <div className="md:hidden">
      <SimpleGrid cols={1} spacing={30}>
        {searchResult.map((item: any) => (
          <ResultCard result={item} key={item.id} />
        ))}
      </SimpleGrid>
      </div>
    </div>
  );
};

export default SearchResultComponent;
