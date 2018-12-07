import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';

function* fetchTopic(action) {
  // console.log(action)
  try {
    const res = yield call(axios.get, `https://cnodejs.org/api/v1/topic/${action.payload.id}`);
    // console.log(res)
    yield put({type: "FETCH_TOPIC_SUCCEEDED", payload:{
      data:res.data.data
    }});
  } catch(e) {
    yield put({type: "FETCH_TOPIC_FAILURE", error: e.message});
  }
}

function* watchFetchTopic() {
  yield takeEvery('FETCH_TOPIC_REQUEST', fetchTopic);
}

export const topicSagas = [
  watchFetchTopic(),
]
