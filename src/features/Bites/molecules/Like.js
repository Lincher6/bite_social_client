import React, { useCallback, useState } from 'react'
import classes from '../styles.module.scss'
import { EditButton, RedirectDialog } from "features/common";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import Favorite from "@material-ui/icons/Favorite";
import { useDispatch, useSelector } from "react-redux";
import { profileSelectors } from "features/Profile";
import { bitesActions } from "../model";
import IconButton from "@material-ui/core/IconButton";

export const Like = ({ likesCount, biteId }) => {
    const [open, setOpen] = useState(false)
    const { authenticated, likes } = useSelector(profileSelectors.profile)
    const liked = likes && likes.find(like => like.biteId === biteId)
    const dispatch = useDispatch()

    const like = useCallback(() => {
        dispatch(bitesActions.likeBite(biteId))
    }, [])

    const unlike = useCallback(() => {
        dispatch(bitesActions.unlikeBite(biteId))
    }, [])

    if (!authenticated) {
        return (
            <React.Fragment>
                <EditButton tip={'нравится'} onClick={() => setOpen(true)}>
                    <FavoriteBorder color='primary' className={classes.icon} />
                </EditButton>
                {likesCount}

                {open && <RedirectDialog open={open} setOpen={setOpen} />}
            </React.Fragment>
        )
    }

    if (liked) {
        return (
            <React.Fragment>
                <IconButton onClick={unlike}>
                    <Favorite color='primary' className={classes.icon} />
                </IconButton>
                {likesCount}
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <EditButton tip={'нравится'} onClick={like}>
                <FavoriteBorder color='primary' className='icon' />
            </EditButton>
            {likesCount}
        </React.Fragment>
    )
}