import React from 'react';
import PropTypes from 'prop-types';
import { map, omit } from 'lodash';
import BlogItem from './BlogItem';

const BlogList = ({ items, likesHandler }) => (
  <div>
    {
      _.map(
        items,
        (item) => <BlogItem {...item} likesHandler={likesHandler} key={item.id}/>
      )
    }
  </div>
);

const itemPropTypes = omit(BlogItem.propTypes, 'likesHandler');
BlogList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape(itemPropTypes)
  ),
  likesHandler: BlogItem.propTypes.likesHandler
};

export default BlogList;
