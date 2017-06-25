import React from 'react';
import PropTypes from 'prop-types';
import { map, omit } from 'lodash';
import { CardDeck } from 'reactstrap';
import BlogItem from 'components/ui/blog/Item';

const BlogList = ({ items, likesHandler }) => (
  <CardDeck className='mt-2'>
    {
      map(
        items,
        (item) => (
          <BlogItem {...item} likesHandler={likesHandler} key={item.id} />
        )
      )
    }
  </CardDeck>
);

const itemPropTypes = omit(BlogItem.propTypes, 'likesHandler');
BlogList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape(itemPropTypes)
  ),
  likesHandler: BlogItem.propTypes.likesHandler
};

export default BlogList;
