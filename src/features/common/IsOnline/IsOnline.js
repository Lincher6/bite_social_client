import React, { useState, useEffect } from 'react'
import { firestore } from 'lib/firebase'
import { Tooltip } from '@material-ui/core'
import { useStyles } from '../styles'

export const IsOnline = ({ handle }) => {
    const classes = useStyles()
    const [isOnline, setIsOnline] = useState(false)

    useEffect(() => {
        const unsubscribe = firestore
            .doc(`onlineUsers/${handle}`)
            .onSnapshot(snapshot => {
                setIsOnline(snapshot.data().isOnline)
            })

        return () => unsubscribe()
    }, [])

    if (!isOnline) {
        return null
    }

    return (
        <Tooltip title='online' placement='top'>
            <div className={classes.isOnline}></div>
        </Tooltip>
    )
}