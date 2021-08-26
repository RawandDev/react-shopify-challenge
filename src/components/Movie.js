import React, { useState } from "react";
import Button from "./UI/Button";

/* eslint-disable react/prop-types */
function Movie({ vote, title, poster, releaseDate }) {
  // const [nominated, setNominated] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [nominateCounter, setNominateCounter] = useState(0);

  function handleNomination() {
    // setNominated(true);
    setIsDisabled(true);
    setNominateCounter((prev) => prev + 1);
  }

  return (
    <div
      className={`${
        poster || vote !== 0 || title || releaseDate
          ? "w-48 m-8 bg-gray-300 rounded-2xl"
          : ""
      }`}
    >
      <div>
        <img
          className="rounded-2xl"
          src={`https://image.tmdb.org/t/p/w500/${poster}`}
          alt={title}
        />
        <h2 className={`${title.length > 15 ? "text-sm" : "text-lg"}`}>
          {title}
        </h2>
        <p>{releaseDate}</p>
        <p
          className={`${
            +vote > 5
              ? "bg-green-300 w-8 rounded-lg"
              : "bg-red-300 w-8 rounded-lg"
          }`}
        >
          {vote}
        </p>
        <Button onClick={handleNomination} disabled={isDisabled}>
          <p>Nominate</p>
          {nominateCounter}
        </Button>
      </div>
    </div>
  );
}

export default Movie;
