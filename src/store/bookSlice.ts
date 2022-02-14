import {createSlice} from '@reduxjs/toolkit';

export interface BooksState {
  apiKey: string | undefined
  books: Object | undefined
  totalItems: number | undefined
  maxSearchBooks: number | undefined
  startIndex: number | undefined
  searchBook: string | null
  sorting: 'relevance' | 'newest'
  filter: 'all' | 'art' | 'biography' | 'computers' | 'history' | 'medical' | 'poetry'
}

const initialState: BooksState = {
  apiKey: 'AIzaSyBgN8eAHqMJLf3ZsOmgk7Dq_TIxN2bbMB4',
  books: [],
  totalItems: 0,
  maxSearchBooks: 28,
  startIndex: 0,
  searchBook: null,
  sorting: 'relevance',
  filter: 'all',
};

export const bookSlice = createSlice({
  name: 'booksStore',
  initialState,
  reducers: {
    setBookList: (state, action) => {
      state.books = action.payload.items
      state.totalItems = action.payload.totalItems
    },
    setMoreBooks: (state, action) => {
      // @ts-ignore
      state.books = state.books.concat(action.payload.items)
    },
    setSearchBook: (state, action) => {
      state.searchBook = action.payload
    },
    setSearchRange: (state, action) => {
      state.startIndex = action.payload
    },
    setSorting: (state, action) => {
      state.startIndex = 0
      state.sorting = action.payload
    },
    setFilter: (state, action) => {
      state.filter = action.payload
    },
  },
});

export const {setSearchBook, setBookList, setSorting, setFilter, setSearchRange, setMoreBooks} = bookSlice.actions;

export default bookSlice.reducer;
