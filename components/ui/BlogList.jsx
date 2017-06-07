import React from 'react';
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

export default BlogList;
