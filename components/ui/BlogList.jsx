import React from 'react';
import BlogItem from './BlogItem';
import { map } from 'lodash';

const BlogList = ({ items }) => (
  <div>
    {
      map(
        items,
        (item, key) => (
          <div key={key}>
            <BlogItem {...item}/>
          </div>
        )
      )
    }
  </div>
);

export default BlogList;
