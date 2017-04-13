import React, { Component } from 'react';
import PostList from './PostList';

import {data} from '../../mock-data.js';

import styles from './styles.css'

class PostListContainer extends Component {
  constructor() {
    super();

    this.updateVote = this.updateVote.bind(this);

    this.state={
      posts: data.posts,
      orderby: 'newest'
    }
  }

  updateVote() {
    console.log('update that')
  }
  
  render() {
    return (
      <PostList 
        posts={this.state.posts}
        updateVote={this.updateVote}
      />
    );
  }
}

export default PostListContainer;
