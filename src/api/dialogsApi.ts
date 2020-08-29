import { MessageType } from './types';
import axios from 'axios'

export const dialogsApi = {
    startDialog: async (
        dialogId: number,
        userTwo: string,
        imageUrl: string,
        createdAt: Date = new Date()
    ) => {
        try {
            let response = await axios.post(`/dialogs/${dialogId}`, { userTwo, imageUrl, createdAt })
            return { data: response.data, resultCode: 0 }
        } catch (e) {
            return { error: e.response.data.error, resultCode: 1 }
        }
    },

    sendMessage: async ({ dialogId, body, recipient, createdAt }: MessageType) => {
        try {
            let response = await axios.post(`/messages/${dialogId}`, { body, recipient, createdAt })
            return { data: response.data, resultCode: 0 }
        } catch (e) {
            return { error: e.response ? e.response.data.error : 'CORS', resultCode: 1 }
        }
    },

    deleteDialog: async (dialogId: number) => {
        try {
            let response = await axios.delete(`/dialogs/${dialogId}`)
            return { data: response.data, resultCode: 0 }
        } catch (e) {
            return { error: e.response ? e.response.data.error : 'CORS', resultCode: 1 }
        }
    },

    deleteMessage: async (messageId: number) => {
        try {
            let response = await axios.delete(`/messages/${messageId}`)
            return { data: response.data, resultCode: 0 }
        } catch (e) {
            return { error: e.response ? e.response.data.error : 'CORS', resultCode: 1 }
        }
    },

    markReadMessages: async (messagesCount: number, dialogId: number) => {
        try {
            let response = await axios.post(`/markMessages`, { messagesCount, dialogId })
            return { data: response.data, resultCode: 0 }
        } catch (e) {
            return { error: e.response ? e.response.data.error : 'CORS', resultCode: 1 }
        }
    },
}