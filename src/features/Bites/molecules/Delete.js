import React, { useCallback, useState } from 'react'
import { EditButton } from "features/common";
import { useDispatch, useSelector } from "react-redux";
import { bitesActions } from "..";
import { profileSelectors } from "features/Profile";
import DeleteIcon from '@material-ui/icons/DeleteForeverOutlined'
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export const Delete = ({ biteId, userHandle }) => {
    const [open, setOpen] = useState(false)
    const { handle } = useSelector(profileSelectors.credentials)
    const authenticated = useSelector(profileSelectors.authenticated)
    const dispatch = useDispatch()

    const deleteBite = useCallback(() => {
        dispatch(bitesActions.deleteBite(biteId))
    }, [dispatch, biteId])

    if (!authenticated || handle !== userHandle) {
        return null
    }

    return (
        <React.Fragment>
            <EditButton tip={'удалить'} onClick={() => setOpen(true)}>
                <DeleteIcon opacity={.4} />
            </EditButton>

            <Dialog
                open={open}
                fullWidth
                maxWidth={'sm'}
                onBackdropClick={() => setOpen(false)}
            >
                <DialogTitle>
                    Вы хотите удалить этот пост?
                </DialogTitle>
                <DialogActions>
                    <Button color='secondary' onClick={deleteBite}>
                        <Typography>Подтвердить</Typography>
                    </Button>
                    <Button color='primary' onClick={() => setOpen(false)}>
                        <Typography>Отмена</Typography>
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )
}