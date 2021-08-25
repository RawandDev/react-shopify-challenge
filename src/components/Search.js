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
    <form
      onSubmit={handleSubmit}
      className=" text-center"
      data-aos="fade-right"
    >
      <input
        className="border-4 rounded-xl w-1/2 h-10 bg-transparent focus:outline-none hover: text-white p-2   "
        type="text"
        placeholder="Search for a movie"
        onChange={handleChange}
      />
      <button
        type="submit"
        className="bg-transparent m-6 border-4 rounded-xl w-20 h-10 text-white hover:bg-red-800  "
      >
        Search
      </button>
    </form>
  );
}

export default Search;
