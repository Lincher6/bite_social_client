import React, { useState, useEffect, useRef } from 'react'
import { useStyles } from '../styles'
import { useDayjs } from 'lib/hooks/useDayjs'
import { Volume } from './Volume'
import { useSelector } from 'react-redux'
import { musicSelectors } from '../model'

export const Progress = () => {
    const { dayjs, options } = useDayjs()
    const classes = useStyles()
    const [progress, setProgress] = useState(0)
    const [durationDate, setDurationDate] = useState(dayjs(new Date(0)).format(options.timer))
    const { audio } = useSelector(musicSelectors.music)
    const timer = useRef()

    const currentTimeDate = dayjs(new Date(audio.currentTime * 1000)).format(options.timer)

    useEffect(() => {
        timer.current = setInterval(() => {
            setProgress((audio.currentTime / audio.duration) * 100)
        }, 200)

        return () => {
            clearInterval(timer.current)
            setProgress(0)
        }
    }, [audio])

    useEffect(() => {
        if (audio.duration) {
            setDurationDate(dayjs(new Date(audio.duration * 1000)).format(options.timer))
        }
    }, [audio.duration, dayjs])

    return (
        <div className={classes.progress}>
            <div className="emptyBar">
                <div className="fillBar" style={{ width: `${progress}%` }}></div>
            </div>

            <div className="timer">
                <div className="currentTime">
                    {currentTimeDate}
                </div>
                <Volume audio={audio} />
                <div className="duration">
                    {durationDate}
                </div>
            </div>

        </div>
    )
}