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
import store from '../store'

export const getReview = (id, callback) => (dispatch,getState) => {
    if(typeof callback === "function") callback();
    console.log('id from action : ',id)
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

export const editReview = ({rvTitle, rvChar, rvContent, /*rvImageUrl,*/ rvType, rvTag, rvStatus, rvSource},userName,callback) => dispatch => {
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    const body = JSON.stringify({userName, rvTitle, rvChar, rvContent, /*rvImageUrl,*/ rvType, rvTag, rvStatus, rvSource});

    axios.put(`/review/${store.getState().review.review._id}/edit?_method=PUT`, body, config)
        .then( res => dispatch({
            type: EDIT_REVIEW,
            payload: res.data
        })        
        )
        .catch(err => {
            console.log(err)
        })
    
    if(typeof callback === "function") callback();
}

export const deleteReview = (id, callback) => dispatch => {
    axios.delete(`/review/${id}?_method=DELETE`)
    .then( res => dispatch({
        type: DELETE_REVIEW
    }))

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
