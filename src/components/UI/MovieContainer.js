import React from "react";
import PropTypes from "prop-types";

function MovieContainer({ children }) {
  // this is proptypes for children
  MovieContainer.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
  };

  return (
    <div className="flex items-center justify-center flex-row flex-wrap text-black font-bold text-center text-lg">
      {children}
    </div>
  );
}

export default MovieContainer;
