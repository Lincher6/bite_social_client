import React from 'react'
import { useStyles } from "../styles";
import Typography from "@material-ui/core/Typography";
import LocationOn from '@material-ui/icons/LocationOn';
import LinkIcon from '@material-ui/icons/Link';
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import EventTwoToneIcon from '@material-ui/icons/EventTwoTone';
import { useDayjs } from 'lib/hooks/useDayjs';
import { useSession } from 'lib/hooks/useSession';
import { Location } from '../atoms/Location';
import { OnlineStatus } from './OnlineStatus';
import { Website } from '../atoms/Website';

export const Info = ({ handle, bio, location, website, createdAt }) => {
    const classes = useStyles()
    const { dayjs, options } = useDayjs()

    return (
        <div className={classes.profileInfo}>

            <Typography
                color='secondary'
                variant='h5'
            >{handle}</Typography>
            <OnlineStatus handle={handle} />
            <hr />

            <Typography variant='body2'>
                <AccountCircleTwoToneIcon color='primary' />&nbsp;
                {bio || 'Новый пользователь'}
            </Typography>
            <hr />

            <Location location={location} />
            <hr />

            <Website website={website} />
            <hr />

            <>
                <EventTwoToneIcon color='primary' className='icon' />&nbsp;
                <span>Дата регистрации: {dayjs(createdAt).format(options.short)}</span>
                <hr />
            </>
        </div>
    )
}