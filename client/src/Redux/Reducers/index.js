import { combineReducers } from 'redux'
import userReducer from './userReducer'
import errorReducer from './errorReducer'
import reviewReducer from './reviewReducer'
import readLatereReducer from './readLaterReducer'
import searchReducer from './searchReducer'

export default combineReducers({
    user: userReducer,
    error: errorReducer,
    review: reviewReducer,
    readLater: readLatereReducer,
    search: searchReducer

});