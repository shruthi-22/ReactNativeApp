import { createSlice } from '@reduxjs/toolkit';

export interface Book {
  title: string;
  author: string;
}

export interface LibraryState {
  books: Book[];
}

export const libraryInitialState: LibraryState = {
  books: [],
};

const contactSlice = createSlice({
  name: 'phoneBook',
  initialState: libraryInitialState,
  reducers: {
    update: (state, action) => {
      state.books = action.payload
    },
    add: (state, action) => {
      state.books = [...state.books, action.payload];
    },
  },
});

export default contactSlice.reducer;
export const {add, update} = contactSlice.actions;
