import { karla } from "@/lib/font";
import { TextInput } from "@mantine/core";
import { useState, useContext } from "react";
import { TbSearch } from "react-icons/tb";
import { LoadingContext } from "../Utils/LoadingFallback";

const SearchComponent: React.FC<{}> = () => {
  const [searchText, setSearchText] = useState<string>("");
  const {pageLoading, setPageLoading} = useContext(LoadingContext);

  const onSubmit = async (e: any) => {
    setPageLoading(true);

    e.preventDefault();
    console.log("requesting for :: ", searchText)
    const res = await fetch("/api/search", {method: "POST", body: JSON.stringify({search: searchText})});
    console.log("received :: ", res.json);

    setPageLoading(false);
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="mx-auto w-[60%] flex justify-between items-center rounded-full pl-3 h-10 border-neutral-400 shadow-md border-2">
        <TbSearch size={20} className="text-primary mx-2" />
        <input
          className={`${karla.className} text-sm focus:outline-none w-[90%] text-neutral-600`}
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
    </form>
  );
};

export default SearchComponent;