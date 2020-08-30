import React, { useRef, useEffect } from 'react'
import classes from '../styles.module.scss'
import { useMessages } from 'features/Dialogs/lib/useMessages'
import { CircularProgress, Typography } from '@material-ui/core'
import { Message } from '../molecules/Message'
import { useSelector, useDispatch } from 'react-redux'
import { profileSelectors } from 'features/Profile'
import { dialogsSelectors, dialogsActions } from '../model'
import { MessageListControls } from '../molecules/MessageListControls'

export const MessageList = (props) => {
    const { handle } = useSelector(profileSelectors.credentials)
    const dispatch = useDispatch()
    const loading = useMessages()
    const messages = useSelector(dialogsSelectors.messages)
    const area = useRef(null)

    useEffect(() => {
        return () => dispatch(dialogsActions.setMessages([]))
    }, [dispatch])

    return (
        <div className={classes.messagesContainer} >
            <div className={classes.messages} ref={area}>
                {messages.length > 0 && !loading && <MessageListControls area={area} />}
                {
                    messages.length > 0
                        ? messages.map((message, index) => {
                            return (
                                <Message key={message.createdAt} isMine={handle === message.sender} {...message} />
                            )
                        })
                        : loading
                            ? <CircularProgress className={classes.preloader} size={100} />
                            : <Typography variant='h5' color='secondary' className={classes.noMessages}>
                                Нет сообщений
                            </Typography>

                }
            </div>
        </div >
    )
}