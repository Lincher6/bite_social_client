import React, { useCallback } from 'react'
import { EditButton } from "../../common/EditButton";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import Favorite from "@material-ui/icons/Favorite";
import { useDispatch, useSelector } from "react-redux";
import { userSelectors } from "../../../model/user";
import { bitesActions } from "../../../model/bites";
import IconButton from "@material-ui/core/IconButton";

export const LikeBite = ({ likesCount, biteId }) => {
    const { authenticated, likes } = useSelector(userSelectors.user)
    const liked = likes && likes.find(like => like.biteId === biteId)
    const dispatch = useDispatch()

    const like = useCallback(() => {
        dispatch(bitesActions.likeBite(biteId))
    }, [])

    const unlike = useCallback(() => {
        dispatch(bitesActions.unlikeBite(biteId))
    }, [])

    if (!authenticated) {
        return (
            <React.Fragment>
                <EditButton tip={'нравится'} onClick={() => alert('нужно авторизироваться')}>
                    <FavoriteBorder color='primary' className='icon' />
                </EditButton>
                {likesCount}
            </React.Fragment>
        )
    }

    if (liked) {
        return (
            <React.Fragment>
                <IconButton onClick={unlike}>
                    <Favorite color='primary' className='icon' />
                </IconButton>
                {likesCount}
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <EditButton tip={'нравится'} onClick={like}>
                <FavoriteBorder color='primary' className='icon' />
            </EditButton>
            {likesCount}
        </React.Fragment>
    )
}