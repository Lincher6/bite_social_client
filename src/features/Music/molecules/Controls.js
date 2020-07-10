import React, { useEffect, useCallback } from 'react';
import { useStyles } from '../styles'
import SkipNextOutlinedIcon from '@material-ui/icons/SkipNextOutlined';
import SkipPreviousOutlinedIcon from '@material-ui/icons/SkipPreviousOutlined';
import playBtn from 'ui/assets/playBtn.png'
import pauseBtn from 'ui/assets/stopBtn.png'
import { IconButton } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { musicSelectors, musicActions } from '../model';

export const Controls = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const { playing, audio, random, tracks, trackIndex, looped } = useSelector(musicSelectors.music)
    const { setPlaying, setTrackIndex, setAudio, setTrack } = musicActions

    const playStopFlow = () => {
        if (audio) {
            if (playing) {
                audio.pause()
            } else {
                audio.play()
            }
            dispatch(setPlaying(!playing))
        }
    }

    const nextTrack = useCallback(() => {
        if (random) {
            dispatch(setTrackIndex(Math.floor(Math.random() * tracks.length)))
        } else {
            if (trackIndex < tracks.length - 1) {
                dispatch(setTrackIndex(trackIndex + 1))
            } else {
                dispatch(setTrackIndex(0))
            }
        }
    }, [setTrackIndex, random, trackIndex, tracks.length, dispatch])

    const previousTrack = () => {
        if (random) {
            dispatch(setTrackIndex(Math.floor(Math.random() * tracks.length)))
        } else {
            if (trackIndex > 0) {
                dispatch(setTrackIndex(trackIndex - 1))
            } else {
                dispatch(setTrackIndex(tracks.length - 1))
            }
        }
    }

    const trackChanger = useCallback(() => {
        if (looped) {
            audio.currentTime = 0
            audio.play()
        } else if (random) {
            dispatch(setTrackIndex(Math.floor(Math.random() * tracks.length)))
        } else {
            nextTrack()
        }
    }, [audio, nextTrack, looped, random, dispatch, tracks.length, setTrackIndex])

    useEffect(() => {
        if (audio !== null) {
            audio.pause()
            audio.removeEventListener('ended', trackChanger)
        }

        if (tracks.length > 0) {
            dispatch(musicActions.setTrack(tracks[trackIndex]))
            dispatch(setAudio(new Audio(tracks[trackIndex].link)))
        }
    }, [dispatch, trackIndex])

    useEffect(() => {
        if (audio !== null) {
            if (playing) {
                audio.play()
            } else {
                audio.pause()
            }
            audio.addEventListener('ended', trackChanger)
        }

        return () => {
            if (audio !== null) {
                audio.pause()
                audio.removeEventListener('ended', trackChanger)
            }
        }
    }, [audio, trackChanger, playing])

    return (
        <div className={classes.controls}>
            <IconButton onClick={previousTrack}>
                <SkipPreviousOutlinedIcon style={{ fontSize: 40 }} />
            </IconButton>

            <img onClick={playStopFlow} src={playing ? pauseBtn : playBtn} className='playBtn' alt="" />

            <IconButton onClick={nextTrack}>
                <SkipNextOutlinedIcon style={{ fontSize: 40 }} />
            </IconButton>
        </div>
    );
}