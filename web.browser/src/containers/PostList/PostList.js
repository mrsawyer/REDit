import React from 'react';
import Post from '../../components/Post';
import PostToolbar from '../../components/PostToolbar';

const PostList = ({posts, updateVote}) => {
  return (
    <div style={{}}>
    <div style={{marginLeft:'256px'}}>
      <PostToolbar />
      <div style={{margin:'10px'}}>
        {posts.map((post) => (
          <Post
            key={post.id}
            post={post}
            updatVote={updateVote}
          />
        ))}
        </div>
    </div>
    </div>
  )
}

export default PostList;