import React from 'react'
import { Tooltip } from '@material-ui/core'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import CheckIcon from '@material-ui/icons/Check';
import DoneAllIcon from '@material-ui/icons/DoneAll';

export const MessageStatus = ({ isSend, isRead = false }) => {
    if (isSend) {
        if (isRead) {
            return (
                <Tooltip title='прочитано'>
                    <DoneAllIcon color='primary' />
                </Tooltip>
            )
        } else {
            return (
                <Tooltip title='не прочитано'>
                    <CheckIcon />
                </Tooltip>
            )
        }
    } else {
        return (
            <Tooltip title='отправка...'>
                <AccessTimeIcon color='secondary' />
            </Tooltip>
        )
    }
}