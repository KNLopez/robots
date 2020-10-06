import { all, put } from "redux-saga/effects";
import { fetchUserList } from "./actions";

export function* fetchUsers() {
  const users = yield fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((res) => res.json())
    .then((res) => res);
  yield put(fetchUserList(users));
}

export default function* rootSaga() {
  yield all([fetchUsers()]);
}
