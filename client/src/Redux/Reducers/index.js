import { combineReducers } from 'redux'
import userReducer from './userReducer'
import errorReducer from './errorReducer'
import reviewReducer from './reviewReducer'

export default combineReducers({
    user: userReducer,
    error: errorReducer,
    review: reviewReducer
});