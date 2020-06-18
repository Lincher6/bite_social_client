import React, { useState } from 'react'
import { Dialog, Typography, DialogTitle, DialogActions, Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

export const RedirectDialog = ({ open, setOpen }) => {
    const history = useHistory()

    return (
        <Dialog
            open={open}
            fullWidth
            maxWidth={'xs'}
            onBackdropClick={() => setOpen(false)}
        >
            <DialogTitle>
                Нужно войти
                </DialogTitle>
            <DialogActions>
                <Button color='primary' onClick={() => history.push('/login')}>
                    <Typography>Войти</Typography>
                </Button>
                <Button onClick={() => setOpen(false)}>
                    <Typography>Отмена</Typography>
                </Button>
            </DialogActions>
        </Dialog>
    )
}