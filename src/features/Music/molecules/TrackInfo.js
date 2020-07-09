import React from 'react'
import { useStyles } from '../styles'
import { Typography } from '@material-ui/core'
import { Equalizer } from '../atoms/Equalizer/Equlizer'
import { useSelector } from 'react-redux'
import { musicSelectors } from '../model'

export const TrackInfo = () => {
    const classes = useStyles()
    const { track, playing } = useSelector(musicSelectors.music)

    return (
        <div className={classes.trackInfo}>
            <img src={track.cover} className='cover' alt="" />

            <div className='artist-song'>
                <Typography variant='h4' className='artist'>
                    {track.artist}
                </Typography>
                <Typography variant='h6' className='song'>
                    {track.title}
                </Typography>

                {
                    playing
                        ? <Equalizer />
                        : null
                }
            </div>
        </div>
    )
}