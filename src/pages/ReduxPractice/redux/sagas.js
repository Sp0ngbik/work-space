import axios from "axios";
import { takeEvery, put, call } from "redux-saga/effects";
import { hideLoader, showAlert, showLoader } from "./action";
import { ASYNC_POST, REQUEST_POST } from "./types";

export function* sagaWatcher() {
  yield takeEvery(REQUEST_POST, sagaWorker);
}

function* sagaWorker() {
  try {
    yield put(showLoader());
    const payload = yield call(AsyncPosts);
    yield put({ type: ASYNC_POST, payload });
    yield put(hideLoader());
  } catch (e) {
    yield put(showAlert("Что-то пошло не так"));
    yield put(hideLoader());
  }
}

async function AsyncPosts() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );
  return await response.data;
}
