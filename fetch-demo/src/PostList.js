import React from "react";

const PostList = ({ posts, onSelected }) => (
  <div>
    <h1>Posts!</h1>

    <div>
      {posts.map(p => (
        <PostPreview post={p} key={p.id} onSelected={onSelected} />
      ))}
    </div>
  </div>
);

export default PostList;

const PostPreview = ({ post, onSelected }) => {
  const handleClick = e => {
    onSelected(post.id);
  };

  return (
    <div>
      <h2 onClick={handleClick}>{post.title}</h2>
    </div>
  );
};
