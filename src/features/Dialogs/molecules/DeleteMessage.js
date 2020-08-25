import React, { useCallback } from 'react'
import CloseIcon from '@material-ui/icons/Close';
import classes from '../styles.module.scss'
import { Tooltip } from '@material-ui/core';
import { dialogsApi } from 'api/dialogsApi';

export const DeleteMessage = ({ id }) => {

    const deleteMessage = useCallback(() => {
        dialogsApi.deleteMessage(id)
    }, [id])

    return (
        <Tooltip
            title='удалить'
            placement='top'
            className={classes.delete}
            onClick={deleteMessage}
        >
            <CloseIcon color='secondary' fontSize='small' />
        </Tooltip>
    )

}