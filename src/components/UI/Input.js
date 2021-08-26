import React from "react";
import PropTypes from "prop-types";

function Input({ onChange, type, placeholder, className }) {
  // this is proptypes for children
  Input.propTypes = {
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
  };

  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

export default Input;
