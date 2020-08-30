import React, { useState } from 'react'
import classes from '../styles.module.scss'
import { EditButton } from "features/common";
import CommentIcon from "@material-ui/icons/Comment";
import { BiteDetails } from '../organisms/BiteDetails'

export const Comment = ({ commentsCount, biteId }) => {
    const [open, setOpen] = useState(false)

    return (
        <React.Fragment>
            <EditButton tip={'комментарии'} onClick={() => setOpen(true)}>
                <CommentIcon color='primary' className={classes.icon} />
            </EditButton>
            {commentsCount}

            {open && <BiteDetails biteId={biteId} open={open} setOpen={setOpen} />}
        </React.Fragment>
    )
}