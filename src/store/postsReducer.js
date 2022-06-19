import React from "react";

const initialState = {
  posts: [],
};

// Redux使用の際に使う
const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_POST_DATA":
      return { ...state, posts: action.payload };

    default:
      return state;
  }
};

// Redux使用しない場合
// const postsReducer = (
//   state = {
//     posts: [
//       { id: 1, title: "Reduxについて" },
//       {
//         id: 2,
//         title: "ReduxのHooksについて",
//       },
//     ],
//   }
// ) => {
//   return state;
// };

export default postsReducer;
