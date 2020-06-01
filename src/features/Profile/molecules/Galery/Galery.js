import React from 'react'
import { Paper } from '@material-ui/core'
import { useStyles } from '../../styles'
import { Typography } from '../../../common'
import { EditButton } from '../../../common'
import { AddCircleOutline } from '@material-ui/icons'

export const Galery = (props) => {
    const classes = useStyles()

    return (
        <Paper className={classes.profileGalery}>
            <div className="header">
                <Typography variant='h5' color='primary'>
                    Галерея
                </Typography>
                <EditButton tip='добавить фото'>
                    <AddCircleOutline color='primary' />
                </EditButton>
            </div>
            <div className="body">
                <img src='https://pixlr.com/photo/online-image-editor-20200512-pw.jpg' alt='' className='image' />
                <img src='https://pixlr.com/photo/online-image-editor-20200512-pw.jpg' alt='' className='image' />
                <img src='https://pixlr.com/photo/online-image-editor-20200512-pw.jpg' alt='' className='image' />
                <img src='https://pixlr.com/photo/online-image-editor-20200512-pw.jpg' alt='' className='image' />
                <img src='https://pixlr.com/photo/online-image-editor-20200512-pw.jpg' alt='' className='image' />
                <img src='https://pixlr.com/photo/online-image-editor-20200512-pw.jpg' alt='' className='image' />
                <img src='https://pixlr.com/photo/online-image-editor-20200512-pw.jpg' alt='' className='image' />

            </div>
        </Paper>
    )
}