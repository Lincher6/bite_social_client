import React, { useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userActions, userSelectors } from '../../../model/user'
import { EditProfileForm } from './EditProfileForm'
import { Dialog, Button, DialogTitle, DialogContent } from '@material-ui/core';

export const EditProfile = () => {
    const credentials = useSelector(userSelectors.credentials)
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)

    const editUserData = useCallback((userData) => {
        dispatch(userActions.editUserData(userData))
    })

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
                    <EditProfileForm {...credentials} editUserData={editUserData} setOpen={setOpen} />
                </DialogContent>
            </Dialog>
        </React.Fragment>
    )
}