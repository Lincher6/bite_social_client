import { SET_TRACKS, LOADING_TRACKS, SET_TRACK, CLEAR_TRACKS, SET_TRACK_INDEX, SET_AUDIO, SET_PLAYING, SET_LOOPED, SET_RANDOM, SET_LIST_OPEN, SET_VOLUME } from "./types"


const initialState = {
    tracks: [],
    track: {},
    trackIndex: 0,
    audio: null,
    playing: false,
    looped: localStorage.getItem('looped') === 'true',
    random: localStorage.getItem('random') === 'true',
    listOpen: false,
    volume: localStorage.getItem('volume') ? Number(localStorage.getItem('volume')) : 50,
    loadingTracks: false
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TRACKS: return {
            ...state,
            tracks: action.payload,
            loadingTracks: false,
            track: action.payload[0],
        }

        case SET_TRACK: return {
            ...state,
            track: action.payload
        }

        case SET_TRACK_INDEX: return {
            ...state,
            trackIndex: action.payload
        }

        case SET_AUDIO: return {
            ...state,
            audio: action.payload
        }

        case SET_PLAYING: return {
            ...state,
            playing: action.payload
        }

        case SET_LOOPED: return {
            ...state,
            looped: action.payload
        }

        case SET_RANDOM: return {
            ...state,
            random: action.payload
        }

        case SET_VOLUME: return {
            ...state,
            volume: action.payload
        }

        case SET_LIST_OPEN: return {
            ...state,
            listOpen: action.payload
        }

        case CLEAR_TRACKS: return {
            ...state,
            tracks: [],
            track: {},
            audio: null,
            listOpen: false,
            playing: false,

            loadingTracks: false
        }

        case LOADING_TRACKS: return {
            ...state,
            loadingTracks: true
        }



        default: return state
    }
}