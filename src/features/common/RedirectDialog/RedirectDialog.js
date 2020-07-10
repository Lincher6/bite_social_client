import React from 'react'
import { Dialog, Typography, DialogTitle, DialogActions, Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

export const RedirectDialog = ({ open, setOpen, text = 'Нужно войти' }) => {
    const history = useHistory()

    return (
        <Dialog
            open={open}
            fullWidth
            maxWidth={'xs'}
            onBackdropClick={() => setOpen(false)}
        >
            <DialogTitle>
                {text}
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