import React from 'react';
import PropTypes from 'prop-types';
import { omit } from 'lodash';
import { Card, CardBlock, Col } from 'reactstrap';
import Image from 'components/ui/Image';
import TextBox from 'components/ui/TextBox';
import Like from 'components/ui/Like';
import BlogItemDetails from 'components/ui/blog/item/Details';

const BlogItem = ({ id, image, text, meta, likesHandler }) => (
  <Col sm='4' className='mb-2'>
    <Card block>
      <Image {...image} />
      <CardBlock>
        <BlogItemDetails {...meta} />
        <TextBox>{text}</TextBox>
        <Like {...meta} clickHandler={() => likesHandler(id)} />
      </CardBlock>
    </Card>
  </Col>
);

const likePropTypes = omit(Like.propTypes, 'clickHandler');
BlogItem.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.shape(Image.propTypes),
  text: PropTypes.string,
  meta: PropTypes.shape(
    { ...likePropTypes, ...BlogItemDetails.propTypes }
  ),
  likesHandler: Like.propTypes.clickHandler
};

export default BlogItem;
