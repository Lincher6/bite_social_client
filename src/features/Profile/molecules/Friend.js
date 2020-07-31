import React, { Fragment } from 'react'
import { useStyles } from '../styles'
import { Typography } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import { StartDialog } from 'features/common'
import { Follow } from 'features/Users/molecules/Follow'
import { IsOnline } from 'features/common'

export const Friend = ({ handle, imageUrl }) => {
    const classes = useStyles()

    return (
        <Fragment>
            <div className={classes.friend} >
                <NavLink to={`/users/${handle}`} className='friend-image-container'>
                    <img src={imageUrl} alt={'friend'} className='friend-image' />
                    <IsOnline handle={handle} />
                </NavLink>
                <div className='friend-info'>
                    <div style={{ display: `flex`, alignItems: `center` }}>
                        <NavLink to={`/users/${handle}`} >
                            <Typography variant='body1' color='secondary' className='friend-handle'>
                                {handle}
                            </Typography>
                        </NavLink>
                        <StartDialog recipient={handle} />
                    </div>

                    <Follow userHandle={handle} />
                </div>
            </div >

        </Fragment>

    )
}