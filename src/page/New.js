import { useState, useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { getPosts } from "../store/postsReducer";
import { Link } from "react-router-dom";

const New = (props) => {
  const dispatch = useDispatch();
  const dervice = props.posts.dervice;
  console.log(dervice);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      <div>
        <h1>welcome</h1>
        <h2>This is New file.</h2>
        <Link to="/">TOP画面</Link>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  posts: state.postsReducer.posts,
});

const mapDispatchToProps = (dispatch) => ({
  increase: () => dispatch({ type: "INCREASE_COUNT" }),
  decreate: () => dispatch({ type: "DECREASE_COUNT" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(New);
