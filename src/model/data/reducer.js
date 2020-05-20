import { SET_BITES } from './types'

const initialState = {
    bites: []
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_BITES: return {
            ...state,
            bites: action.payload
        }

        default: return state
    }
}