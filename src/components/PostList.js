import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts(); // calling our action creator
  }

  // A custom helper method
  renderList() {
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          </div>
        </div>
      );
    })
  }

  render() {
    // console.log(this.props.posts);
    return <div className="ui relaxed diveded list">
      {this.renderList()}
    </div>;
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts}
}


// the first argument is our data, which we return from mapStateToProps (posts)
// the second argument is the action creater
export default connect(mapStateToProps,{ fetchPosts: fetchPosts })(PostList);
