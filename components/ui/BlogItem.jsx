import React from 'react';
import PropTypes from 'prop-types';
import { assign, omit } from 'lodash';
import Image from './Image';
import TextBox from './TextBox';
import Like from './Like';
import BlogItemDetails from './BlogItemDetails';

const BlogItem = ({ id, image, text, meta, likesHandler }) => (
  <div style={{ border: '1px solid black' }}>
    <Image {...image}/>
    <BlogItemDetails {...meta}/>
    <TextBox>{text}</TextBox>
    <Like {...meta} clickHandler={() => likesHandler(id)}/>
  </div>
);

const likePropTypes = omit(Like.propTypes, 'clickHandler');
BlogItem.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.shape(Image.propTypes),
  text: PropTypes.string,
  meta: PropTypes.shape(
    assign({}, likePropTypes, BlogItemDetails.propTypes)
  ),
  likesHandler: Like.propTypes.clickHandler
};

export default BlogItem;
