import React from "react";
import Movie from "./Movie";
import MovieContainer from "./UI/MovieContainer";

/* eslint-disable react/prop-types */
function MoviesList({ data, loading }) {
  if (loading) {
    return <div>Loading...</div>;
  }

  const moviesList = data?.results.map((movie) => (
    <Movie
      vote={movie.vote_average}
      title={movie.original_title}
      poster={movie.poster_path}
      releaseDate={movie.release_date}
    />
  ));

  return <MovieContainer>{moviesList}</MovieContainer>;
}

export default MoviesList;
