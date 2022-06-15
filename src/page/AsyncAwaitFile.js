import React from "react";
import { connect, useSelector, useDispatch } from "react-redux";

const AsyncAwaitFile = ({ count, posts, increase, decreate }) => {
  //const posts = useSelector((state) => state);

  //const dispatch = useDispatch();
  // const increase = () => {
  //   dispatch({ type: "INCREASE_COUNT" });
  // };
  // const decreate = () => {
  //   dispatch({ type: "DECREASE_COUNT" });
  // };

  console.log(count);

  // 非同期処理
  const asyncFunction = async () => {
    try {
      return "resolve";
    } catch (e) {
      throw "reject";
    }
  };
  const main = async () => {
    const txt = await asyncFunction();
    //console.log(txt);
  };
  main();

  return (
    <>
      <div>
        <h1>this is AsyncAwait file</h1>
        <p>count:{count}</p>
        <button onClick={increase}>Up</button>
        <button onClick={decreate}>Down</button>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.countReducer.count,
    posts: state.postsReducer.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increase: () => dispatch({ type: "INCREASE_COUNT" }),
    decreate: () => dispatch({ type: "DECREASE_COUNT" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AsyncAwaitFile);
