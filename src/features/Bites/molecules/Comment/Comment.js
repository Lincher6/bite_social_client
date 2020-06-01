import React, { useState } from 'react'
import { EditButton } from "../../../common";
import CommentIcon from "@material-ui/icons/Comment";
import { useSelector } from "react-redux";
import { profileSelectors } from "../../../Profile";
import { BiteDetails } from '../../organisms/BiteDetails'
import { Dialog } from '@material-ui/core'

export const Comment = ({ commentsCount, biteId }) => {
    const [open, setOpen] = useState(false)
    const { authenticated } = useSelector(profileSelectors.profile)

    if (!authenticated) {
        return (
            <React.Fragment>
                <EditButton tip={'комментарии'} onClick={() => alert('нужно авторизироваться')}>
                    <CommentIcon color='primary' className='icon' />
                </EditButton>
                {commentsCount}
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <EditButton tip={'комментарии'} onClick={() => setOpen(true)}>
                <CommentIcon color='primary' className='icon' />
            </EditButton>
            {commentsCount}
            <Dialog
                open={open}
                fullWidth
                onBackdropClick={() => setOpen(false)}
            >
                <BiteDetails biteId={biteId} setOpen={setOpen} focus={true} />
            </Dialog>
        </React.Fragment>
    )
}