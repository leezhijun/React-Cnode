import { takeEvery, call, put, select } from 'redux-saga/effects';
import axios from 'axios';
import { Toast } from "antd-mobile";
import { getAccesstoken } from './selectors'

function* fetchTopic(action) {
  try {
    const accesstoken = yield select(getAccesstoken) // 获取令牌
    // console.log(accesstoken)
    const res = yield call(axios.get, `https://cnodejs.org/api/v1/topic/${action.payload.id}`, {params:{
      accesstoken
    }});
    // console.log(res)
    yield put({type: "FETCH_TOPIC_SUCCEEDED", payload:{
      data:res.data.data
    }});
  } catch(e) {
    // console.dir(e)
    yield put({type: "FETCH_TOPIC_FAILURE", error: e.message});
  }
}

function* fechCollect(action) {
  try {
    const accesstoken = yield select(getAccesstoken) // 获取令牌
    // console.log(accesstoken)
    yield call(axios.post, 'https://cnodejs.org/api/v1/topic_collect/collect', {
      topic_id:action.payload.id,
      accesstoken
    });
    Toast.info("收藏话题成功", 1);
    yield put({type: "COLLECT_SUCCEEDED"});
  } catch(e) {
    Toast.info("收藏话题失败", 1);
  }
}

function* fechDeCollect(action) {
  try {
    const accesstoken = yield select(getAccesstoken) // 获取令牌
    // console.log(accesstoken)
    yield call(axios.post, 'https://cnodejs.org/api/v1/topic_collect/de_collect', {
      topic_id:action.payload.id,
      accesstoken
    });
    Toast.info("取消收藏话题成功", 1);
    yield put({type: "DE_COLLECT_SUCCEEDED"});
  } catch(e) {
    Toast.info("取消收藏话题失败", 1);
  }
}

function* watchFetchTopic() { // 获取话题文章
  yield takeEvery('FETCH_TOPIC_REQUEST', fetchTopic);
}

function* watchFetchCollect() { // 收藏
  yield takeEvery('FETCH_COLLECT_REQUEST', fechCollect);
}

function* watchFetchDeCollect() { // 收藏取消
  yield takeEvery('FETCH_DE_COLLECT_REQUEST', fechDeCollect);
}

export const topicSagas = [
  watchFetchTopic(),
  watchFetchCollect(),
  watchFetchDeCollect()
]
