import React from 'react'
import Paper from '@material-ui/core/Paper';
import { useStyles } from "../../styles";
import { Picture } from '../../molecules/Picture';
import { Info } from '../../molecules/Info';
import { useSelector } from 'react-redux';
import { profileSelectors } from '../../model';
import { CircularProgress } from '@material-ui/core';
import { Edit } from '../../molecules/Edit';
import { Album } from '../../molecules/Album';
import { FriendsList } from '../../molecules/FriendsList';

export const Profile = (props) => {
    const classes = useStyles()
    const { loadingProfile, images } = useSelector(profileSelectors.profile)
    const credentials = useSelector(profileSelectors.credentials)
    const friends = useSelector(profileSelectors.friends)

    return (
        <Paper className={classes.profile}>
            {loadingProfile
                ? <CircularProgress size={80} color='primary' />
                : <div className={classes.grid}>
                    <div style={{ gridArea: 'a' }}>
                        <Album profileImages={images} />
                    </div>
                    <div style={{ gridArea: 'b' }}>
                        <Picture variant='Big' imageUrl={credentials.imageUrl} authorized={true} />
                        <Info {...credentials} />
                        <Edit />
                    </div>
                    <div style={{ gridArea: 'c' }}>
                        <FriendsList friends={friends} />
                    </div>

                </div>
            }

        </Paper >
    )
}