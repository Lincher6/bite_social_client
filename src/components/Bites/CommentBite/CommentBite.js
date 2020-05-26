import React, {useCallback} from 'react'
import {EditButton} from "../../common/EditButton";
import Comment from "@material-ui/icons/Comment";
import {useSelector} from "react-redux";
import {userSelectors} from "../../../model/user";

export const CommentBite = ({commentsCount, biteId}) => {
    const { authenticated } = useSelector(userSelectors.user)

    if (!authenticated) {
        return (
            <React.Fragment>
                <EditButton tip={'комментарии'} onClick={() => alert('нужно авторизироваться')}>
                    <Comment color='primary'/>
                </EditButton>
                {commentsCount}
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <EditButton tip={'комментарии'}>
                <Comment color='primary'/>
            </EditButton>
            {commentsCount}
        </React.Fragment>
    )
}