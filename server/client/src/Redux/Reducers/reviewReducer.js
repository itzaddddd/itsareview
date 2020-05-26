import {GET_REVIEW, 
        ADD_REVIEW, 
        DELETE_REVIEW, 
        DELETE_REVIEW_COMPLETED,
        EDIT_REVIEW,
        GET_REVIEW_USER,
        GET_CATEGORY_REVIEW,
        GET_TAG_REVIEW,
        GET_USER_BY_ID,
        ADD_COMMENT,
        DELETE_COMMENT,
        GET_COMMENT
    } 
from '../constants'

const initialState = {
    review: {},
    comment: [],
    category: [],
    tag: [],
    found_user: {},
    is_deleted: false,
    log_review: [],
}

export default function(state=initialState, action){
    switch(action.type){
        case GET_REVIEW:
        case ADD_REVIEW:
        case EDIT_REVIEW:
        case GET_COMMENT:
        case ADD_COMMENT:
        case DELETE_COMMENT:
            return {
                ...state,
                review: action.payload
            }
        case DELETE_REVIEW:
            return {
                ...state,
                is_deleted: true
            }
        case DELETE_REVIEW_COMPLETED:
            return {
                ...state,
                is_deleted: false
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
