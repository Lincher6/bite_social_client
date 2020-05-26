import React from 'react'
import {useStyles} from "../styles";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from "@material-ui/core/Typography";
import {NavLink} from "react-router-dom";
import dayjs from 'dayjs'
import 'dayjs/locale/ru'
import relativeTime from 'dayjs/plugin/relativeTime'
import {LikeBite} from "../LikeBite";
import {CommentBite} from "../CommentBite";
import {ReadMore} from "../../common/ReadMore/ReadMore";
import {DeleteBite} from "../DeleteBite/DeleteBite";

export const Bite = ({imageUrl, userHandle, createdAt, body, likesCount, commentsCount, biteId}) => {
    const classes = useStyles()
    dayjs.locale('ru')
    dayjs.extend(relativeTime)

    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.image}
                image={imageUrl}
                title='User image'
            />
            <div>
                <CardContent className={classes.content}>
                    <Typography
                        variant='h5'
                        component={NavLink}
                        to={`/users/${userHandle}`}
                        color='secondary'
                    >{userHandle}</Typography>
                    <Typography variant='body2' color='textSecondary'>{dayjs(createdAt).fromNow()}</Typography>
                    <ReadMore text={body} className={classes.body}/>
                </CardContent>
                <CardActions className={classes.actions}>
                    <LikeBite likesCount={likesCount} biteId={biteId}/>
                    <CommentBite commentsCount={commentsCount} biteId={biteId}/>
                </CardActions>
                <CardActions className={classes.delete}>
                    <DeleteBite biteId={biteId} userHandle={userHandle}/>
                </CardActions>
            </div>
        </Card>
    )
}