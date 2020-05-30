import React, { useCallback, useEffect } from 'react'
import { useStyles } from '../styles'
import { DialogContent, CircularProgress, Paper, Box, Dialog, Typography } from '@material-ui/core'
import Close from "@material-ui/icons/Close";
import { bitesSelectors, bitesActions } from '../../../model/bites'
import { useDispatch, useSelector } from 'react-redux'
import { uiSelectors } from '../../../model/ui'
import { EditButton } from '../../common/EditButton'
import { NavLink } from 'react-router-dom';
import { LikeBite } from '../LikeBite/LikeBite';
import { CommentBite } from "../CommentBite";
import { useDayjs } from '../../../hooks/useDayjs';
import { AddComment } from '../../Comments/AddComment';
import { CommentList } from '../../Comments/CommentsList';

export const BiteDetails = ({ biteId, setOpen }) => {
    const classes = useStyles()
    const { dayjs, options } = useDayjs()
    const bite = useSelector(bitesSelectors.bite)
    const { loading, errors } = useSelector(uiSelectors.ui)
    const dispatch = useDispatch()

    const getBite = useCallback(async () => dispatch(bitesActions.getBite(biteId)), [dispatch, biteId])

    useEffect(() => {
        getBite()
    }, [getBite])

    if (loading) {
        return (
            <DialogContent className={classes.biteDetails}>
                <div className='loader'>
                    <CircularProgress size={150} thickness={2} />
                </div>
            </DialogContent>
        )
    }

    return (
        <DialogContent className={classes.biteDetails}>
            <div className='image-wrapper'>
                <img src={bite.imageUrl} alt='user' className='image' />
            </div>
            <NavLink to={`/users/${bite.userHandle}`}>
                <Typography variant='h5' className='userHandle'>
                    {bite.userHandle}
                </Typography>
            </NavLink>
            <Typography variant='body2' className='date'>
                {dayjs(bite.createdAt).format(options.long)}
            </Typography>
            <Typography variant='body1' className='body'>
                {bite.body}
            </Typography>
            <div className='actions'>
                <LikeBite biteId={biteId} likesCount={bite.likesCount} />
                <CommentBite biteId={biteId} commentsCount={bite.commentsCount} />
            </div>

            <div className='comments'>
                <Typography variant='h5' className='title'>
                    Комментарии
                </Typography>

            </div>
            <AddComment biteId={bite.biteId} />
            <CommentList comments={bite.comments || []} />

            <EditButton tip={'закрыть'} className={classes.close} onClick={() => setOpen(false)}>
                <Close opacity={.5} />
            </EditButton>
        </DialogContent >


    )
}