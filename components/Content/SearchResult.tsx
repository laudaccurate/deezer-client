import { useSearchResultContext } from "@/hooks/context/SearchResult";
import ResultCard from "./ResultCard";
import { SimpleGrid } from "@mantine/core";

const SearchResultComponent: React.FC<{}> = () => {
  const { searchResult } = useSearchResultContext();
  return (
    <div className="mt-[160px]">
      <SimpleGrid cols={3} spacing={26}>
        {searchResult.map((item: any) => (
          <ResultCard result={item} key={item.id} />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default SearchResultComponent;
