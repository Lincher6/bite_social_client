import React from 'react'
import Paper from '@material-ui/core/Paper';
import { useStyles } from "../../styles";
import { useSelector } from "react-redux";
import { NoProfile } from '../../molecules/NoProfile';
import { Picture } from '../../molecules/Picture';
import { Info } from '../../molecules/Info';
import { Edit } from '../../molecules/Edit';
import { CircularProgress } from '@material-ui/core';
import { Logout } from "../../../Authentication";
import { profileSelectors } from '../../model';


export const ProfileCard = props => {
    const classes = useStyles()
    const { authenticated, loadingProfile, credentials } = useSelector(profileSelectors.profile)

    if (loadingProfile) {
        return (
            <Paper className='paper'>
                <div className={classes.loading}>
                    <CircularProgress size={80} />
                </div>
            </Paper>
        )
    }

    if (!authenticated) {
        return <NoProfile />
    }

    return (
        <Paper className={classes.profileCard}>
            <Picture imageUrl={credentials.imageUrl} />
            <Info {...credentials} />
            <Edit />
            <Logout className={classes.exitButton} color={'primary'} />
        </Paper>
    )

}