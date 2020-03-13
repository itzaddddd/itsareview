import {GET_REVIEW, 
        ADD_REVIEW, 
        DELETE_REVIEW, 
        EDIT_REVIEW} 
from '../constants'

const initialState = {
    review: {}
}

export default function(state=initialState, action){
    switch(action.type){
        case GET_REVIEW:
            return {
                ...state
            }
        case ADD_REVIEW:
            return {
                ...state,
                review: action.payload
            }
        default:
            return state;
    }

}
