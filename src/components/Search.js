import React, { useState } from "react";
import PropTypes from "prop-types";
import SubmitButton from "./UI/SubmitButton";
import Input from "./UI/Input";

function Search({ queryHandler, loadingHandler }) {
  const [queryValue, setQueryValue] = useState("");

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
      <div className="flex justify-center items-center">
        <div className="relative">
          <Input
            type="text"
            className="h-14 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none"
            placeholder="Search anything..."
            onChange={handleChange}
          />

          <div className="absolute top-2 right-2">
            <SubmitButton>Search</SubmitButton>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Search;
