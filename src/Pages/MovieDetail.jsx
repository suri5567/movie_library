import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // To access route parameters
import MovieCard from "../Components/MovieCard";

// Mock function to simulate fetching movie details by ID
const fetchMovieById = async (id) => {
  // Simulate an API call with a delay
  const response = await fetch(`http://localhost:8080/movies/${id}`);
  const data = await response.json();
  return data;
};

const MovieDetail = () => {
  const { id } = useParams(); // Get the movie ID from the URL
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const movieData = await fetchMovieById(id);
        setMovie(movieData);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getMovieDetails();
  }, [id]);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading movie details.</p>;

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
      {movie && (
        <MovieCard
          image={movie.Poster}
          title={movie.Title}
          year={movie.Year}
          type={movie.Type}
          rating={movie.rating}
        />
      )}
    </div>
  );
};

export default MovieDetail;
