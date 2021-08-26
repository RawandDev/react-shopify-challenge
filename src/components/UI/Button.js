import React from "react";
import PropTypes from "prop-types";

function Button({ children }) {
  // this is proptypes for children
  Button.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
  };
  return (
    <button
      type="button"
      className="inline-flex items-center justify-center w-32 h-10 mr-2 text-indigo-100 transition-colors duration-150 bg-green-500 rounded-lg focus:shadow-outline hover:bg-green-900"
    >
      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
        <path
          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
          clipRule="evenodd"
          fillRule="evenodd"
        />
      </svg>
      {children}
    </button>
  );
}

export default Button;
