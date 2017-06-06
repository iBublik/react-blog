import React from 'react';

const Image = ({ src, width, height, alt }) => (
  <img {...{ src, width, height, alt }}/>
);

export default Image;
