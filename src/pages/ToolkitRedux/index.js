import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import toolkitReducer from "./toolkitReducer";
import toolkitSlice from "./toolkitSlice";

// export const mainReducer = combineReducers({
//   toolkit: toolkitReducer,
// });
export const mainReducer = combineReducers({
  toolkit: toolkitSlice,
});
export const store = configureStore({
  reducer: mainReducer,
});
