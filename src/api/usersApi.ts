import axios from 'axios'

export const usersApi = {
    getUserProfile: async (userHandle: string) => {
        try {
            let response = await axios.get(`/user/${userHandle}`)
            return { data: response.data, resultCode: 0 }
        } catch (e) {
            return {
                error: e.response ? e.response.data.error : e,
                resultCode: 1
            }
        }
    },

    getUsers: async (offset = 0, searchParams = {}) => {
        try {
            let response = await axios.post(`/users`, { offset, searchParams })
            return { data: response.data, resultCode: 0 }
        } catch (e) {
            return {
                error: e.response ? e.response.data.error : e,
                resultCode: 1
            }
        }
    },

    getFriends: async (offset = 0, userHandles = []) => {
        try {
            let response = await axios.post(`/users`, { offset, userHandles })
            return { data: response.data, resultCode: 0 }
        } catch (e) {
            return {
                error: e.response ? e.response.data.error : e,
                resultCode: 1
            }
        }
    },

    follow: async (userHandle: string, follow = true) => {
        try {
            let response = await axios.post(`/user/${userHandle}/follow`, { follow })
            return { data: response.data, resultCode: 0 }
        } catch (e) {
            return {
                error: e.response ? e.response.data.error : e,
                resultCode: 1
            }
        }
    }
}