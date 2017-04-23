import React, { Component } from 'react';
import PostList from './PostList';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateVote, sortPopular, sortNewest } from '../../redux/actions';

import { data } from '../../mock-data';

import './styles.css'

class PostListContainer extends Component {
  // constructor() {
  //   super();

  //   this.updateVote = this.updateVote.bind(this);
  //   this.sortPopular = this.sortPopular.bind(this);
  //   this.sortNewest = this.sortNewest.bind(this);

  //   this.state={
  //     posts: data.posts,
  //     orderby: 'newest'
  //   }
  // }

  updateVote(post) {
    const upVotes = post.votes++;
    this.props.dispatch(updateVote(upVotes));
    // let moreVotes = post.votes++;
    // this.setState({
    //   votes: moreVotes
    // });
  }

  sortPopular(){
    this.props.dispatch(sortPopular());
    // let sortedPosts = posts.sort(function (a, b) {
    //   return b.votes - a.votes;
    // });
    // this.setState({
    //   orderby: 'popular',
    //   posts: sortedPosts
    // })
  }

  sortNewest() {
    this.props.dispatch(sortNewest());
    // let sortedPosts = posts.sort(function (a, b) {
    //   return b.id - a.id;
    // });
    // this.setState({
    //   orderby: 'newest',
    //   posts: sortedPosts
    // });
  }


  render() {
    return (
      <PostList
        posts={data.posts}
        updateVote={this.updateVote}
        sortPopular={() => this.sortPopular()}
        sortNewest={() => this.sortNewest()}
      />
    );
  }
}

export default connect()(PostListContainer);
