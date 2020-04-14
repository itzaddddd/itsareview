import { SEARCH_REVIEW } from '../constants'
import axios from 'axios'

export const searchReview = (search) => dispatch => {


    
    axios.get(`/search`)
    .then(res => dispatch({
        type: SEARCH_REVIEW,
        payload: res.data
    }))
    .catch(err => console.log(err)) 
}