import React from 'react';
import { assign } from 'lodash';
import Image from './Image';
import TextBox from './TextBox';
import Like from './Like';
import BlogItemDetails from './BlogItemDetails';

const BlogItem = ({ image, text, meta }) => (
  <div style={{ border: '1px solid black' }}>
    <Image {...image}/>
    <BlogItemDetails {...meta}/>
    <TextBox>{text}</TextBox>
    <Like {...meta}/>
  </div>
);

BlogItem.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.shape(Image.propTypes),
  text: PropTypes.string,
  meta: PropTypes.shape(
    assign({}, Like.propTypes, BlogItemDetails.propTypes)
  )
};

export default BlogItem;
