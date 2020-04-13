import { SEARCH_REVIEW } from '../constants'
import axios from 'axios'

export const searchReview = ({rvTitle, rvContent}) => dispatch => {
    axios.get(`/search?rvTitle=${rvTitle}&rvContent=${rvContent}`)
    .then(res => dispatch({
        type: SEARCH_REVIEW,
        payload: res.data
    }))
    .catch(err => console.log(err)) 
}