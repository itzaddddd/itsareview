import {GET_REVIEW, 
        ADD_REVIEW, 
        DELETE_REVIEW, 
        EDIT_REVIEW,
        GET_REVIEW_USER,
        GET_CATEGORY_REVIEW,
        GET_TAG_REVIEW,
        GET_USER_BY_ID
    } 
from '../constants'

const initialState = {
    review: {},
    category: [],
    tag: [],
    found_user: {}
}

export default function(state=initialState, action){
    switch(action.type){
        case GET_REVIEW:
            return {
                ...state,
                review: action.payload
            }
        case ADD_REVIEW:
            return {
                ...state,
                review: action.payload,
            }
        case GET_CATEGORY_REVIEW:
            return {
                ...state,
                category: action.payload
            }
        case GET_TAG_REVIEW:
            return {
                ...state,
                tag: action.payload
            }
        case GET_USER_BY_ID:
            return {
                ...state,
                found_user: action.payload
            }
        default:
            return state;
    }

}
