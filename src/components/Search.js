import React, { useState } from "react";
import PropTypes from "prop-types";

function Search({ queryHandler, loadingHandler }) {
  const [queryValue, setQueryValue] = useState("");
  //   const [loading, setLoading] = useState(true);

  function handleChange(e) {
    setQueryValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    loadingHandler(false);
    queryHandler(queryValue);
  }

  Search.propTypes = {
    queryHandler: PropTypes.func.isRequired,
    loadingHandler: PropTypes.func.isRequired,
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
