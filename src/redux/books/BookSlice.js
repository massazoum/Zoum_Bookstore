import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  books: [
    {
      id: uuidv4(),
      Type: 'Action',
      Name: 'The Hunger Games',
      Percent: '64%',
      NameAuthor: 'Suzanne Collins',
      ChapterBook: 'Chapter 17',

    },
    {
      id: uuidv4(),
      Type: 'Science-Fiction',
      Name: 'Dune',
      Percent: '8%',
      NameAuthor: 'Frank Herbert',
      ChapterBook: 'Chapter 3: "A Lesson Learned"',
    },
    {
      id: uuidv4(),
      Type: 'Economy',
      Name: 'Capital in the Twenty-First Century',
      Percent: '0%',
      NameAuthor: 'Suzanne Collins',
      ChapterBook: 'Introduction',
    },
  ],
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book.Name !== action.payload);
    },
  },

});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
