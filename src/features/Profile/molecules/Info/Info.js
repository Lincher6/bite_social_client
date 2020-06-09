import React from 'react'
import { useStyles } from "../../styles";
import Typography from "@material-ui/core/Typography";
import LocationOn from '@material-ui/icons/LocationOn';
import LinkIcon from '@material-ui/icons/Link';
import CalendarToday from '@material-ui/icons/CalendarToday';
import { useDayjs } from '../../../../lib/hooks/useDayjs';

export const Info = ({ handle, bio, location, website, createdAt }) => {
    const classes = useStyles()
    const { dayjs, options } = useDayjs()

    return (
        <div className={classes.profileInfo}>
            <Typography
                color='primary'
                variant='h5'
            >{handle}</Typography>
            <hr />

            <Typography variant='body2'>
                {bio || 'Новый пользователь'}
            </Typography>
            <hr />

            <LocationOn color='primary' className='icon' />&nbsp;
            <span>
                {location || 'нет информации'}
            </span>
            <hr />

            <LinkIcon color='primary' className='icon' />&nbsp;
            {website
                ? <a href={website} target='_blanck' type='noreferer noopener'>
                    {website}
                </a>
                : <span>{'нет информации'}</span>

            }
            <hr />

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