import React from "react";
import MovieCard from "./MovieCard";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function MovieList({ movies }) {
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.auth.isAuth);

  console.log("isAuth", isAuth)

  const handleOpenMovieDetails = (movieId) => {
    if (isAuth) {
      navigate(`/movie/${movieId}`);
    } else {
      alert('Please login First')
      navigate("/");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1px",
        justifyContent: "space-between",
      }}
    >
      {movies?.map((movie) => (
        <div
          onClick={() => handleOpenMovieDetails(movie?.id)}
          key={movie.id}
          style={{
            flex: "1 1 calc(25% - 16px)",
            boxSizing: "border-box",
          }}
        >
          <MovieCard
            image={movie?.Poster}
            title={movie?.Title}
            year={movie.Year}
            type={movie.Type}
            rating={movie.rating}
          />
        </div>
      ))}
    </div>
  );
}

export default MovieList;




