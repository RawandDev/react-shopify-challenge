import React from "react";

/* eslint-disable react/prop-types */
function Movie({ vote, title, poster, releaseDate }) {
  console.log(vote, title, poster, releaseDate);

  return (
    <div>
      <h2>{title}</h2>
      <img src={`https://image.tmdb.org/t/p/w500/${poster}`} alt={title} />
      <p>{releaseDate}</p>
      <p>{vote}</p>
    </div>
  );
}

export default Movie;
