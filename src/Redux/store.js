import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthReducer/reducer";
import movieReducer from "./MovieReducer/reducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    movies: movieReducer,
  },
});

export default store;
