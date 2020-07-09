import React, { Fragment } from 'react'
import { Comment } from './Comment'
import { Typography } from '@material-ui/core'

export const CommentList = ({ comments }) => {

    if (comments.length === 0) {
        return (
            <Typography variant='body1' style={{ textAlign: `center` }}>
                Нет комментариев
            </Typography>
        )
    }

    return (
        <Fragment>
            {comments.map(comment => (
                <Comment key={comment.createdAt} {...comment} />
            ))}
        </Fragment>
    )
}