import React, { Component } from 'react';
import BlogList from '../ui/BlogList';
import { items } from '../../constants/items';

class BlogPage extends Component {
  constructor(props) {
    super();
    this.state = { items };
  }

  render() {
    const { items } = this.state;
    return <BlogList items={items}/>;
  }
}

export default BlogPage;
