import { SET_DIALOGS, SET_CURRENT_DIALOG, SET_MESSAGES, ADD_MESSAGE, DialogsStateType, ActionType } from './types'

const initialState: DialogsStateType = {
    dialogs: [],
    currentDialog: '',
    messages: []
}

export const reducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case SET_DIALOGS: return {
            ...state,
            dialogs: action.payload
        }

        case SET_CURRENT_DIALOG: return {
            ...state,
            currentDialog: action.payload
        }

        case SET_MESSAGES: return {
            ...state,
            messages: action.payload
        }

        case ADD_MESSAGE: return {
            ...state,
            messages: [action.payload, ...state.messages]
        }

        default: return state
    }
}