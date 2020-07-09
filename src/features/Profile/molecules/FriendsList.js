import React, { useState, useCallback } from 'react'
import { Button, Menu, MenuItem } from '@material-ui/core'
import { CircularProgress } from '@material-ui/core'
import PeopleAltTwoToneIcon from '@material-ui/icons/PeopleAltTwoTone';
import { useStyles } from '../styles'
import { useSelector, useDispatch } from 'react-redux';
import { usersSelectors, usersActions } from '../../Users';
import { Friend } from './Friend';

export const FriendsList = ({ friends = [] }) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [anchorEl, setAnchorEl] = useState(null)
    const { loadingFriends, friendsList } = useSelector(usersSelectors.users)

    const handleOpen = useCallback((event) => {
        if (friends.length > 0) {
            setAnchorEl(event.target)
            dispatch(usersActions.getFriendsList(0, friends))
        }
    }, [dispatch, friends])

    const handleClose = useCallback(() => {
        setAnchorEl(null)
    }, [])

    return (
        <div className={classes.album}>
            <Button
                variant='outlined'
                color='primary'
                onClick={handleOpen}
            >
                ДРУЗЬЯ&nbsp;&nbsp;&nbsp;{friends.length}&nbsp;<PeopleAltTwoToneIcon />
            </Button>

            <Menu
                id="friends-menu"
                className={classes.friendsList}
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {
                    loadingFriends
                        ? <MenuItem>
                            <CircularProgress size={80} color='primary' />
                        </MenuItem>
                        : friendsList.map(friend => {
                            return (
                                <MenuItem key={friend.handle}>
                                    <Friend
                                        {...friend}
                                    />
                                </MenuItem>
                            )
                        })

                }
            </Menu>
        </div >
    )
}