import React from 'react'
import {useStyles} from "./styles";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from "@material-ui/core/Typography";
import {NavLink} from "react-router-dom";
import dayjs from 'dayjs'
import 'dayjs/locale/ru'
import relativeTime from 'dayjs/plugin/relativeTime'

export const BiteCard = props => {
    const classes = useStyles()
    dayjs.locale('ru')
    dayjs.extend(relativeTime)

    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.image}
                image={props.imageUrl}
                title='User image'
            />
            <CardContent className={classes.content}>
                <Typography
                    variant='h5'
                    component={NavLink}
                    to={`/users/${props.userHandle}`}
                    color='secondary'
                >{props.userHandle}</Typography>
                <Typography variant='body2' color='textSecondary'>{dayjs(props.createdAt).fromNow()}</Typography>
                <Typography variant='body1'>{props.body}</Typography>
            </CardContent>
        </Card>
    )
}