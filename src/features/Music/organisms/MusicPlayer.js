import React, { useEffect, Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { musicSelectors, musicActions } from '../model'
import { Paper } from '@material-ui/core'
import { useStyles } from '../styles'
import { TrackInfo } from '../molecules/TrackInfo'
import { Progress } from '../molecules/Progress'
import { TrackList } from '../molecules/TrackList';
import { PlayerSkeleton } from 'features/common/Skeletons/PlayerSkeleton';
import { Controls } from '../molecules/Controls';
import { Playlist } from '../molecules/Playlist';

export const MusicPlayer = (props) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const { loadingTracks, listOpen, audio } = useSelector(musicSelectors.music)

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