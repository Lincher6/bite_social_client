import React, { Fragment } from 'react'

export const AlbumImage = ({ image }) => {
    return (
        <Fragment>
            <img src={image.imageUrl} alt='albumImage' className='album-image' />
        </Fragment>
    )
}