import { combineReducers } from 'redux'
import loginReducer from './loginReducer'
import { routerReducer } from 'react-router-redux'
import userReducer from './userReducer'
import { reducer as formReducer } from 'redux-form'
import organizationReducer from './organizationReducer'
import RecruitReducer from './RecruitReducer'
import CommentReducer from './CommentReducer'
const recruitmentApp = combineReducers({
  loginReducer: loginReducer,
  userReducer: userReducer,
  organizationReducer: organizationReducer,
  recruitReducer: RecruitReducer,
  commentReducer: CommentReducer,
  router: routerReducer,
  form: formReducer,

})

export default recruitmentApp