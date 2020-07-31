import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useStyles } from '../styles'
import { useDayjs } from 'lib/hooks/useDayjs'
import { Volume } from './Volume'
import { useSelector } from 'react-redux'
import { musicSelectors } from '../model'

export const Progress = () => {
    const { dayjs, options } = useDayjs()
    const classes = useStyles()
    const [progress, setProgress] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)
    const [durationDate, setDurationDate] = useState(dayjs(new Date(0)).format(options.timer))
    const { audio } = useSelector(musicSelectors.music)
    const timer = useRef()
    const bar = useRef()

    const currentTimeDate = dayjs(new Date(audio.currentTime * 1000)).format(options.timer)

    const fastForward = useCallback((e) => {
        if (audio.readyState) {
            const width = bar.current.offsetWidth
            const forwardAmount = e.clientX - bar.current.offsetLeft
            const percent = forwardAmount / width
            setCurrentTime(audio.duration * percent)
        }
    }, [audio])

    const initiateDuration = useCallback(() => {
        setDurationDate(dayjs(new Date(audio.duration * 1000)).format(options.timer))
    }, [audio.duration, dayjs, options.timer])

    useEffect(() => {
        timer.current = setInterval(() => {
            setProgress((audio.currentTime / audio.duration) * 100)
        }, 200)

        if (audio.readyState) {
            initiateDuration()
        } else {
            audio.addEventListener('canplay', initiateDuration)
        }

        return () => {
            clearInterval(timer.current)
            setProgress(0)
            audio.removeEventListener('canplay', initiateDuration)
        }
    }, [audio])

    useEffect(() => {
        bar.current.addEventListener('click', fastForward)

        return () => {
            bar.current.removeEventListener('click', fastForward)
        }
    }, [audio])

    useEffect(() => {
        audio.currentTime = currentTime
    }, [currentTime])

    return (
        <div className={classes.progress}>
            <div className="emptyBar" ref={bar} disabled={!audio.readyState}>
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