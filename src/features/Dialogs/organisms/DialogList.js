import React, { Fragment, useState, useEffect } from 'react'
import { useDialogs } from 'lib/hooks/useDialogs'
import { Dialog } from '../molecules/Dialog'
import { useHistory } from 'react-router-dom'

export const DialogList = (props) => {
    const [initiated, setInitiated] = useState(false)
    const dialogs = useDialogs()
    const history = useHistory()

    useEffect(() => {
        if (dialogs.length > 0 && !initiated) {
            history.push(`/dialogs/${dialogs[0].id}`)
            setInitiated(true)
        }
    }, [dialogs])

    return (
        <Fragment>
            {
                dialogs.map(dialog => {
                    return (
                        <Dialog key={dialog.id} {...dialog} />
                    )
                })
            }
        </Fragment>
    )
}