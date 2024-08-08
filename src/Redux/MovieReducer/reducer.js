// movieReducer.js
import { createSlice } from '@reduxjs/toolkit';
import { fetchMovies } from './action';

const initialState = {
  isLoading: false,
  isError: false,
  movies: [],
};



const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies?.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchMovies?.fulfilled, (state, action) => {
        state.isLoading = false;
        state.movies = action.payload;
      })
      .addCase(fetchMovies?.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default movieSlice.reducer;
