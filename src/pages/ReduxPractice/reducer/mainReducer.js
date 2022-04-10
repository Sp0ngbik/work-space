import { combineReducers } from "redux";
import addElement from "./addElement";
import { filterElements } from "./filterElements";
import { axiosRequest } from "./axiosRequest";
export const reducer = combineReducers({
  addElement,
  filterElements,
  axiosRequest,
});
