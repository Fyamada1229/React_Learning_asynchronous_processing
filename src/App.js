import React from "react";
import PromiseFile from "./page/PromiseFile";
import { useState, useEffect } from "react";
import AsyncAwaitFile from "./page/AsyncAwaitFile";
import Post from "./page/Post";
import AxiosFile from "./page/AxiosFile";
import { connect, useSelector, useDispatch } from "react-redux";

const App = ({ count, increase, decreate }) => {
  console.log(useSelector((state) => state.postsReducer.posts.decreate));
  return (
    <>
      <div className="App">
        <div>
          <h1></h1>
          <Post />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return { count: state.countReducer.count };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increase: () => dispatch({ type: "INCREASE_COUNT" }),
    decreate: () => dispatch({ type: "DECREASE_COUNT" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
