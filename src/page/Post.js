import React, { useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { getPosts } from "../store/postsReducer";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const Post = (props) => {
  const dispatch = useDispatch();
  const dervice = props.posts.dervice;
  console.log(dervice);
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

  return (
    <div>
      <h1>dervice</h1>
      <Link to="/new" style={{ textDecoration: "none", color: "black" }}>
        <Button variant="contained" disableElevation>
          新規画面
        </Button>
      </Link>
      <ul>
        {dervice?.map((post) => (
          <li key={post.id}>{post.name}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.postsReducer.posts,
});

const mapDispatchToProps = (dispatch) => {
  return {
    increase: () => dispatch({ type: "INCREASE_COUNT" }),
    decreate: () => dispatch({ type: "DECREASE_COUNT" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
