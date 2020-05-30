import React from 'react'
import { useStyles } from "../styles";
import { NavLink } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import MuLink from '@material-ui/core/Link'
import LocationOn from '@material-ui/icons/LocationOn';
import LinkIcon from '@material-ui/icons/Link';
import CalendarToday from '@material-ui/icons/CalendarToday';
import { useDayjs } from '../../../hooks/useDayjs';

export const ProfileInfo = ({ handle, bio, location, website, createdAt, }) => {
    const classes = useStyles()
    const { dayjs, options } = useDayjs()

    return (
        <div className={classes.profileInfo}>
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
                    <LocationOn color='primary' className='icon' />&nbsp;
                    <span>{location}</span>
                    <hr />
                </>
            }
            {
                website &&
                <>
                    <LinkIcon color='primary' className='icon' />&nbsp;
                    <a href={website} target='_blanck' type='noreferer noopener'>{website}</a>
                    <hr />
                </>
            }
            {
                createdAt &&
                <>
                    <CalendarToday color='primary' className='icon' />&nbsp;
                    <span>Дата регистрации: {dayjs(createdAt).format(options.short)}</span>
                    <hr />
                </>
            }
        </div>
    )
}