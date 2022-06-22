import { useState, useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { getPosts } from "../store/postsReducer";

const Post = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postsReducer.posts);
  const dervice = posts?.dervice;

  // Redux Thunksを使用getPostsを呼び出している
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  // Redux Thunks なしの場合
  //   useEffect(() => {
  //     const getPosts = async () => {
  //       const res = await fetch("http://localhost:8000/api/list");
  //       const data = await res.json();
  //       dispatch({
  //         type: "GET_POST_DATA",
  //         payload: data,
  //       });
  //     };
  //     getPosts();
  //   }, [dispatch]);

  console.log(dervice);

  return (
    <div>
      <h1>dervice</h1>
      <ul>
        {dervice?.map((post) => (
          <li key={post.id}>{post.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Post;
