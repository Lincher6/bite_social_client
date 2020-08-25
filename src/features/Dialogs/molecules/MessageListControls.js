import React, { useCallback, useState } from 'react'
import classes from '../styles.module.scss'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { EditButton } from 'features/common';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { useSelector } from 'react-redux';
import { dialogsSelectors } from '../model';
import { dialogsApi } from 'api/dialogsApi';
import { useHistory } from 'react-router-dom';
import { Dialog, DialogTitle, DialogActions, Button, Typography } from '@material-ui/core';

export const MessageListControls = ({ area }) => {
    const dialogId = useSelector(dialogsSelectors.currentDialog)
    const history = useHistory()
    const [open, setOpen] = useState(false)

    const scrollToStart = useCallback(() => {
        area.current.scrollTo(0, 0);
    }, [area])

    const deleteDialog = useCallback(() => {
        dialogsApi.deleteDialog(dialogId)
        history.push('/dialogs/none')
    }, [dialogId, history])

    return (
        <div className={classes.controls}>
            <EditButton tip='начало' size='small' onClick={scrollToStart}>
                <ArrowUpwardIcon />
            </EditButton>
            <EditButton tip='Удалить диалог' size='small' onClick={() => setOpen(true)}>
                <DeleteForeverIcon />
            </EditButton>

            <Dialog
                open={open}
                fullWidth
                maxWidth={'xs'}
                onBackdropClick={() => setOpen(false)}
            >
                <DialogTitle>
                    Вы хотите удалить этот диалог?
                </DialogTitle>
                <DialogActions>
                    <Button color='secondary' onClick={deleteDialog}>
                        <Typography>Подтвердить</Typography>
                    </Button>
                    <Button color='primary' onClick={() => setOpen(false)}>
                        <Typography>Отмена</Typography>
                    </Button>
                </DialogActions>
            </Dialog>
        </div>

    )
}