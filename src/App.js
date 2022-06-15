import React from "react";
import PromiseFile from "./page/PromiseFile";
import AsyncAwaitFile from "./page/AsyncAwaitFile";
import AxiosFile from "./page/AxiosFile";
import { connect } from "react-redux";

const App = (props) => {
  const { count } = props;

  return (
    <>
      <div className="App">
        <h1>Hello App</h1>
      </div>
      <p>Count:{count}</p>
      <AsyncAwaitFile />
    </>
  );
};

const mapStateToProps = (state) => {
  return { count: state.count };
};

export default connect(mapStateToProps)(App);
