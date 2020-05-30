import React from 'react'
import { useStyles } from "../styles";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from "@material-ui/core/Typography";
import { NavLink } from "react-router-dom";
import { LikeBite } from "../LikeBite";
import { CommentBite } from "../CommentBite";
import { ReadMore } from "../../common/ReadMore/ReadMore";
import { DeleteBite } from "../DeleteBite/DeleteBite";
import { OpenBite } from '../OpenBite';
import { useDayjs } from '../../../hooks/useDayjs';

export const Bite = ({ imageUrl, userHandle, createdAt, body, likesCount, commentsCount, biteId }) => {
    const classes = useStyles()
    const { dayjs } = useDayjs()

    return (
        <Card className={classes.bite}>
            <CardMedia
                className='image'
                image={imageUrl}
                title='User image'
            />
            <div>
                <CardContent className='content'>
                    <Typography
                        variant='h5'
                        component={NavLink}
                        to={`/users/${userHandle}`}
                        color='secondary'
                    >{userHandle}</Typography>
                    <Typography
                        variant='body2'
                        color='textSecondary'
                        className='date'
                    >{dayjs(createdAt).fromNow()}</Typography>
                    <ReadMore text={body} className='body' />
                </CardContent>
                <CardActions className='actions'>
                    <LikeBite likesCount={likesCount} biteId={biteId} />
                    <CommentBite commentsCount={commentsCount} biteId={biteId} />
                    <OpenBite biteId={biteId} />
                </CardActions>
                <CardActions className='delete'>
                    <DeleteBite biteId={biteId} userHandle={userHandle} />
                </CardActions>
            </div>
        </Card>
    )
}