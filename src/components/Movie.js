import React from "react";
import Button from "./UI/Button";

/* eslint-disable react/prop-types */
function Movie({ vote, title, poster, releaseDate }) {
  return (
    <div
      className={`${
        poster || vote !== 0 || title || releaseDate ? "w-48 m-8" : ""
      }`}
    >
      <div>
        <h2>{title}</h2>
        <img
          className="rounded-2xl"
          src={`https://image.tmdb.org/t/p/w500/${poster}`}
          alt={title}
        />
        <p>{releaseDate}</p>
        <p>{vote}</p>
        <Button>
          <p>Nominate</p>
        </Button>
      </div>
    </div>
  );
}

export default Movie;
