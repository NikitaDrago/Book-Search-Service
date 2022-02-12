import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export interface BooksState {
  apiKey: string
  books: Object
}

const initialState: BooksState = {
  apiKey: 'AIzaSyCU-r6vMR6xbtjFh62--mpRcDNYfALMZJ4',
  books: []
};

// export const incrementAsync = createAsyncThunk(
//   'booksStore/fetch',
// async (amount: number) => {
  // const response = await fetchCount(amount);
  // return response.data;
  // }
// );

  export const bookSlice = createSlice({
    name: 'booksStore',
    initialState,
    reducers: {
      // builder
      //   .addCase(incrementAsync.pending, (state) => {
      //     state.status = 'loading';
      //   })
      //   .addCase(incrementAsync.fulfilled, (state, action) => {
      //     state.status = 'idle';
      //     state.value += action.payload;
      //   });
    },
  });

  export const {} = bookSlice.actions;

  export default bookSlice.reducer;
