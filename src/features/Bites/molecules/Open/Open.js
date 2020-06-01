import React, { useState, Fragment } from 'react'
import { EditButton } from '../../../common'
import { BiteDetails } from '../../organisms/BiteDetails'
import OpenInNew from '@material-ui/icons/OpenInNew'
import { Dialog } from '@material-ui/core'

export const Open = ({ biteId }) => {
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