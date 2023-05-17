import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/BookSlice';
import categoriesReducer from './categories/catogoriesSlice';

export const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
  },
});
export default store;
