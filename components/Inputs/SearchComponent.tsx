import { karla } from "@/lib/font";
import { TextInput } from "@mantine/core";
import { useState, useContext, useEffect } from "react";
import { TbSearch } from "react-icons/tb";
import { LoadingContext } from "../Utils/LoadingFallback";
import { useSearchResultContext } from "@/hooks/context/SearchResult";
import { useQueryContext } from "@/hooks/context/SearchText";

const SearchComponent: React.FC<{}> = () => {
  const [searchText, setSearchText] = useState<string>("");
  const { pageLoading, setPageLoading } = useContext(LoadingContext);
  const [showHeader, setShowHeader] = useState(false);
  const {searchResult, setSearchResult} = useSearchResultContext();
  const {query, setQuery} = useQueryContext();

  const onSubmit = async (e: any) => {
    setPageLoading(true);

    e.preventDefault();
    console.log("requesting for :: ", searchText);
    
    const res = await fetch("/api/search", {
      method: "POST",
      body: JSON.stringify({ search: searchText }),
    });
    const data = await res.json();


    console.log('final res = ', data)
    localStorage.setItem("searchResult", JSON.stringify(data));
    localStorage.setItem("query", searchText);
    setQuery(searchText);
    setSearchResult(data);

    setShowHeader(true)
    setPageLoading(false);
  };

  useEffect(() => {
    if(query) {
      setSearchText(query);
      setShowHeader(true)
    }
  }, [query])

  return (
    <form onSubmit={onSubmit}>
      <div className=" w-[60%] mx-auto flex justify-between items-center rounded-full pl-3 h-10 border-neutral-400 shadow-md border-2 relative">
        <TbSearch size={20} className="text-primary mx-2" />
        <input
          className={`${karla.className} text-sm focus:outline-none w-[90%] text-neutral-600 bg-transparent`}
          placeholder="Type a Song, Album or an Artist..."
          value={searchText}
          onChange={(e) => setSearchText(e.currentTarget.value)}
        />
        <button
          type="submit"
          className={`${karla.className} bg-primary rounded-full w-[20%] h-full shadow-md border-2 border-white hover:mr-1 text-white`}
        >
          Search
        </button>
      </div>
      {showHeader && (
        <div
          className={`${karla.className} mx-auto w-full text-center p-3 font-bold textlg`}
        >
          Showing results for &quot; {searchText} &quot;
        </div>
      )}
    </form>
  );
};

export default SearchComponent;
