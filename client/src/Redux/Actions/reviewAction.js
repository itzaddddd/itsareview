import {
    GET_REVIEW,
    ADD_REVIEW,
    DELETE_REVIEW,
    EDIT_REVIEW,
    GET_REVIEW_USER
} from '../constants'
import axios from 'axios'

export const getReview = (id, callback) => dispatch => {
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
