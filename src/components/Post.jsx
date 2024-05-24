import { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PostContext } from "../context/PostContext";

const Post = () => {
  const { postId } = useParams();
  const {posts}= useContext(PostContext)
  const post = posts?.find(p=>p?.id ===parseInt(postId))

  return <div className="post">
    {!post ?
        <p>No post</p>
    :
    <div>
        <span>{post.id}</span>
        <h4>{post?.title}</h4>
        <p>{post?.body}</p>
        <Link to='/'>Home</Link>
        </div>}
  </div>;
};
export default Post;
