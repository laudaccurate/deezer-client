import { useSearchResultContext } from "@/hooks/context/SearchResult";
import ResultCard from "./ResultCard";
import { SimpleGrid } from "@mantine/core";

const SearchResultComponent: React.FC<{}> = () => {
  const { searchResult } = useSearchResultContext();
  return (
    <div className="mt-[100px]">
      <SimpleGrid cols={3} spacing={30}>
        {searchResult.map((item: any) => (
          <ResultCard result={item} key={item.id} />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default SearchResultComponent;
