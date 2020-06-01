import React, { useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { profileActions, profileSelectors } from '../../model'
import { EditForm } from './EditForm'
import { Dialog, Button, DialogTitle, DialogContent } from '@material-ui/core';

export const Edit = () => {
    const credentials = useSelector(profileSelectors.credentials)
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)

    const editUserData = useCallback((userData) => {
        dispatch(profileActions.editProfileData(userData))
    }, [dispatch])

    return (
        <React.Fragment>
            <Button color='primary' variant='outlined' onClick={() => setOpen(true)}>
                Редактировать
            </Button>
            <Dialog open={open}>
                <DialogTitle>
                    Редактировать информацию
                </DialogTitle>
                <DialogContent>
                    <EditForm {...credentials} editUserData={editUserData} setOpen={setOpen} />
                </DialogContent>
            </Dialog>
        </React.Fragment>
    )
}