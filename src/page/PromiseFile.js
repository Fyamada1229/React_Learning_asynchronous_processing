import React from "react";

const PromiseFile = () => {
  const promise = new Promise(function (resolve, reject) {
    // 非同期処理
    try {
      setTimeout(() => {
        console.log("非同期処理");

        resolve();
      }, 10000);
    } catch (e) {
      // 異常終了時の処理
      // returnの代わりに異常終了したことを表すrejectを返す
      reject();
    }
  });

  const asyncFunction = () => {
    return new Promise((resolve, reject) => {
      try {
        // 1秒後に"非同期処理"とコンソールに出力
        setTimeout(() => {
          console.log("非同期処理");
          const num = 1;
          // returnの代わりに正常終了したことを表すresolveを返す
          resolve(num);
        }, 3000);
        setTimeout(() => {
          const number = 8745;
          resolve(number);
        }, 3000);
      } catch (e) {
        // 異常終了時の処理
        // returnの代わりに異常終了したことを表すresolveを返す
        reject();
      }
    });
  };

  asyncFunction()
    .then((num) => {
      console.log(`resolve後の処理${num}`);
    })
    .then((number) => {
      console.log(`resolve後の処理${number}`);
    })
    .catch((e) => {
      console.log(`reject後の処理${e}`);
    });

  return (
    <>
      <div>
        <h1>this is Promise file</h1>
      </div>
    </>
  );
};

export default PromiseFile;
