import { all } from 'redux-saga/effects';
import { listSagas } from './list';
import { topicSagas } from './topic';
export default function* rootSage() {
  yield all([
    ...listSagas,
    ...topicSagas
  ])
}
