import {GET_REVIEW, 
        ADD_REVIEW, 
        DELETE_REVIEW, 
        EDIT_REVIEW,
        GET_REVIEW_USER
    } 
from '../constants'

const initialState = {
    review: {},
    review_user: []
}

export default function(state=initialState, action){
    switch(action.type){
        case GET_REVIEW:
            return {
                ...state,
                review: action.payload,
            }
        case ADD_REVIEW:
            return {
                ...state,
                review: action.payload,
            }
        case GET_REVIEW_USER:
            return {
                ...state,
                review_user: action.review_user
            }
        default:
            return state;
    }

}
