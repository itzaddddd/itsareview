import { SEARCH_REVIEW } from '../constants'

const initialState = {
    search_result: [],
    query: ''
}

export default function(state=initialState, action){
    switch(action.type){
        case SEARCH_REVIEW: 
            return {
                ...state,
                search_result: action.payload,
                query: action.query
            }
        default:
            return state
    }
}
