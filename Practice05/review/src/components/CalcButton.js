import React from 'react';
import PropTypes from 'prop-types';


function showNotImplemented() {
  console.warn('This function is not implemented yet.');
}

const CalcButton = (props) => {
  const { className, buttonName, children, onClick } = props;
  const extraClass = className || '';
  const ButtonClass = buttonName || '';

  return (
    <button
      className={`calc-btn ${ButtonClass} ${extraClass}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};


CalcButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

CalcButton.defaultProps = {
  onClick: showNotImplemented,
};

export default CalcButton;
