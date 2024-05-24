import { useContext } from "react";
import { PostContext } from "../context/PostContext";
import { Link } from "react-router-dom";

const PostList = () => {
  const { posts } = useContext(PostContext);

  return (
    <div className="post-list" style={{width: '30%'}}>
      {posts.map((post) => (
        <Link to={`/${post?.id}`} key={post.id}>
          <p>{post.title}</p>
        </Link>
      ))}
    </div>
  );
};
export default PostList;
