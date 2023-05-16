import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      item_id: 0,
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
      Percent: '64%',
      ChapterBook: 'Chapter 17',
    },
    {
      item_id: 1,
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
      Percent: '8%',
      ChapterBook: 'Chapter 3: "A Lesson Learned"',
    },
    {
      item_id: 2,
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
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
      state.books = state.books.filter((book) => book.item_id !== action.payload);
    },
  },

});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
