import React from 'react';
import PropTypes from 'prop-types';
import { CardImg } from 'reactstrap';

const Image = ({ src, width, height, alt }) => (
  <CardImg {...{ src, width, height, alt }} top className='mt-2' />
);

Image.propTypes = {
  src: PropTypes.string,
  height: PropTypes.oneOfType([
    PropTypes.number, PropTypes.string
  ]),
  width: PropTypes.oneOfType([
    PropTypes.number, PropTypes.string
  ]),
  alt: PropTypes.string
};

/* eslint-disable max-len */
Image.defaultProps = {
  src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png',
  width: 100,
  height: 100,
  alt: 'No image available'
};

export default Image;
