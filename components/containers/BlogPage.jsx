import React, { Component } from 'react';
import { update } from 'react-addons-update';
import { findIndex, map } from 'lodash';
import BlogList from '../ui/BlogList';
import PieChart from '../ui/PieChart';
import { items } from '../../constants/items';

class BlogPage extends Component {
  constructor(props) {
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
    const itemIdx = findIndex(
      this.state.items, (item) => item.id == itemId
    );
    const newItems = update(
      this.state.items,
      {
        [itemIdx]: {
          meta: {
            likesCount: { $apply: (count) => count + 1 }
          }
        }
      }
    );
    this.setState({ items: newItems });
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        <BlogList items={items} likesHandler={this.likesHandler}/>
        <PieChart columns={this.chartData()} />
      </div>
    )
  }
}

export default BlogPage;
