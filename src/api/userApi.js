import axios from 'axios'

export const userApi = {
    getCurrentUser: async () => {
        try {
            let response = await axios.get('/user')
            return { data: response.data, resultCode: 0}
        } catch (e) {
            return { error: e.response.data.error, resultCode: 1}
        }
    },

    uploadImage: async (image) => {
        try {
            let response = await axios.post('/user/image', image)
            return { data: response.data, resultCode: 0}
        } catch (e) {
            return { error: e.response.data.error, resultCode: 1}
        }
    },

    editUserData: async (userData) => {
        try {
            let response = await axios.post('/user', userData)
            return { data: response.data, resultCode: 0}
        } catch (e) {
            return { error: e.response.data.error, resultCode: 1}
        }
    }
}