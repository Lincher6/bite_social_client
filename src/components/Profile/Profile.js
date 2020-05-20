import React from 'react'
import { useStyles } from "./styles";
import Paper from '@material-ui/core/Paper';
import { NavLink } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import MuLink from '@material-ui/core/Link'
import LocationOn from '@material-ui/icons/LocationOn';
import LinkIcon from '@material-ui/icons/Link';
import CalendarToday from '@material-ui/icons/CalendarToday';
import dayjs from 'dayjs'
import 'dayjs/locale/ru'

export const Profile = props => {
    const { handle, imageUrl, bio, location, website, createdAt } = props.credentials
    const classes = useStyles()
    dayjs.locale('ru')

    return (
        <Paper className='paper'>
            <div className={classes.profile}>
                <div className='image-wrapper'>
                    <div className='image-wrapper'>
                        <img src={imageUrl} alt={'imageUrl'} className='profile-image' />
                    </div>
                </div>
                <hr />
                <div className='profile-details'>
                    <MuLink
                        component={NavLink}
                        to={`/users/${handle}`}
                        variant='h5'
                    >@{handle}</MuLink>
                    <hr />
                    {
                        bio &&
                        <>
                            <Typography variant='body2'>{bio}</Typography>
                            <hr />
                        </>
                    }
                    {
                        location &&
                        <>
                            <LocationOn color='primary' />&nbsp;
                            <span>{location}</span>
                            <hr />
                        </>
                    }
                    {
                        website &&
                        <>
                            <LinkIcon color='primary' />&nbsp;
                            <a href={website} target='_blanck' type='noreferer noopener'>{website}</a>
                            <hr />
                        </>
                    }
                    {
                        createdAt &&
                        <>
                            <CalendarToday color='primary' />&nbsp;
                            <span>Дата регистрации: {dayjs(createdAt).format('MMM YYYY')}</span>
                            <hr />
                        </>
                    }
                </div>

            </div>
        </Paper>
    )
}