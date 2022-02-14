import {BooksState} from "./bookSlice";

interface SelectorsTypes {
  booksStore: BooksState
}

export const apiKeySelector = (state: SelectorsTypes) => state.booksStore.apiKey;
export const booksSelector = (state: SelectorsTypes) => state.booksStore.books;
export const totalItemsSelector = (state: SelectorsTypes) => state.booksStore.totalItems;
export const maxSearchBookSelector = (state: SelectorsTypes) => state.booksStore.maxSearchBooks;
export const startIndexBookSelector = (state: SelectorsTypes) => state.booksStore.startIndex;
export const searchBookSelector = (state: SelectorsTypes) => state.booksStore.searchBook;
export const sortingSelector = (state: SelectorsTypes) => state.booksStore.sorting;
export const filterSelector = (state: SelectorsTypes) => state.booksStore.filter;
