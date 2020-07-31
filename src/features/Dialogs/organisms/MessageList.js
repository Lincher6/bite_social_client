import React from 'react'
import classes from '../styles.module.scss'
import { useMessages } from 'lib/hooks/useMessages'

export const MessageList = (props) => {
    const messages = useMessages()

    return (
        <div className={classes.messages}>
            {
                messages.map(message => {
                    return (
                        <div key={message.id}>
                            {message.body}
                        </div>
                    )
                })
            }
        </div>
    )
}