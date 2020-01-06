import React, { Component } from 'react';
import { bind, map } from 'lodash';
import { Container } from 'reactstrap';
import BlogList from 'components/ui/blog/List';
import PieChart from 'components/ui/PieChart';
import { items } from 'constants/items';

class BlogPage extends Component {
  constructor() {
    super();
    this.state = { items };
    this.likesHandler = bind(this.likesHandler, this);
  }

  chartData() {
    return map(
      this.state.items,
      (item) => [item.text, item.meta.likesCount]
    );
  }

  likesHandler(itemId) {
    const newItems = map(
      this.state.items,
      (item) => {
        if (item.id !== itemId) {
          return item;
        }
        return {
          ...item, meta: {
            ...item.meta, likesCount: item.meta.likesCount + 1
          }
        };
      }
    );
    this.setState({ items: newItems });
  }

  render() {
    const { items } = this.state;
    return (
      <Container>
        <BlogList items={items} likesHandler={this.likesHandler} />
        <PieChart columns={this.chartData()} />
      </Container>
    );
  }
}

export default BlogPage;
