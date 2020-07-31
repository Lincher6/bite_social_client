import React, { useState, useEffect } from 'react'
import { firestore } from 'lib/firebase'
import { Tooltip } from '@material-ui/core'

export const IsOnline = ({ handle }) => {
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
            <div className='isOnline'></div>
        </Tooltip>
    )
}