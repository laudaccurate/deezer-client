import { createContext, useContext } from "react";

interface QueryContent {
	query: string;
	setQuery: (text: string) => void;
}

export const QueryContext = createContext<QueryContent>({
	query: "",
	setQuery: () => {},
});

export const useQueryContext = () => useContext(QueryContext);
