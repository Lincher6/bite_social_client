import React, { Fragment } from 'react'
import { Comment } from '../Comment'

export const CommentList = ({ comments }) => {
    return (
        <Fragment>
            {comments.map(comment => (
                <Comment key={comment.createdAt} />
            ))}
        </Fragment>
    )
}