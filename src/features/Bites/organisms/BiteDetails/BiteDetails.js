import React, { useCallback, useEffect } from 'react'
import { useStyles } from '../../styles'
import { DialogContent, CircularProgress, Typography } from '@material-ui/core'
import Close from "@material-ui/icons/Close";
import { bitesSelectors, bitesActions } from '../../model'
import { useDispatch, useSelector } from 'react-redux'
import { uiSelectors } from '../../../Navigation'
import { EditButton, BiteDetailsSkeleton } from '../../../common'
import { NavLink } from 'react-router-dom';
import { Like } from '../../molecules/Like';
import { useDayjs } from '../../../../lib/hooks/useDayjs';
import { AddComment } from '../../../Comments';
import CommentIcon from "@material-ui/icons/Comment";
import { CommentList } from '../../../Comments';

export const BiteDetails = ({ biteId, setOpen, focus }) => {
    const classes = useStyles()
    const { dayjs, options } = useDayjs()
    const bite = useSelector(bitesSelectors.bite)
    const { loading } = useSelector(uiSelectors.ui)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(bitesActions.getBite(biteId))
    }, [biteId, dispatch])

    if (loading) {
        return (
            <DialogContent className={classes.biteDetails}>
                <BiteDetailsSkeleton />
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
                <Like biteId={biteId} likesCount={bite.likesCount} />
                <EditButton tip='комментарии'>
                    <CommentIcon color='primary' className='icon' />
                </EditButton>
                {bite.commentsCount}

            </div>


            <AddComment biteId={bite.biteId} focus={focus} />
            <div className='comments'>
                <Typography variant='h5' className='title'>
                    Комментарии
                </Typography>

            </div>
            <CommentList comments={bite.comments || []} />

            <EditButton tip={'закрыть'} className={classes.close} onClick={() => setOpen(false)}>
                <Close opacity={.5} />
            </EditButton>
        </DialogContent >


    )
}