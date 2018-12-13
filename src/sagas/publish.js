import {
  takeLatest,
  call,
  select
} from 'redux-saga/effects';
import axios from 'axios';
import {
  Toast
} from "antd-mobile";
import {
  getAccesstoken
} from './selectors'

function* fetchPublish(action) {
  // console.log(action)
  try {
    const accesstoken = yield select(getAccesstoken) // 获取令牌
    const res = yield call(axios.post, 'https://cnodejs.org/api/v1/topics', {
      tab: action.payload.tab,
      title: action.payload.title,
      content: action.payload.content,
      accesstoken
    });
    console.log(res)
    const history = action.payload.history
    Toast.info("话题发布成功", 1);
    history.push(`/topic/${res.data.topic_id}`)
  } catch (e) {
    Toast.info("话题发布失败", 1);
  }
}

function* watchFetchPublish() {
  yield takeLatest('FETCH_PUBLISH_REQUEST', fetchPublish);
}

export const PublishSagas = [
  watchFetchPublish(),
]
