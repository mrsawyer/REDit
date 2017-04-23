import React from 'react';
import Post from '../../components/Post';
import PostToolbar from '../../components/PostToolbar';
import PropTypes from 'prop-types';

const PostList = ({posts, updateVote, sortNewest, sortPopular}) => {
  return (
    <div style={{}}>
      <div style={{marginLeft:'256px'}}>
        <PostToolbar 
          sortPopular={sortPopular}
          sortNewest={sortNewest}
        />
        <div style={{margin:'10px'}}>
          {posts.map((post) => (
            <Post
              key={post.id}
              post={post}
              updateVote={updateVote}
            />
          ))}
          </div>
      </div>
    </div>
  );
};

// PostList.propTypes = {
//   posts: PropTypes.array
// }

export default PostList;
