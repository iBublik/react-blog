import React from 'react';
import PropTypes from 'prop-types';
import { formatDate } from 'helpers/date';

const BlogItemDetails = ({ author, createdAt, updatedAt }) => (
  <small className='text-muted'>
    <p>Posted by {author} on {formatDate(createdAt)}</p>
    {
      updatedAt &&
      <p> (last updated on {formatDate(updatedAt)})</p>
    }
  </small>
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

export default BlogItemDetails;
