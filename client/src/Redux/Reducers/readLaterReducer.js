import {
    GET_READ_LATER,
    ADD_READ_LATER,
    DELETE_READ_LATER
} from '../constants'

const initialState = {
    readLater: []
}

export default function(state=initialState, action){
    switch(action.type){
        case ADD_READ_LATER:
        case GET_READ_LATER:
        case DELETE_READ_LATER:
            return {
                ...state,
                readLater: action.payload 
            }
        default:
            return state
    }
}
