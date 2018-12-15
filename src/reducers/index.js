import { test } from './test'
import { topics } from './topics'
import { topic } from './topic'
import { user } from './user'
import { login } from './login'
import { message } from './message'
import { tab } from './tab'
import { combineReducers } from 'redux'
export default combineReducers({
 test,
 topics,
 topic,
 user,
 login,
 message,
 tab
})
