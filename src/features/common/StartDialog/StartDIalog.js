import React, { useMemo, useCallback } from 'react'
import { EditButton } from '../EditButton'
import { EmailOutlined } from '@material-ui/icons'
import { dialogsApi } from 'api/dialogsApi'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { profileSelectors } from 'features/Profile'

export const StartDialog = ({ recipient }) => {
    const { handle, imageUrl } = useSelector(profileSelectors.credentials)
    const dialogId = useMemo(() => {
        const users = [handle, recipient]
        users.sort()
        return users.join('')
    }, [handle, recipient])

    const startDialog = useCallback(() => {
        dialogsApi.startDialog(dialogId, recipient, imageUrl)
    }, [dialogId, recipient, imageUrl])

    return (
        <NavLink to={`dialogs/`}>
            <EditButton tip='написать' onClick={startDialog}>
                <EmailOutlined color='secondary' />
            </EditButton>
        </NavLink>
    )
}