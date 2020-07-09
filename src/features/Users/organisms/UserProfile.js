import React, { useEffect } from 'react'
import Paper from '@material-ui/core/Paper';
import { useStyles } from "../../Profile/styles";
import { Picture, FriendsList } from '../../Profile';
import { Info } from '../../Profile';
import { Album } from '../../Profile';
import { useSelector, useDispatch } from 'react-redux';
import { usersSelectors, usersActions } from '../model';
import { CircularProgress } from '@material-ui/core';
import { ProfileSkeleton } from '../../common';

export const UserProfile = ({ userHandle }) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const loadingUser = useSelector(usersSelectors.loadingUser)
    const userProfile = useSelector(usersSelectors.userProfile)


    useEffect(() => {
        dispatch(usersActions.getUserProfile(userHandle))
    }, [userHandle])

    return (
        <Paper className={classes.profile}>
            {loadingUser
                ? <ProfileSkeleton />
                : <div className={classes.grid}>
                    <div style={{ gridArea: 'a' }}>
                        <Album profileImages={userProfile.images} />
                    </div>
                    <div style={{ gridArea: 'b' }}>
                        <Picture variant='Big' imageUrl={userProfile.imageUrl} />
                        <Info {...userProfile} />
                    </div>
                    <div style={{ gridArea: 'c' }}>
                        <FriendsList friends={userProfile.friends} />
                    </div>
                </div>
            }

        </Paper >
    )
}