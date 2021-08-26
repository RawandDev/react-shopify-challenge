import React from "react";
import PropTypes from "prop-types";

function SubmitButton({ children }) {
  // this is proptypes for children
  SubmitButton.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
  };
  return (
    <button
      type="submit"
      className="h-10 w-20 text-white rounded-lg bg-green-400 hover:bg-green-500 transition-all"
    >
      {children}
    </button>
  );
}

export default SubmitButton;
