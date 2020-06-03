import axios from 'axios'

export const bitesApi = {
    getBites: async (offset, userHandle) => {
        try {
            let response = await axios.get(`/bites`, { params: { offset, userHandle } })
            return { data: response.data, resultCode: 0 }
        } catch (e) {
            return { error: e.response.data.error, resultCode: 1 }
        }
    },

    getBite: async (biteId) => {
        try {
            let response = await axios.get(`/bites/${biteId}`)
            return { data: response.data, resultCode: 0 }
        } catch (e) {
            return { error: e.response.data.error, resultCode: 1 }
        }
    },

    addBite: async bite => {
        try {
            let response = await axios.post('/bites', bite)
            return { data: response.data, resultCode: 0 }
        } catch (e) {
            return { error: e.response.data.error, resultCode: 1 }
        }
    },

    addComment: async (biteId, comment) => {
        try {
            let response = await axios.post(`/bites/${biteId}/comment`, comment)
            return { data: response.data, resultCode: 0 }
        } catch (e) {
            return { error: e.response.data.error, resultCode: 1 }
        }
    },

    likeBite: async (biteId) => {
        try {
            let response = await axios.post(`/bites/${biteId}/like`)
            return { data: response.data, resultCode: 0 }
        } catch (e) {
            return { error: e.response.data.error, resultCode: 1 }
        }
    },

    unlikeBite: async (biteId) => {
        try {
            let response = await axios.delete(`/bites/${biteId}/like`)
            return { data: response.data, resultCode: 0 }
        } catch (e) {
            return { error: e.response.data.error, resultCode: 1 }
        }
    },

    deleteBite: async (biteId) => {
        try {
            let response = await axios.delete(`/bites/${biteId}`)
            return { data: response.data, resultCode: 0 }
        } catch (e) {
            return { error: e.response.data.error, resultCode: 1 }
        }
    }
}