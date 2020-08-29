import { musicApi } from "../../../api/musicApi";
import { uiActions } from '../../Navigation'

const { SET_TRACKS, LOADING_TRACKS, SET_TRACK, CLEAR_TRACKS, SET_TRACK_INDEX, SET_AUDIO, SET_PLAYING, SET_LOOPED, SET_RANDOM, SET_LIST_OPEN, SET_VOLUME } = require("./types");

const setTracks_AC = (tracks) => ({
    type: SET_TRACKS,
    payload: tracks
})

const loadingTracks_AC = () => ({
    type: LOADING_TRACKS
})

export const clearTracks = () => ({
    type: CLEAR_TRACKS,
})

export const setTrack = (track) => ({
    type: SET_TRACK,
    payload: track
})

export const setTrackIndex = (index) => ({
    type: SET_TRACK_INDEX,
    payload: index
})

export const setAudio = (audio) => ({
    type: SET_AUDIO,
    payload: audio
})

export const setPlaying = (playing) => ({
    type: SET_PLAYING,
    payload: playing
})

export const setLooped = (looped) => ({
    type: SET_LOOPED,
    payload: looped
})

export const setRandom = (random) => ({
    type: SET_RANDOM,
    payload: random
})

export const setListOpen = (listOpen) => ({
    type: SET_LIST_OPEN,
    payload: listOpen
})

export const setVolume = (volume) => ({
    type: SET_VOLUME,
    payload: volume
})

export const getTracks = () => async dispatch => {
    dispatch(loadingTracks_AC())
    const tracksData = await musicApi.getTracks()
    if (tracksData.resultCode === 0) {
        const tracks = tracksData.data.tracks.data
        if (tracks.length > 0) {
            dispatch(setTrack(tracks[0]))
            dispatch(setAudio(new Audio(tracks[0].preview)))
        }
        dispatch(setTracks_AC(tracks))
        dispatch(uiActions.clearErrors_AC())
    } else {
        dispatch(uiActions.setErrors_AC({ error: tracksData.error }))
        dispatch(setTracks_AC([]))
    }
}