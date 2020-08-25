import React, { Fragment, useState, useEffect } from 'react'
import { useDialogs } from 'features/Dialogs/lib/useDialogs'
import { Dialog } from '../molecules/Dialog'
import { useHistory, NavLink } from 'react-router-dom'
import classes from '../styles.module.scss'
import { DialogsSkeleton, EditButton } from 'features/common'
import { Button } from '@material-ui/core'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

export const DialogList = (props) => {
    const [initiated, setInitiated] = useState(false)
    const { dialogs, loading } = useDialogs()
    const history = useHistory()

    useEffect(() => {
        if (dialogs.length > 0 && !initiated) {
            history.push(`/dialogs/${dialogs[0].id}`)
            setInitiated(true)
        }
    }, [dialogs])


    return (
        <div className={classes.dialogList}>
            {
                !loading
                    ? dialogs.map(dialog => {
                        return (
                            <Dialog key={dialog.id} {...dialog} />
                        )
                    })
                    : <DialogsSkeleton />

            }
            <NavLink to='/users' className={classes.search}>
                <Button variant='outlined' color='secondary' className={classes.btnBig}>
                    Найти
                </Button>
                <EditButton className={classes.btnSmall} tip='найти'>
                    <AddCircleOutlineIcon color='secondary' />
                </EditButton>
            </NavLink>
        </div>
    )
}