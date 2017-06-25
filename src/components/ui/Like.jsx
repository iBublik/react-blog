import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { FaThumbsUp } from 'react-icons/lib/fa';

const Like = ({ likesCount, clickHandler }) => (
  <Button onClick={clickHandler}>
    <FaThumbsUp />
    {likesCount}
  </Button>
);

Like.propTypes = {
  likesCount: PropTypes.number,
  clickHandler: PropTypes.func.isRequired
};

Like.defaultProps = {
  likesCount: 0
};

export default Like;
