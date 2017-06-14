import React, { PropTypes } from 'react';
import { bind } from 'lodash';

class Like extends Component {
  constructor(props) {
    super();
    this.state = { likesCount: props.likesCount };
    this.handleClick = bind(this.handleClick, this);
  }

  handleClick() {
    this.setState({ likesCount: this.state.likesCount + 1 });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          Like! ({this.state.likesCount})
        </button>
      </div>
    );
  }
}

Like.propTypes = {
  likesCount: PropTypes.number
};

Like.defaultProps = {
  likesCount: 0
};
