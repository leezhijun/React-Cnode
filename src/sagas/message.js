import { takeEvery, call, put, select } from 'redux-saga/effects';
import { getAccesstoken } from './selectors'
import axios from 'axios';

function* fetchMsg(action) {
  // console.log(action)
  try {
    const accesstoken = yield select(getAccesstoken) // 获取令牌
    const res = yield call(axios.get, 'https://cnodejs.org/api/v1/messages', {params:{
      accesstoken
    }});
    // console.log(res)
    yield put({type: "FETCH_MSG_SUCCEEDED", payload:{
      data:res.data.data
    }});
  } catch(e) {
    yield put({type: "FETCH_MSG_FAILURE", error: e.message});
  }
}

function* watchFetchMsg() {
  yield takeEvery('FETCH_MSG_REQUEST', fetchMsg);
}

export const MsgSagas = [
  watchFetchMsg(),
]
