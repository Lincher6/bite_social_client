import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { profileSelectors } from 'features/Profile'
import { uiSelectors } from 'features/Navigation'
import { bitesActions, bitesSelectors } from 'features/Bites'
import { AddCommentForm } from './AddCommentFrom'

export const AddComment = ({ biteId, focus }) => {
    const authenticated = useSelector(profileSelectors.authenticated)
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
        <AddCommentForm
            loading={loadingComment}
            fetchError={errors.error}
            addComment={addComment}
            focus={focus}
        />
    )
}