// Build a "like button" component using React 16. The component should be the default export (use export default).

// Requirements:
// 1. There should be a like button:

// The content of the like button should be in the following format: "Like | 100", where 100 is the total number of likes.
// It should have a "like-button" class.
// Wrap the number of likes in a span with a "likes-counter" class.
// The initial number of likes in the counter should be 100.
// 2. Users can add a like. By clicking the button:

// The number of likes should increase by one.
// Like button should have "liked" class in addition to the "like-button" class (you can use the classnames tool for that).
// 3. Users can undo their like by clicking again on the button:

// The counter should decrease by one.
// "liked" class should be removed.

import cx from 'classnames';
import { Component } from 'react';

export default class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 100,
      liked: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (!this.state.liked) {
      this.setState((prevState) => ({
        likes: prevState.likes + 1,
        liked: !prevState.liked,
      }));
    } else {
      this.setState((prevState) => ({
        likes: prevState.likes - 1,
        liked: !prevState.liked,
      }));
    }
  }
  render() {
    return (
      <>
        <div>
          <button
            className={`like-button ${this.state.liked && 'liked'}`}
            onClick={this.handleClick}
          >
            <span>Like | </span>
            <span className="likes-counter">{this.state.likes}</span>
          </button>
        </div>
        <style>{`
                    .like-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:  #585858;
                    }
                   .liked {
                        font-weight: bold;
                        color: #1565c0;
                   }
                `}</style>
      </>
    );
  }
}
