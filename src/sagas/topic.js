import { takeEvery, call, put, select, takeLatest } from 'redux-saga/effects';
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

function* fechReplies(action) {
  try {
    const accesstoken = yield select(getAccesstoken) // 获取令牌
    // console.log(accesstoken)
    yield call(axios.post, `https://cnodejs.org/api/v1/topic/${action.payload.id}/replies`, {
      ...action.payload,
      accesstoken
    });
    Toast.info("回复话题成功", 1);
    const res = yield call(axios.get, `https://cnodejs.org/api/v1/topic/${action.payload.id}`, {params:{
      accesstoken
    }});
    yield put({type: "FETCH_TOPIC_SUCCEEDED_AGAIN", payload:{
      data:res.data.data
    }});
  } catch(e) {
    Toast.info("回复话题失败", 1);
  }
}

function* fechRepliesUp(action) {
  try {
    const accesstoken = yield select(getAccesstoken) // 获取令牌
    // console.log(accesstoken)
    const res = yield call(axios.post, `https://cnodejs.org/api/v1/reply/${action.payload.reply_id}/ups`, {
      accesstoken
    });
    if (res.data.action === 'up') {
      Toast.info("评论点赞成功", 1);
    } else {
      Toast.info("评论取消点赞成功", 1);
    }
    const resAgain = yield call(axios.get, `https://cnodejs.org/api/v1/topic/${action.payload.topic_id}`, {params:{
      accesstoken
    }});
    yield put({type: "FETCH_TOPIC_SUCCEEDED_AGAIN", payload:{
      data:resAgain.data.data
    }});
  } catch(e) {
    Toast.info('评论点赞操作失败', 1);
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

function* watchFetchReplies() { // 新建评论
  yield takeLatest('FETCH_REPLIES_REQUEST', fechReplies);
}

function* watchFetchRepliesUp() { // 评论点赞
  yield takeLatest('FETCH_REPLIES_UP_REQUEST', fechRepliesUp);
}

export const topicSagas = [
  watchFetchTopic(),
  watchFetchCollect(),
  watchFetchDeCollect(),
  watchFetchReplies(),
  watchFetchRepliesUp()
]
