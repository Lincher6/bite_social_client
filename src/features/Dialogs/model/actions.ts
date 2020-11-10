import { AppDispatch } from 'lib/store/store';
import { SET_DIALOGS, SET_CURRENT_DIALOG, SET_MESSAGES, ADD_MESSAGE, DialogType, MessageType } from "./types";
import { dialogsApi } from "api/dialogsApi";

export const setDialogs = (dialogs: Array<DialogType>) => ({
    type: SET_DIALOGS,
    payload: dialogs
})

export const setCurrentDialog = (dialog: string) => ({
    type: SET_CURRENT_DIALOG,
    payload: dialog
})

export const setMessages = (messages: Array<MessageType>) => ({
    type: SET_MESSAGES,
    payload: messages
})

const addMessage = (message: MessageType) => ({
    type: ADD_MESSAGE,
    payload: message
})

export const sendMessage = (message: MessageType) => async (dispatch: AppDispatch) => {
    dispatch(addMessage(message))
    message.isSend = true
    await dialogsApi.sendMessage(message)
}