import React, { useEffect, useState, useCallback } from 'react'
import { useStyles } from '../styles'
import { Typography, CircularProgress } from '@material-ui/core'
import { Equalizer } from '../atoms/Equalizer/Equlizer'
import { useSelector } from 'react-redux'
import { musicSelectors } from '../model'

export const TrackInfo = () => {
    const classes = useStyles()
    const [isLoaded, setIsLoaded] = useState(false)
    const { track, playing, audio } = useSelector(musicSelectors.music)

    const setLoaded = useCallback(() => {
        setIsLoaded(true)
    }, [])

    useEffect(() => {
        setIsLoaded(false)

        if (audio.readyState === 4) {
            setIsLoaded(true)
        } else {
            audio.addEventListener('canplay', setLoaded)
        }

        return () => audio.removeEventListener('canplay', setLoaded)
    }, [audio])

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
                    isLoaded
                        ? playing && <Equalizer />
                        : <div className='loading'>
                            <CircularProgress size={50} />
                        </div>

                }
            </div>
        </div>
    )
}