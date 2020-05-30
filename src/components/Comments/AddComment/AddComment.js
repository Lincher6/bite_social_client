import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { userSelectors } from '../../../model/user'
import { uiSelectors } from '../../../model/ui'
import { bitesActions, bitesSelectors } from '../../../model/bites'
import { AddCommentForm } from './AddCommentFrom'

export const AddComment = ({ biteId }) => {
    const authenticated = useSelector(userSelectors.authenticated)
    const errors = useSelector(uiSelectors.errors)
    const loadingComment = useSelector(bitesSelectors.loadingComment)
    const dispatch = useDispatch()

    const addComment = useCallback((comment) => {
        dispatch(bitesActions.addComment(biteId, comment))
    }, [dispatch, biteId])

    if (!authenticated) {
        return null
    }

    return (
        <AddCommentForm loading={loadingComment} fetchError={errors.error} addComment={addComment} />
    )
}