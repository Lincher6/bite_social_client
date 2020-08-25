import React, { useState, useEffect } from 'react'
import { EditButton } from 'features/common'
import ForumIcon from '@material-ui/icons/Forum';
import { Badge } from '@material-ui/core';
import { useNewMessages } from 'features/Profile/lib/useNewMessages';
import sound from 'ui/assets/messageNotification.wav'

export const DialogsNavIcon = (props) => {
    const [currentCount, setCurrentCount] = useState(0)
    const newMessages = useNewMessages()

    useEffect(() => {
        if (newMessages > currentCount) {
            new Audio(sound).play()
        }
        setCurrentCount(newMessages)
    }, [newMessages])

    return (
        <EditButton tip={'Диалоги'}>
            <Badge
                badgeContent={newMessages}
                color="secondary"
            >
                <ForumIcon />
            </Badge>
        </EditButton>
    )
}