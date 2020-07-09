import React, { useState } from 'react'
import { Dialog } from '@material-ui/core'

export const BiteCard = (props) => {
    const [open, setOpen] = useState

    return (
        <Dialog
            open={open}
            fullWidth
            scroll='body'
            onBackdropClick={() => setOpen(false)}
        >
            <BiteDetails biteId={biteId} setOpen={setOpen} />
        </Dialog>
    )
}