import { createContext, useEffect, useState } from "react";

const PostContext = createContext();

const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((post) => setPosts(post));
  }, []);

  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostContext.Provider>
  );
};

export { PostContext, PostsProvider };
