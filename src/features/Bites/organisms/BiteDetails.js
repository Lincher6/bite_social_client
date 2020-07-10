import React, { useEffect, Fragment } from 'react'
import { useStyles } from '../styles'
import { DialogContent, Typography, Dialog } from '@material-ui/core'
import Close from "@material-ui/icons/Close";
import { bitesSelectors, bitesActions } from '../model'
import { useDispatch, useSelector } from 'react-redux'
import { uiSelectors } from 'features/Navigation'
import { EditButton, BiteDetailsSkeleton } from 'features/common'
import { NavLink } from 'react-router-dom';
import { Like } from '../molecules/Like';
import { useDayjs } from 'lib/hooks/useDayjs';
import { AddComment } from 'features/Comments';
import CommentIcon from "@material-ui/icons/Comment";
import { CommentList } from 'features/Comments';

export const BiteDetails = ({ biteId, open, setOpen, focus }) => {
    const classes = useStyles()
    const { dayjs, options } = useDayjs()
    const bite = useSelector(bitesSelectors.bite)
    const { loading } = useSelector(uiSelectors.ui)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(bitesActions.getBite(biteId))
    }, [biteId, dispatch])

    return (
        <Dialog
            open={open}
            onBackdropClick={() => setOpen(false)}
        >
            <DialogContent className={classes.biteDetails}>
                {
                    loading
                        ? <BiteDetailsSkeleton />
                        : <Fragment>
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
                        </Fragment>
                }
            </DialogContent >
        </Dialog>
    )
}