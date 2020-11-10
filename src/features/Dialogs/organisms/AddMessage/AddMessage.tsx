import React, { useCallback } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { AddMessageForm } from './AddMessageForm'
import { useParams } from 'react-router-dom';
import { profileSelectors } from 'features/Profile';
import { dialogsActions, } from 'features/Dialogs/model';

const sound = require('ui/assets/BlobSound.ogg')

export const AddMessage = () => {
    const dispatch = useDispatch()
    const { handle, imageUrl } = useSelector(profileSelectors.credentials)
    const currentDialog = useParams<any>().dialogId

    const addMessage = useCallback(async (message) => {
        const recipient = currentDialog.replace(handle, '')
        const newMessage = {
            id: currentDialog,
            sender: handle,
            senderImageUrl: imageUrl,
            recipient,
            body: message,
            createdAt: new Date().toISOString(),
            read: false,
            isSend: false
        }
        dispatch(dialogsActions.sendMessage(newMessage))
        new Audio(sound).play()
    }, [dispatch, handle, imageUrl, currentDialog])

    return (
        <React.Fragment>
            <AddMessageForm addMessage={addMessage} />
        </React.Fragment>
    )
}