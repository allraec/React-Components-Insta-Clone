import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = ({ likePost, posts }) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  return (
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */}
      {/* Check the implementation of Post to see what props it requires! */}
      {
        posts.map((post) => {
          return (
            <Post key={posts.id} likePost={likePost} post={post} />
          )
        }
        )
      }
    </div>
  );
};

export default Posts;
