import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import { Dialog, Paper, CircularProgress } from '@material-ui/core'
import PhotoLibraryTwoToneIcon from '@material-ui/icons/PhotoLibraryTwoTone';
import { useStyles } from '../styles'
import ImageGallery from 'react-image-gallery';
import { useSelector } from 'react-redux';
import { uiSelectors } from 'features/Navigation';
import noAvatar from 'ui/assets/no-avatar.png'

export const Album = ({ profileImages = [] }) => {
    const classes = useStyles()
    const [open, setOpen] = useState(false)
    const loading = useSelector(uiSelectors.loading)

    const images = profileImages.map(image => {
        return { original: image, thumbnail: image }
    })

    if (images.length === 0) {
        images.push({ original: noAvatar, thumbnail: noAvatar })
    }

    return (
        <div className={classes.album}>
            <Button
                variant='outlined'
                color='primary'
                onClick={() => setOpen(true)}
            >
                <div style={{ display: `flex`, alignItems: `center` }}>
                    <div style={{ marginRight: 5 }}>
                        ФОТО
                    </div>
                    <PhotoLibraryTwoToneIcon />

                    <div>

                    </div>
                </div>

            </Button>

            <Dialog open={open} onBackdropClick={() => setOpen(false)} >
                <Paper>
                    {loading
                        ? <CircularProgress size={80} color='primary' />
                        : <ImageGallery items={images} />}
                </Paper>
            </Dialog>
        </div>
    )
}