import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const postData = createAsyncThunk('fecthBooks', async () => {
  try {
    const response = await axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/');
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
});

export const getListBook = createAsyncThunk('fechtBooks', async () => {
  try {
    const response = await axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/XISo38gwNhXdKdbu3B94/books');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const postnewbook = createAsyncThunk('data/postnewbook', async (requestbook) => {
  try {
    const response = await axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/XISo38gwNhXdKdbu3B94/books', JSON.stringify(requestbook), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
});

export const deletebook = createAsyncThunk('data/deletebook', async (IDD) => {
  try {
    const response = await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/XISo38gwNhXdKdbu3B94/books/${IDD}`);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
});

const bookSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
    loading: false,
    error: null,
  },
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book.item_id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getListBook.fulfilled, (state, action) => {
        state.books = action.payload;
      });
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
