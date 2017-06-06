import React, { Component } from 'react';
import BlogList from '../ui/BlogList';

const items = [
  {
    image: {
      src: 'https://cdn.worldvectorlogo.com/logos/react.svg',
      width: 100,
      height: 100,
      alt: 'React Logo'
    },
    text: 'Hello from React'
  },
  {
    image: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg',
      width: 100,
      height: 100,
      alt: 'Ruby Logo'
    },
    text: 'Hello from Ruby'
  },
  {
    image: {
      src: 'https://apm.scoutapp.com/assets/beta_invites/elixir_logo-599729344fee4048a167a3597d318185e214b8b843c04388f05aa63ad38852f9.png',
      width: 100,
      height: 100,
      alt: 'Elixir Logo'
    },
    text: 'Hello from Elixir'
  }
];

class BlogPage extends Component {
  constructor(props) {
    super(props);
    this.state = { items };
  }

  render() {
    const { items } = this.state;
    return <BlogList items={items}/>;
  }
}

export default BlogPage;
