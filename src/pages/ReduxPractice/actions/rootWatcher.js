import { all } from "redux-saga/effects";
import {
  sagaTodoArrayWatcher,
  sagaWatcher,
  sliderWatcher,
  userWatcher,
} from "../saga/sagaCounter";
//по сути комбинатор watcher'ов
function* rootWatcher() {
  yield all([
    sagaWatcher(),
    userWatcher(),
    sliderWatcher(),
    sagaTodoArrayWatcher(),
  ]);
}

export default rootWatcher;
