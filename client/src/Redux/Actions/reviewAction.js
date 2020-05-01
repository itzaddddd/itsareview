import {
    GET_REVIEW,
    ADD_REVIEW,
    DELETE_REVIEW,
    EDIT_REVIEW,
    GET_REVIEW_USER,
    GET_CATEGORY_REVIEW,
    GET_TAG_REVIEW,
    GET_USER_BY_ID,
    GET_COMMENT,
    ADD_COMMENT,
    DELETE_COMMENT
} from '../constants'
import axios from 'axios'
import store from '../store'

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
    console.log('rvImage length',rvImageUrl.length)

    const body = JSON.stringify({userName, rvTitle, rvChar, rvContent, rvImageUrl, rvType, rvTag, rvStatus, rvSource});
    console.log('body ',body.rvImageUrl)
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
        type: DELETE_REVIEW,
        payload: res.data
    }))
    .catch(err => console.log(err))
    if(typeof callback === "function") callback();
}

export const addComment = (commentPost, user_id) => (dispatch, getState) => {
    axios.post(`/review/${getState().review.review._id}/comment`,{commentPost:commentPost,user_id:user_id})
        .then(res => dispatch({
            type: ADD_COMMENT,
            payload: res.data
        }))
        .catch(err => console.log(err))
}

export const deleteComment = (comment_id) => (dispatch,getState) => {
    axios.post(`/review/${getState().review.review._id}/comment?_method=DELETE`,{comment_id:comment_id})
        .then(res => dispatch({
            type: DELETE_COMMENT,
            payload: res.data
        }))
        .catch(err => console.log(err))
}

export const getCategory = (category, callback) => dispatch => {
    if(typeof callback === "function") callback();
    axios.get(`/review/category?category=${category}`)
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
    axios.get(`/review/tag?tag=${encodeURIComponent(tag)}`)
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
