import React, { useEffect } from 'react'
import Paper from '@material-ui/core/Paper';
import { useStyles } from "features/Profile/styles";
import { Picture, FriendsList, Info, Album } from 'features/Profile';
import { useSelector, useDispatch } from 'react-redux';
import { usersSelectors, usersActions } from '../model';
import { ProfileSkeleton } from 'features/common';

export const UserProfile = ({ userHandle }) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const loadingUser = useSelector(usersSelectors.loadingUser)
    const userProfile = useSelector(usersSelectors.userProfile)


    useEffect(() => {
        dispatch(usersActions.getUserProfile(userHandle))
    }, [userHandle, dispatch])

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