import DeafultContent from "@/components/Content/Default";
import SearchResultComponent from "@/components/Content/SearchResult";
import SearchComponent from "@/components/Inputs/SearchComponent";
import { useSearchResultContext } from "@/hooks/context/SearchResult";

export default function Home() {
  const { searchResult } = useSearchResultContext();
  return (
    <main className="h-full w-full md:w-[70%] mt-[60px] mx-auto py-4 bg-white">
      <div className="fixed z-40 mx-auto w-[70%] ">
        <SearchComponent />
      </div>
      <div className="w-full">
        {!searchResult || searchResult.length == 0 ? (
          <DeafultContent />
        ) : (
          <SearchResultComponent />
        )}
      </div>
    </main>
  );
}
