import React from 'react'
import { EditButton } from '../EditButton'
import SendIcon from '@material-ui/icons/Send';
import { useStyles } from '../styles';

export const SendButton = (props) => {
    const classes = useStyles()

    return (
        <EditButton type='submit' className={classes.sendButton}>
            <SendIcon color='primary' />
        </EditButton>
    )
}