import React from "react";

/* eslint-disable react/prop-types */
function Movie({ vote, title, poster, releaseDate }) {
  console.log(vote, title, poster, releaseDate);

  return (
    <div className="float-left p-4 text-white bg-screen ">
      <div data-aos="flip-left" className=" ">
        <h2 className="text-center">{title}</h2>

        <img
          src={`https://image.tmdb.org/t/p/w500/${poster}`}
          alt={title}
          className="w-48 rounded-xl"
        />
        <p className="text-center">{releaseDate}</p>
        <p className="text-center">{vote}</p>
      </div>
    </div>
  );
}

export default Movie;
