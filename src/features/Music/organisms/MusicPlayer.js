import React, { useState, useEffect, useCallback, Fragment, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { musicSelectors, musicActions } from '../model'
import { Paper, IconButton } from '@material-ui/core'
import SkipNextOutlinedIcon from '@material-ui/icons/SkipNextOutlined';
import SkipPreviousOutlinedIcon from '@material-ui/icons/SkipPreviousOutlined';
import LoopIcon from '@material-ui/icons/Loop';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import ShuffleSharpIcon from '@material-ui/icons/ShuffleSharp';
import playBtn from '../../../ui/assets/playBtn.png'
import pauseBtn from '../../../ui/assets/stopBtn.png'
import { useStyles } from '../styles'
import { TrackInfo } from '../molecules/TrackInfo'
import { Progress } from '../molecules/Progress'
import { Volume } from '../molecules/Volume'
import { PlayerButton } from '../atoms/PlayerButton';
import { TrackList } from '../molecules/TrackList';
import { PlayerSkeleton } from '../../common/Skeletons/PlayerSkeleton';
import { Controls } from '../molecules/Controls';
import { Playlist } from '../molecules/Playlist';

export const MusicPlayer = (props) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const { loadingTracks, listOpen, audio, playing, random, tracks, trackIndex, looped } = useSelector(musicSelectors.music)

    useEffect(() => {
        dispatch(musicActions.getTracks())

        return () => dispatch(musicActions.clearTracks())
    }, [dispatch])

    return (
        <Paper className={`${classes.musicPlayer} ${listOpen ? classes.listOpen : ''}`}>
            {
                !loadingTracks && audio
                    ? <Fragment>
                        <TrackInfo />
                        <Progress />
                        <Controls />
                        <Playlist />
                        <TrackList />
                    </Fragment>
                    : <PlayerSkeleton />
            }
        </Paper >
    )
}