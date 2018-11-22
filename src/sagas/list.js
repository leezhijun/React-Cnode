import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';

function* fetchList(action) {
  console.log(action)
  try {
    const data = yield call(axios.get, "https://cnodejs.org/api/v1/topics",{params:action.payload});
    console.log(data)
    //yield put({type: "FETCH_LIST_SUCCEEDED", data: data});
  } catch(e) {
    yield put({type: "FETCH_LIST_FAILURE", error: e.message});
  }
}

function* watchFetchList() {
  yield takeEvery('FETCH_TOPICS_REQUEST', fetchList);
}

export const listSagas = [
  watchFetchList(),
]
