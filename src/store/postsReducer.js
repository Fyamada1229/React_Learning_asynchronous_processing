import { useState, useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";

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

// Redux Thunks 使用
export const getPosts = () => {
  return async (dispatch) => {
    const res = await fetch("http://localhost:8000/api/list");
    const data = await res.json();
    dispatch({
      type: "GET_POST_DATA",
      payload: data,
    });
  };
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
