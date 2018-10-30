import React from "react";

const Post = ({ post, onSelected }) => {
  const handleClick = e => {
    onSelected(null);
  };

  return (
    <div>
      <span onClick={handleClick}>Go Back</span>
      <div>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    </div>
  );
};

export default Post;
