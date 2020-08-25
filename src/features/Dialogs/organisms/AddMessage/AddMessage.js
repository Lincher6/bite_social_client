import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { uiSelectors } from "features/Navigation";
import { AddMessageForm } from './AddMessageForm'
import { useHistory, useParams } from 'react-router-dom';
import { profileSelectors } from 'features/Profile';
import { dialogsActions, dialogsSelectors } from 'features/Dialogs/model';
import sound from 'ui/assets/BlobSound.ogg'

export const AddMessage = () => {
    const dispatch = useDispatch()
    const { handle, imageUrl } = useSelector(profileSelectors.credentials)
    const currentDialog = useParams().dialogId

    const addMessage = useCallback(async (message) => {
        const recipient = currentDialog.replace(handle, '')
        const newMessage = {
            dialogId: currentDialog,
            sender: handle,
            senderImageUrl: imageUrl,
            recipient,
            body: message,
            createdAt: new Date(),
            read: false,
            isSend: false
        }
        dispatch(dialogsActions.sendMessage(newMessage))
        new Audio(sound).play()
    }, [dispatch, handle, imageUrl, currentDialog])

    return (
        <React.Fragment>
            <AddMessageForm addMessage={addMessage} loading={false} />
        </React.Fragment>
    )
}