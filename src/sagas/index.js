import { all } from 'redux-saga/effects';
import { listSagas } from './list';
import { topicSagas } from './topic';
import { UserSagas } from './user';
import { LoginSagas } from './login';
import { MsgSagas } from './message';
import { PublishSagas } from './publish';
export default function* rootSage() {
  yield all([
    ...listSagas,
    ...topicSagas,
    ...UserSagas,
    ...LoginSagas,
    ...MsgSagas,
    ...PublishSagas
  ])
}
