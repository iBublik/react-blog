import React from 'react';
import PropTypes from 'prop-types';
import { CardText } from 'reactstrap';

const TextBox = ({ children }) => (
  <CardText>{children}</CardText>
);

TextBox.propTypes = {
  children: PropTypes.node
};

TextBox.defaultProps = {
  children: 'Insert content of text box component here'
};

export default TextBox;
