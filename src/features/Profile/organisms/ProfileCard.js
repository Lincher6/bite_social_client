import React from 'react'
import Paper from '@material-ui/core/Paper';
import { useStyles } from "../styles";
import { useSelector } from "react-redux";
import { NoProfile } from '../molecules/NoProfile';
import { Picture } from '../molecules/Picture';
import { Info } from '../molecules/Info';
import { Edit } from '../molecules/Edit';
import { Logout } from "../../Authentication";
import { profileSelectors } from '../model';
import { ProfileCardSkeleton } from '../../common';


export const ProfileCard = props => {
    const classes = useStyles()
    const { authenticated, loadingProfile, credentials } = useSelector(profileSelectors.profile)

    if (loadingProfile) {
        return (
            <ProfileCardSkeleton />
        )
    }

    if (!authenticated) {
        return <NoProfile />
    }

    return (
        <Paper className={classes.profileCard}>
            <Picture imageUrl={credentials.imageUrl} authorized={true} />
            <Info {...credentials} />
            <Edit />
            <Logout className={classes.exitButton} color={'primary'} />
        </Paper>
    )

}