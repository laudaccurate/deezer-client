import { createContext, useContext } from "react";

interface SearchResultContent {
	searchResult: any;
	setSearchResult: (data: any) => void;
}

export const SearchResult = createContext<SearchResultContent>({
	searchResult: {},
	setSearchResult: () => {},
});

export const useSearchResultContext = () => useContext(SearchResult);
