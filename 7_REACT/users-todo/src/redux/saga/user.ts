import { call, put, takeLatest, all } from "redux-saga/effects";
import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  User,
} from "@/types";

// Example API call
function fetchUserApi(): Promise<User> {
  return fetch("https://dummyjson.com/users").then((res) => res.json());
}

// Worker saga to handle FETCH_USER_REQUEST
function* fetchUser() {
  try {
    const user: User = yield call(fetchUserApi);
    yield put({ type: FETCH_USER_SUCCESS, payload: user });
  } catch (error: any) {
    yield put({ type: FETCH_USER_FAILURE, payload: error.message });
  }
}

// Watcher saga to watch for FETCH_USER_REQUEST
function* watchFetchUser() {
  yield takeLatest(FETCH_USER_REQUEST, fetchUser);
}

export function* userSaga() {
  yield all([watchFetchUser()]);
}
