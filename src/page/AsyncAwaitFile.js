import React from "react";

const AsyncAwaitFile = () => {
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
    console.log(txt);
  };
  main();

  return (
    <>
      <div>
        <h1>this is AsyncAwait file</h1>
      </div>
    </>
  );
};

export default AsyncAwaitFile;
