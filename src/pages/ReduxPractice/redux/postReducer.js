import { ASYNC_POST, CREATE_POST } from "./types";

const initialState = {
  posts: [],
  asyncPosts: [],
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST:
      //   return { ...state, posts: state.posts.concat(action.payload) } ; ПЕРВЫЙ СПОСОБ
      return { ...state, posts: [...state.posts, action.payload] };
    case ASYNC_POST:
      return { ...state, asyncPosts: action.payload };
    default:
      return state;
  }
};
