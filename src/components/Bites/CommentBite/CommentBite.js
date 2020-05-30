import React, { useState } from 'react'
import { EditButton } from "../../common/EditButton";
import Comment from "@material-ui/icons/Comment";
import { useSelector } from "react-redux";
import { userSelectors } from "../../../model/user";
import { BiteDetails } from '../BiteDetails.js';
import { Dialog } from '@material-ui/core'

export const CommentBite = ({ commentsCount, biteId }) => {
    const [open, setOpen] = useState(false)
    const { authenticated } = useSelector(userSelectors.user)

    if (!authenticated) {
        return (
            <React.Fragment>
                <EditButton tip={'комментарии'} onClick={() => alert('нужно авторизироваться')}>
                    <Comment color='primary' className='icon' />
                </EditButton>
                {commentsCount}
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <EditButton tip={'комментарии'} onClick={() => setOpen(true)}>
                <Comment color='primary' className='icon' />
            </EditButton>
            {commentsCount}
            <Dialog open={open} onBackdropClick={() => setOpen(false)}>
                <BiteDetails biteId={biteId} setOpen={setOpen} />
            </Dialog>
        </React.Fragment>
    )
}