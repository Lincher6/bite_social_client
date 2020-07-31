
import React, { useCallback, useState } from 'react'
import { useStyles } from "../../styles";
import { useDispatch, useSelector } from "react-redux";
import Add from "@material-ui/icons/Add";
import Close from "@material-ui/icons/Close";
import { EditButton } from "features/common";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import { bitesActions } from "../../model";
import { AddBiteForm } from "./AddBiteForm";
import { uiSelectors } from "features/Navigation";
import { useHistory } from 'react-router-dom';

export const AddBite = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const addBite = useCallback(async (bite) => {
        dispatch(bitesActions.addBite(bite))
        setOpen(false)
    }, [dispatch])

    const handleClick = () => {
        setOpen(true)
        history.push('/')
    }

    return (
        <React.Fragment>
            <EditButton tip={'Добавить пост'} onClick={handleClick}>
                <Add />
            </EditButton>
            <Dialog
                open={open}
                maxWidth={'sm'}
                fullWidth
                className={classes.addBite}
                onBackdropClick={() => setOpen(false)}
            >
                <EditButton tip={'закрыть'} className={classes.close} onClick={() => setOpen(false)}>
                    <Close opacity={.5} />
                </EditButton>
                <DialogTitle>
                    Добавить новый пост
                </DialogTitle>
                <DialogContent>
                    <AddBiteForm addBite={addBite} loading={loading} fetchError={errors.error} />
                </DialogContent>
            </Dialog>
        </React.Fragment>
    )
}