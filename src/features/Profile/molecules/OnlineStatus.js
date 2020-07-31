import React, { useState, useEffect } from 'react'
import { firestore } from 'lib/firebase'
import { Tooltip, Typography } from '@material-ui/core'
import { useDayjs } from 'lib/hooks/useDayjs'

export const OnlineStatus = ({ handle }) => {
    const [isOnline, setIsOnline] = useState(false)
    const [wasOnline, setWasOnline] = useState('')
    const { dayjs } = useDayjs()

    useEffect(() => {
        const unsubscribe = firestore
            .doc(`onlineUsers/${handle}`)
            .onSnapshot(snapshot => {
                setIsOnline(snapshot.data().isOnline)
                setWasOnline(snapshot.data().wasOnline)
            })

        return () => unsubscribe()
    }, [])

    if (!isOnline) {
        return <Typography
            variant='body2'
            color='textSecondary'
            className='online-status'
        >{wasOnline && `Был в сети ${dayjs(wasOnline).fromNow()}`}</Typography>
    }

    return (
        <Typography
            variant='body2'
            color='primary'
            className='online-status'
        >Online</Typography>
    )
}