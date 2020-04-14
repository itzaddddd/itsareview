import {
    GET_READ_LATER,
    ADD_READ_LATER,
    DELETE_READ_LATER,
    DELETE_READ_LATER_COMPLETED
} from '../constants'
import axios from 'axios'
import store from '../store'
export const addReadLater = (review_id, callback) => dispatch => {
    axios.put(`/user/${store.getState().user.user._id}/readlater?_method=PUT`,{review_id})
        .then(res => dispatch({
            type: ADD_READ_LATER,
            payload: res.data
        }))
        .catch(err=>console.log(err))
    if(typeof callback === "function") callback();
}
    

export const deleteReadLater = (review_id, callback) => dispatch => {
    axios.delete(`/user/${store.getState().user.user._id}/readlater?_method=DELETE`,{data:{review_id}})
        .then(res => dispatch({
            type: DELETE_READ_LATER,
            payload: res.data
        }))
        .catch(err=>console.log(err))
    if(typeof callback === "function") callback();
}

export const getReadLater = (callback) => dispatch => {
    axios.get(`/user/${store.getState().user.user._id}/readlater`)
        .then(res => dispatch({
            type: GET_READ_LATER,
            payload: res.data
        }))
        .catch(err=>console.log(err))
    if(typeof callback === "function") callback();
}

