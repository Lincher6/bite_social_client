import React from 'react'
import Paper from '@material-ui/core/Paper';
import { useStyles } from "./styles";
import { useDispatch } from "react-redux";
import { NoProfile } from './NoProfile';
import { ProfilePicture } from './ProfilePicture';
import { ProfileInfo } from './ProfileInfo';
import { EditProfile } from './EditProfile';
import { CircularProgress } from '@material-ui/core';
import {Logout} from "../Authentication/Logout";


export const Profile = props => {
    const classes = useStyles()
    const { authenticated, loadingUser } = props
    const { imageUrl } = props.credentials

    if (loadingUser) {
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
        <Paper className={classes.profile}>
            <ProfilePicture imageUrl={imageUrl} />
            <ProfileInfo {...props.credentials} />
            <EditProfile />
            <Logout className={classes.exitButton} color={'primary'}/>
        </Paper>
    )

}