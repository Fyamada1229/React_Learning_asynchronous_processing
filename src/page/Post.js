import { useState, useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";

const Post = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postsReducer.posts);
  const post = useSelector((state) => state);

  console.log(post);

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch("http://localhost:8000/api/list");
      const data = await res.json();
      dispatch({
        type: "GET_POST_DATA",
        payload: data,
      });
    };
    getPosts();
  }, [dispatch]);

  const dervice = posts.dervice;

  return (
    <div>
      <h1>Post</h1>
      <ul>
        {dervice.map((post) => (
          <li key={post.id}>{post.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Post;
