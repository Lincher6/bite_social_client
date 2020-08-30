import React from 'react'
import classes from '../styles.module.scss'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from "@material-ui/core/Typography";
import { NavLink } from "react-router-dom";
import { Like } from "../molecules/Like";
import { Comment } from "../molecules/Comment";
import { ReadMore, IsOnline } from "features/common";
import { Delete } from "../molecules/Delete";
import { OpenBite } from '../molecules/OpenBite';
import { useDayjs } from 'lib/hooks/useDayjs';

export const Bite = ({ imageUrl, userHandle, createdAt, body, likesCount, commentsCount, biteId }) => {
    const { dayjs } = useDayjs()

    return (
        <Card className={classes.bite}>
            <CardMedia
                className={classes.image}
                image={imageUrl}
                component={NavLink}
                to={`/users/${userHandle}`}
                title='User image'
            >
                <IsOnline handle={userHandle} />
            </CardMedia>
            <div>
                <CardContent className={classes.content}>
                    <Typography
                        variant='h5'
                        component={NavLink}
                        to={`/users/${userHandle}`}
                        color='secondary'
                    >{userHandle}</Typography>
                    <Typography
                        variant='body2'
                        color='textSecondary'
                        className={classes.date}
                    >{dayjs(createdAt).fromNow()}</Typography>
                    <ReadMore text={body} className={classes.body} />
                </CardContent>
                <CardActions className={classes.actions}>
                    <Like likesCount={likesCount} biteId={biteId} />
                    <Comment commentsCount={commentsCount} biteId={biteId} />
                    <OpenBite biteId={biteId} />
                </CardActions>
                <CardActions className={classes.delete}>
                    <Delete biteId={biteId} userHandle={userHandle} />
                </CardActions>
            </div>
        </Card>
    )
}