import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';

function* fetchUser(action) {
  // console.log(action)
  try {
    const res = yield call(axios.get, `https://cnodejs.org/api/v1/user/${action.payload.loginname}`);
    // console.log(res)
    yield put({type: "FETCH_USER_SUCCEEDED", payload:{
      data:res.data.data
    }});
  } catch(e) {
    yield put({type: "FETCH_USER_FAILURE", error: e.message});
  }
}

function* watchFetchUser() {
  yield takeEvery('FETCH_USER_REQUEST', fetchUser);
}

export const UserSagas = [
  watchFetchUser(),
]
