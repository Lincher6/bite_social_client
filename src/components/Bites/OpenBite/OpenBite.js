import React, { useState, Fragment } from 'react'
import { EditButton } from '../../common/EditButton'
import { BiteDetails } from '../BiteDetails.js'
import OpenInNew from '@material-ui/icons/OpenInNew'
import { Dialog } from '@material-ui/core'

export const OpenBite = ({ biteId }) => {
    const [open, setOpen] = useState(false)

    return (
        <Fragment>
            <EditButton tip={'открыть'} onClick={() => setOpen(true)}>
                <OpenInNew color='primary' className='icon' />
            </EditButton>
            <Dialog
                open={open}
                fullWidth
                scroll='body'
                onBackdropClick={() => setOpen(false)}
            >
                <BiteDetails biteId={biteId} setOpen={setOpen} />
            </Dialog>
        </Fragment>
    )
}