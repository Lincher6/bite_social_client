import { SET_DIALOGS, SET_CURRENT_DIALOG, SET_MESSAGES, ADD_MESSAGE } from "./types";
import { dialogsApi } from "api/dialogsApi";

export const setDialogs = (dialogs) => ({
    type: SET_DIALOGS,
    payload: dialogs
})

export const setCurrentDialog = (dialog) => ({
    type: SET_CURRENT_DIALOG,
    payload: dialog
})

export const setMessages = (messages) => ({
    type: SET_MESSAGES,
    payload: messages
})

const addMessage = (message) => ({
    type: ADD_MESSAGE,
    payload: message
})

export const sendMessage = (message) => async dispatch => {
    dispatch(addMessage(message))
    message.isSend = true
    await dialogsApi.sendMessage(message)
}