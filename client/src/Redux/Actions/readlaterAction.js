import {
    GET_READ_LATER,
    ADD_READ_LATER,
    DELETE_READ_LATER
} from '../constants'
import axios from 'axios'
import store from '../store'
export const addReadLater = review => dispatch => {
    axios.post(`/user/${store.getState().user.user._id}/readlater`,review)
        .then(res => dispatch({
            type: ADD_READ_LATER,
            payload: res.data,
            new_added: review
        }))
}

export const getReadLater = () => dispatch => {
    
}