import { all } from "redux-saga/effects";
import { sagaWatcher, userWatcher } from "../saga/sagaCounter";
//по сути комбинатор watcher'ов
function* rootWatcher() {
  yield all([sagaWatcher(), userWatcher()]);
}

export default rootWatcher;
