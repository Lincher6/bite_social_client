import axios from 'axios'

export const dialogsApi = {
    startDialog: async (dialogId, userTwo, imageUrl, createdAt = new Date()) => {
        try {
            let response = await axios.post(`/dialogs/${dialogId}`, { userTwo, imageUrl, createdAt })
            return { data: response.data, resultCode: 0 }
        } catch (e) {
            return { error: e.response.data.error, resultCode: 1 }
        }
    },

    sendMessage: async ({ dialogId, body, recipient, createdAt }) => {
        try {
            let response = await axios.post(`/messages/${dialogId}`, { body, recipient, createdAt })
            return { data: response.data, resultCode: 0 }
        } catch (e) {
            return { error: e.response ? e.response.data.error : 'CORS', resultCode: 1 }
        }
    },

    deleteDialog: async (dialogId) => {
        try {
            let response = await axios.delete(`/dialogs/${dialogId}`)
            return { data: response.data, resultCode: 0 }
        } catch (e) {
            return { error: e.response ? e.response.data.error : 'CORS', resultCode: 1 }
        }
    },

    deleteMessage: async (messageId) => {
        try {
            let response = await axios.delete(`/messages/${messageId}`)
            return { data: response.data, resultCode: 0 }
        } catch (e) {
            return { error: e.response ? e.response.data.error : 'CORS', resultCode: 1 }
        }
    },

    markReadMessages: async (messagesCount, dialogId) => {
        try {
            let response = await axios.post(`/markMessages`, { messagesCount, dialogId })
            return { data: response.data, resultCode: 0 }
        } catch (e) {
            return { error: e.response ? e.response.data.error : 'CORS', resultCode: 1 }
        }
    },
}