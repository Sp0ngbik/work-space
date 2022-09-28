import axios from "axios";
import { put, takeEvery, call } from "redux-saga/effects";
import {
  decrementAction,
  getSagaUsers,
  incrementAction,
  sagaVlad,
  sliderAction,
} from "../actions/actions";
import {
  ASYNC_SAGA_DECREMENT,
  ASYNC_SAGA_INCREMENT,
  ASYNC_SAGA_USERS,
  ASYNC_SAGA_SLIDER,
  SAGA_ASYNC_VLAD,
} from "../types/types";
//put своего рода диспатч для синхронных экшн
//call возвращает данные которые прилетают в промисе(подобие async,await)
const delay = (ms) => {
  return new Promise((res) => setTimeout(res, ms));
};

export function* vladNameWorker() {
  yield delay(1000);
  yield put(sagaVlad("Vlad"));
}

export function* incrementWorker() {
  yield delay(1000);
  yield put(incrementAction());
}

function* decrementWorker() {
  yield delay(1000);
  yield put(decrementAction());
}

function* axiosUserWorker() {
  const serverRequest = () => {
    return axios.get("https://jsonplaceholder.typicode.com/users");
  };
  let data = yield call(serverRequest); //call ждет выполнение промиса.
  yield put(getSagaUsers(data.data));
}

function* sagaSliderWorker() {
  const payload = [
    "https://cdn3.iconfinder.com/data/icons/feather-5/24/file-text-512.png",
    "https://cdn3.iconfinder.com/data/icons/feather-5/24/chrome-256.png",
    "https://cdn3.iconfinder.com/data/icons/feather-5/24/repeat-128.png",
  ];
  yield put(sliderAction(payload));
}

//все в rootWacher
export function* sagaWatcher() {
  yield takeEvery(ASYNC_SAGA_INCREMENT, incrementWorker);
  yield takeEvery(ASYNC_SAGA_DECREMENT, decrementWorker);
}

export function* sliderWatcher() {
  yield takeEvery(ASYNC_SAGA_SLIDER, sagaSliderWorker);
}

export function* userWatcher() {
  yield takeEvery(ASYNC_SAGA_USERS, axiosUserWorker);
}

export function* vladNameWatcher() {
  yield takeEvery(SAGA_ASYNC_VLAD, vladNameWorker);
}
