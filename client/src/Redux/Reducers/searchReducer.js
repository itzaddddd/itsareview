import { SEARCH_REVIEW } from '../constants'

const initialState = {
    search_result: []
}

export default function(state=initialState, action){
    switch(action.type){
        case SEARCH_REVIEW:
            return action.payload
        default:
            return state
    }
}
