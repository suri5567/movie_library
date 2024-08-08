import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../Redux/MovieReducer/action";
import MovieList from "../Components/MovieList";

const HomePage = () => {
  const dispatch = useDispatch();
  const { movies, isLoading, isError } = useSelector((state) => state.movies);

  useEffect(() => {
   const params = new URLSearchParams(window.location.search);
const ratings = params.getAll('rating');
const order = params.get('order');
dispatch(fetchMovies({ rating: ratings, order }));

  }, [dispatch]);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading movies.</p>;

  return <MovieList movies={movies} />;
};

export default HomePage;



