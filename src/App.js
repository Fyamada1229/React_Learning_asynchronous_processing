import React from "react";
import PromiseFile from "./page/PromiseFile";
import { useState, useEffect } from "react";
import AsyncAwaitFile from "./page/AsyncAwaitFile";
import Post from "./page/Post";
import AxiosFile from "./page/AxiosFile";
import { connect, useSelector, useDispatch } from "react-redux";

const App = ({ count, increase, decreate }) => {
  return (
    <>
      <div className="App">
        <h1>Hello App</h1>
        <p>Count:{count}</p>
        <button onClick={increase}>Up</button>
        <button onClick={decreate}>Down</button>
      </div>
      <div>
        <h1></h1>
        <Post />
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
