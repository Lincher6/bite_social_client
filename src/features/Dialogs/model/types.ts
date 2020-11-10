export const SET_DIALOGS = 'SET_DIALOGS'
export const SET_CURRENT_DIALOG = 'SET_CURRENT_DIALOG'
export const SET_MESSAGES = 'SET_MESSAGES'
export const ADD_MESSAGE = 'ADD_MESSAGE'

export type ActionType = {
    type: string
    payload: any
}

export type DialogType = {
    id: number | string
    recipient: string
    recipientImageUrl: string
    activeAt: {
        seconds: number
        nanoseconds: number
    }
    newMessages: number
}

export type MessageType = {
    id: number | string
    body: string
    createdAt: string
    read: boolean
    recipient: string
    sender: string
    senderImageUrl: string
    isMine?: boolean
    isSend?: boolean
}

export type DialogsStateType = {
    dialogs: Array<DialogType>
    currentDialog: string
    messages: Array<MessageType>
}