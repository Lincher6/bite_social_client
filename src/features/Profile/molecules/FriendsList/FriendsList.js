import React, { useState, useCallback } from 'react'
import { Button, Card } from '@material-ui/core'
import { Typography, Dialog, Paper, CircularProgress } from '@material-ui/core'
import PeopleAltTwoToneIcon from '@material-ui/icons/PeopleAltTwoTone';
import { useStyles } from '../../styles'
import { useSelector, useDispatch } from 'react-redux';
import { usersSelectors, usersActions } from '../../../Users';
import { Friend } from '../Friend';

export const FriendsList = ({ friends = [] }) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const { loadingFriends, friendsList } = useSelector(usersSelectors.users)

    const handleClick = useCallback(() => {
        if (friends.length > 0) {
            setOpen(true)
            dispatch(usersActions.getFriendsList(0, friends))
        }

    }, [dispatch, friends])

    return (
        <div className={classes.album}>
            <Button
                variant='outlined'
                color='primary'
                onClick={handleClick}
            >
                ДРУЗЬЯ&nbsp;&nbsp;&nbsp;{friends.length}&nbsp;<PeopleAltTwoToneIcon />
            </Button>

            <Dialog
                open={open}
                maxWidth='xs'
                onBackdropClick={() => setOpen(false)}
            >
                <div className={classes.friendsList}>
                    {
                        loadingFriends
                            ? <CircularProgress size={80} color='primary' />
                            : <div >
                                {
                                    friendsList.map(friend => {
                                        return (
                                            <Friend
                                                key={friend.handle}
                                                {...friend}
                                            />
                                        )
                                    })
                                }
                            </div>
                    }
                </div>

            </Dialog>
        </div >
    )
}