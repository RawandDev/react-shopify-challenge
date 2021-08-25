import React from "react";

/* eslint-disable react/prop-types */
function Movie({ vote, title, poster, releaseDate }) {
  console.log(vote, title, poster, releaseDate);

  return (
    <div className="float-left p-4 text-white bg-screen ">
      {vote ? (
        <div data-aos="flip-left" className=" ">
          <h2 className="text-center">{title}</h2>
          {poster ? (
            <img
              src={`https://image.tmdb.org/t/p/w500/${poster}`}
              alt={title}
              className="w-48 rounded-xl"
            />
          ) : (
            <img
              className="w-48 rounded-xl"
              src="https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-1-3.jpg"
              alt="default"
            />
          )}
          <p className="text-center">{releaseDate}</p>
          <p className="text-center">{vote}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Movie;
