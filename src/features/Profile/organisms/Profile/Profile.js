import React, { Fragment } from 'react'
import Paper from '@material-ui/core/Paper';
import { useStyles } from "../../styles";
import { Picture } from '../../molecules/Picture';
import { Info } from '../../molecules/Info';
import { useSelector } from 'react-redux';
import { profileSelectors } from '../../model';
import { CircularProgress } from '@material-ui/core';
import { Edit } from '../../molecules/Edit';
import { Album } from '../../molecules/Album';

export const Profile = (props) => {
    const classes = useStyles()
    const loadingProfile = useSelector(profileSelectors.loadingProfile)

    return (
        <Paper className={classes.profile}>
            {loadingProfile
                ? <CircularProgress size={80} color='primary' />
                : <Fragment>
                    <Picture variant='Big' />
                    <Info />
                    <Edit />
                    <Album />
                </Fragment>
            }

        </Paper >
    )
}