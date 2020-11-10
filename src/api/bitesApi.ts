import axios from 'axios'

export const bitesApi = {
    getBites: async (
        offset: number,
        userHandle: string,
        biteFilter: Object
    ) => {
        try {
            let response = await axios.get(`/bites`, { params: { offset, userHandle, biteFilter } })
            return { data: response.data, resultCode: 0 }
        } catch (e) {
            return {
                error: e.response ? e.response.data.error : e,
                resultCode: 1
            }
        }
    },

    getBite: async (biteId: number) => {
        try {
            let response = await axios.get(`/bites/${biteId}`)
            return { data: response.data, resultCode: 0 }
        } catch (e) {
            return {
                error: e.response ? e.response.data.error : e,
                resultCode: 1
            }
        }
    },

    addBite: async (bite: any) => {
        try {
            let response = await axios.post('/bites', bite)
            return { data: response.data, resultCode: 0 }
        } catch (e) {
            return {
                error: e.response ? e.response.data.error : e,
                resultCode: 1
            }
        }
    },

    addComment: async (biteId: number, comment: any) => {
        try {
            let response = await axios.post(`/bites/${biteId}/comment`, comment)
            return { data: response.data, resultCode: 0 }
        } catch (e) {
            return {
                error: e.response ? e.response.data.error : e,
                resultCode: 1
            }
        }
    },

    likeBite: async (biteId: number) => {
        try {
            let response = await axios.post(`/bites/${biteId}/like`)
            return { data: response.data, resultCode: 0 }
        } catch (e) {
            return {
                error: e.response ? e.response.data.error : e,
                resultCode: 1
            }
        }
    },

    unlikeBite: async (biteId: number) => {
        try {
            let response = await axios.delete(`/bites/${biteId}/like`)
            return { data: response.data, resultCode: 0 }
        } catch (e) {
            return {
                error: e.response ? e.response.data.error : e,
                resultCode: 1
            }
        }
    },

    deleteBite: async (biteId: number) => {
        try {
            let response = await axios.delete(`/bites/${biteId}`)
            return { data: response.data, resultCode: 0 }
        } catch (e) {
            return {
                error: e.response ? e.response.data.error : e,
                resultCode: 1
            }
        }
    }
}