import React from 'react';
import PropTypes from 'prop-types';

const Like = ({ likesCount, clickHandler }) => (
  <div>
    <button onClick={clickHandler}>
      Like! ({likesCount})
    </button>
  </div>
);

Like.propTypes = {
  likesCount: PropTypes.number,
  clickHandler: PropTypes.func.isRequired
};

Like.defaultProps = {
  likesCount: 0
};
