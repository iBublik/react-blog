import React from 'react';
import Image from './Image';
import TextBox from './TextBox';

const BlogItem = ({ image, text }) => (
  <div style={{ border: '1px solid black' }}>
    <Image {...image}/>
    <TextBox>{text}</TextBox>
  </div>
);

export default BlogItem;
