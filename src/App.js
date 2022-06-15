import React from "react";
import PromiseFile from "./page/PromiseFile";
import AsyncAwaitFile from "./page/AsyncAwaitFile";
import AxiosFile from "./page/AxiosFile";

const App = () => {
  return (
    <>
      <div className="App">
        <h1>Hello App</h1>
      </div>
      <AxiosFile />
    </>
  );
};

export default App;
