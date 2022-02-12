import {createSlice} from '@reduxjs/toolkit';

export interface BooksState {
  apiKey: string
  books: Object | undefined
  totalItems: number
  maxSearchBooks: number
  searchBook: string | null
  sorting: string
}

export interface fetchBooksType {
  searchBook: string
  apiKey: string
  maxSearchBooks: number
}

const initialState: BooksState = {
  apiKey: 'AIzaSyCU-r6vMR6xbtjFh62--mpRcDNYfALMZJ4',
  books: [],
  totalItems: 0,
  maxSearchBooks: 28,
  searchBook: null,
  sorting: 'relevance',
};

export const bookSlice = createSlice({
  name: 'booksStore',
  initialState,
  reducers: {
    setBookList: (state, action) => {
      state.books = action.payload.items
      state.totalItems = action.payload.totalItems
    },
    setSearchBook: (state, action) => {
      state.searchBook = action.payload
    }
  },
});

export const {setSearchBook, setBookList} = bookSlice.actions;

export default bookSlice.reducer;
