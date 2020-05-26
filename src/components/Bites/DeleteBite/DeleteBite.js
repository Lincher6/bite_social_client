import React, {useCallback, useState} from 'react'
import {EditButton} from "../../common/EditButton";
import {useDispatch, useSelector} from "react-redux";
import {bitesActions} from "../../../model/bites";
import {userSelectors} from "../../../model/user";
import Delete from '@material-ui/icons/DeleteOutline'
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export const DeleteBite = ({ biteId, userHandle }) => {
    const [open, setOpen] = useState(false)
    const { handle } = useSelector(userSelectors.credentials)
    const dispatch = useDispatch()

    const deleteBite = useCallback(() => {
        dispatch(bitesActions.deleteBite(biteId))
    }, [])

    if (handle !== userHandle) {
        return null
    }

    return (
        <React.Fragment>
            <EditButton tip={'удалить'} onClick={() => setOpen(true)}>
                <Delete opacity={.4}/>
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