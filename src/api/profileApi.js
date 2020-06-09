import axios from 'axios'

export const profileApi = {
    getAuthenticatedProfile: async () => {
        try {
            let response = await axios.get('/user')
            return { data: response.data, resultCode: 0 }
        } catch (e) {
            return { error: e.response.data.error, resultCode: 1 }
        }
    },

    uploadImage: async (image) => {
        try {
            let response = await axios.post('/user/image', image)
            return { data: response.data, resultCode: 0 }
        } catch (e) {
            return { error: e.response.data.error, resultCode: 1 }
        }
    },

    getProfileImages: async (userHandle) => {
        try {
            let response = await axios.get(`/user/${userHandle}/images`)
            return { data: response.data, resultCode: 0 }
        } catch (e) {
            return { error: e.response.data.error, resultCode: 1 }
        }
    },

    editProfileData: async (profileData) => {
        try {
            let response = await axios.post('/user', profileData)
            return { data: response.data, resultCode: 0 }
        } catch (e) {
            return { error: e.response.data.error, resultCode: 1 }
        }
    }
}