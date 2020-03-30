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
            return {
                ...state,
                readLater: [...state.readLater, action.new_added] 
            }
        case GET_READ_LATER:
            return {
                ...state
            }
        default:
            return state
    }
}