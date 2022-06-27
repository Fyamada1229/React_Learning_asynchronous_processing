import { useState, useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { getPosts } from "../store/postsReducer";
import { Link } from "react-router-dom";

const New = (props) => {
  const dispatch = useDispatch();

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

//const mapDispatchToProps = (dispatch) => ({ postNew });

export default connect(null, null)(New);
