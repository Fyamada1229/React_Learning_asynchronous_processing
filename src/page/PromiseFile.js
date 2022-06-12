import React from "react";

const PromiseFile = () => {
  const promise = new Promise(function (resolve, reject) {
    // 非同期処理
  });

  console.log(promise);
  return (
    <>
      <div>
        <h1>this is Promise file</h1>
      </div>
    </>
  );
};

export default PromiseFile;
