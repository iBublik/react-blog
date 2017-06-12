import React, { PropTypes } from 'react';

const TextBox = ({ children }) => (
  <span>{children}</span>
);

TextBox.propTypes = {
  children: PropTypes.node
};

TextBox.defaultProps = {
  children: 'Insert content of text box component here'
};

export default TextBox;
