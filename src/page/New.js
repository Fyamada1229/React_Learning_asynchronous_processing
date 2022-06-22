import React from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const New = (props) => {
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
        <h1>welcome</h1>
        <h2>This is New file.</h2>
        <Link to="/new">新規画面</Link>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  count: state.countReducer.count,
});

const mapDispatchToProps = (dispatch) => ({
  increase: () => dispatch({ type: "INCREASE_COUNT" }),
  decreate: () => dispatch({ type: "DECREASE_COUNT" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(New);
