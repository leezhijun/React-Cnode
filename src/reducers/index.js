import { test } from './test'
import { topics } from './topics'
import { topic } from './topic'
import { user } from './user'
import { login } from './login'
import { combineReducers } from 'redux'
export default combineReducers({
 test,
 topics,
 topic,
 user,
 login
})
