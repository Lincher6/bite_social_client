import React from 'react'
import { EditButton } from '../EditButton'
import { EmailOutlined } from '@material-ui/icons'
import { dialogsApi } from 'api/dialogsApi'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { profileSelectors } from 'features/Profile'

export const StartDialog = ({ recipient }) => {
    const { handle } = useSelector(profileSelectors.credentials)

    const startDialog = () => {
        const users = [handle, recipient]
        users.sort()
        dialogsApi.startDialog(users.join(''), recipient)
    }

    return (
        <NavLink to='dialogs'>
            <EditButton tip='написать' onClick={startDialog}>
                <EmailOutlined color='secondary' />
            </EditButton>
        </NavLink>
    )
}