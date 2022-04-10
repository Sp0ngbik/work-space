import { combineReducers } from "redux";
import addElement from "./addElement";
import { filterElements } from "./filterElements";
export const reducer = combineReducers({
  addElement,
  filterElements,
});
