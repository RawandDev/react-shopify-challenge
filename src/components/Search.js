import React, { useState } from "react";
import PropTypes from "prop-types";

function Search({ queryHandler }) {
  const [queryValue, setQueryValue] = useState("");

  function handleChange(e) {
    setQueryValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    queryHandler(queryValue);
  }

  Search.propTypes = {
    queryHandler: PropTypes.func.isRequired,
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for a movie"
        onChange={handleChange}
      />
    </form>
  );
}

export default Search;
