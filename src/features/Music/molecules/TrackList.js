import React, { Fragment } from 'react'
import { useStyles } from '../styles'
import { Typography, IconButton } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import { musicSelectors, musicActions } from '../model'
import VolumeMuteIcon from '@material-ui/icons/VolumeMute';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';

export const TrackList = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const { tracks, trackIndex } = useSelector(musicSelectors.music)
    const { setTrackIndex } = musicActions


    return (
        <div className={classes.trackList}>
            {
                tracks.slice(0, 10).map((track, index) => {
                    const currentTrack = index === trackIndex
                    return (
                        <Fragment key={track.id}>
                            <div className="track" >
                                <IconButton color={currentTrack ? "primary" : 'inherit'}>
                                    {
                                        index === trackIndex
                                            ? <VolumeUpIcon />
                                            : <VolumeMuteIcon />
                                    }
                                </IconButton>
                                <div
                                    className={currentTrack ? 'active' : ''}
                                    onClick={() => dispatch(setTrackIndex(index))}
                                >
                                    <Typography>{track.artist}</Typography>
                                    <Typography style={{ opacity: .6 }}>{track.title}</Typography>
                                </div>

                            </div>
                        </Fragment >


                    )
                })
            }

        </div >
    )
}