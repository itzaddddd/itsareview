import {combineReducers} from 'redux';
import userReducer from './loginUser';

const reducers = combineReducers({
    user: userReducer
});

export default reducers;