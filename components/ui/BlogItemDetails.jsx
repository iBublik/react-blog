import React from 'react';
import PropTypes from 'prop-types';
import { formatDate } from '../../helpers/Date';

const BlogItemDetails = ({ author, createdAt, updatedAt }) => (
  <div>
    <p>Posted by {author} on {formatDate(createdAt)}</p>
    {
      updatedAt &&
      <p> (last updated on {formatDate(updatedAt)})</p>
    }
  </div>
);

BlogItemDetails.propTypes = {
  author: PropTypes.string,
  createdAt: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date)
  ]).isRequired,
  updatedAt: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date)
  ])
};

BlogItemDetails.defaultProps = {
  author: 'Anonymous'
};
