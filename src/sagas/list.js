import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';

function* fetchList(action) {
  // console.log(action)
  try {
    const res = yield call(axios.get, "https://cnodejs.org/api/v1/topics",{params:action.payload});
    yield put({type: "FETCH_LIST_SUCCEEDED", payload:{
      tab:action.payload.tab,
      data:res.data.data
    }});
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
