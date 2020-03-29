import {
    GET_REVIEW,
    ADD_REVIEW,
    DELETE_REVIEW,
    EDIT_REVIEW,
    GET_REVIEW_USER,
    GET_CATEGORY_REVIEW,
    GET_TAG_REVIEW,
    GET_USER_BY_ID
} from '../constants'
import axios from 'axios'

export const getReview = (id, callback) => (dispatch,getState) => {
    if(typeof callback === "function") callback();
    axios.get(`/review/${id}`)
        .then(res => dispatch({
            type: GET_REVIEW,
            payload: res.data
        }))
        .catch(err => {
            console.log(err)
        })
}

export const addReview = ({rvTitle, rvChar, rvContent, rvImageUrl, rvType, rvTag, rvStatus, rvSource},userName,callback) => dispatch => {
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    const body = JSON.stringify({userName, rvTitle, rvChar, rvContent, rvImageUrl, rvType, rvTag, rvStatus, rvSource});

    axios.post('/review/create', body, config)
        .then( res => dispatch({
            type: ADD_REVIEW,
            payload: res.data
        })        
        )
        .catch(err => {
            console.log(err)
        })
    
    if(typeof callback === "function") callback();
}

export const getCategory = (id, callback) => dispatch => {
    if(typeof callback === "function") callback();
    
    axios.get(`/review/category/${id}`)
        .then( res => dispatch({
            type: GET_CATEGORY_REVIEW,
            payload: res.data
        }))
        .catch( err => {
            console.log(err)
        })
}

export const getTag = (tag, callback) => dispatch => {
    if(typeof callback === "function") callback();
    
    axios.get(`/review/tag/${tag}`)
        .then( res => dispatch({
            type: GET_TAG_REVIEW,
            payload: res.data
        }))
        .catch( err => {
            console.log(err)
        })
}

export const getUserById = id => dispatch => {
    axios.get(`/user/${id}`)
        .then(res => dispatch({
            type: GET_USER_BY_ID,
            payload: res.data
        }))
        .catch( err => {
            console.log(err)
        })
}
