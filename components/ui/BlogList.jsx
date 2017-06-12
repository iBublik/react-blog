import React, { PropTypes } from 'react';
import { map } from 'lodash';
import BlogItem from './BlogItem';

const BlogList = ({ items }) => (
  <div>
    {
      map(
        items,
        (item) => (
          <div key={item.id}>
            <BlogItem {...item}/>
          </div>
        )
      )
    }
  </div>
);

BlogList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape(BlogItem.propTypes)
  )
};

export default BlogList;
