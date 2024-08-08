import { createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "http://localhost:8080/movies";

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    const response = await fetch(`${API_URL}?${queryString}`);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  }
);
