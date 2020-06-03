import React, { Fragment, useState } from 'react'
import { Button } from '../../../common'
import { Typography, Dialog, Paper } from '@material-ui/core'
import Carousel from 'react-material-ui-carousel'
import { useStyles } from '../../styles'
import { AlbumImage } from '../../atoms/AlbumImage'

import AwesomeSlider from 'react-awesome-slider';
import ImageGallery from 'react-image-gallery';

export const Album = (props) => {
    const classes = useStyles()
    const [open, setOpen] = useState(false)
    const images = [
        {
            original: `https://homepages.cae.wisc.edu/~ece533/images/airplane.png`,
            thumbnail: `https://homepages.cae.wisc.edu/~ece533/images/airplane.png`,
        }, {
            original: `https://homepages.cae.wisc.edu/~ece533/images/airplane.png`,
            thumbnail: `https://homepages.cae.wisc.edu/~ece533/images/airplane.png`,
        },
        {
            original: `https://homepages.cae.wisc.edu/~ece533/images/airplane.png`,
            thumbnail: `https://homepages.cae.wisc.edu/~ece533/images/airplane.png`,
        }, {
            original: `https://homepages.cae.wisc.edu/~ece533/images/airplane.png`,
            thumbnail: `https://homepages.cae.wisc.edu/~ece533/images/airplane.png`,
        },
        {
            original: `https://homepages.cae.wisc.edu/~ece533/images/airplane.png`,
            thumbnail: `https://homepages.cae.wisc.edu/~ece533/images/airplane.png`,
        }, {
            original: `https://homepages.cae.wisc.edu/~ece533/images/airplane.png`,
            thumbnail: `https://homepages.cae.wisc.edu/~ece533/images/airplane.png`,
        },
        {
            original: `https://homepages.cae.wisc.edu/~ece533/images/airplane.png`,
            thumbnail: `https://homepages.cae.wisc.edu/~ece533/images/airplane.png`,
        }, {
            original: `https://homepages.cae.wisc.edu/~ece533/images/airplane.png`,
            thumbnail: `https://homepages.cae.wisc.edu/~ece533/images/airplane.png`,
        },
        {
            original: `https://homepages.cae.wisc.edu/~ece533/images/airplane.png`,
            thumbnail: `https://homepages.cae.wisc.edu/~ece533/images/airplane.png`,
        }, {
            original: `https://homepages.cae.wisc.edu/~ece533/images/airplane.png`,
            thumbnail: `https://homepages.cae.wisc.edu/~ece533/images/airplane.png`,
        },
        {
            original: `https://homepages.cae.wisc.edu/~ece533/images/airplane.png`,
            thumbnail: `https://homepages.cae.wisc.edu/~ece533/images/airplane.png`,
        }, {
            original: `https://homepages.cae.wisc.edu/~ece533/images/airplane.png`,
            thumbnail: `https://homepages.cae.wisc.edu/~ece533/images/airplane.png`,
        },
        {
            original: `https://homepages.cae.wisc.edu/~ece533/images/airplane.png`,
            thumbnail: `https://homepages.cae.wisc.edu/~ece533/images/airplane.png`,
        }, {
            original: `https://homepages.cae.wisc.edu/~ece533/images/airplane.png`,
            thumbnail: `https://homepages.cae.wisc.edu/~ece533/images/airplane.png`,
        },
        {
            original: `https://homepages.cae.wisc.edu/~ece533/images/airplane.png`,
            thumbnail: `https://homepages.cae.wisc.edu/~ece533/images/airplane.png`,
        }, {
            original: `https://homepages.cae.wisc.edu/~ece533/images/airplane.png`,
            thumbnail: `https://homepages.cae.wisc.edu/~ece533/images/airplane.png`,
        },
    ]

    return (
        <div className={classes.album}>
            <Button onClick={() => setOpen(true)}>
                Фото
            </Button>
            <Typography>
                {10}
            </Typography>

            <Dialog open={open} onBackdropClick={() => setOpen(false)} className={classes.album}>
                <Paper className="carousel">
                    <ImageGallery items={images} />
                </Paper>

            </Dialog>
        </div>
    )
}