import {
    GET_REVIEW,
    ADD_REVIEW,
    DELETE_REVIEW,
    EDIT_REVIEW
} from '../constants'
import axios from 'axios'

export const addReview = ({rvTitle, rvChar, rvContent, rvType, rvTag, rvStatus, rvSource},userName) => dispatch => {
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    const body = JSON.stringify({userName, rvTitle, rvChar, rvContent, rvType, rvTag, rvStatus, rvSource});

    axios.post('/review/create', body, config)
        .then( res => dispatch({
            type: ADD_REVIEW,
            payload: res.data
        }))
        .catch(err => {
            console.log(err)
        })
}