import {
  takeEvery,
  call,
  put
} from 'redux-saga/effects';
import axios from 'axios';

function* fetchLogin(action) {
  // console.log(action)
  try {
    yield put({
      type: "FETCH_LOGIN_LOADING"
    });
    const res = yield call(axios.post, 'https://cnodejs.org/api/v1/accesstoken', action.payload);
    // console.log(res)
    sessionStorage.setItem('loginname', res.data.loginname);
    sessionStorage.setItem('accesstoken', action.payload.accesstoken);
    yield put({
      type: "FETCH_LOGIN_SUCCEEDED",
      payload: {
        data: {
          loginname: res.data.loginname,
          accesstoken: action.payload.accesstoken
        }
      }
    });
  } catch (e) {
    // console.log(e)
    yield put({
      type: "FETCH_LOGIN_FAILURE",
      error: e.message
    });
  }
}

function* watchFetchLogin() {
  yield takeEvery('FETCH_LOGIN_REQUEST', fetchLogin);
}

export const LoginSagas = [
  watchFetchLogin(),
]
