import React, { Fragment } from 'react'
import noTrack from 'ui/assets/no-track.png'
import { useStyles } from '../styles';
import playBtn from 'ui/assets/playBtn.png'
import { CircularProgress, IconButton } from '@material-ui/core';
import LoopIcon from '@material-ui/icons/Loop';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import ShuffleSharpIcon from '@material-ui/icons/ShuffleSharp';
import SkipNextOutlinedIcon from '@material-ui/icons/SkipNextOutlined';
import SkipPreviousOutlinedIcon from '@material-ui/icons/SkipPreviousOutlined';

export const PlayerSkeleton = (props) => {
    const classes = useStyles()

    return (
        <div className={classes.playerSkeleton}>
            <img src={noTrack} alt="noImg" className='image' />
            <div className='progress' />
            <div className="controls">
                <IconButton >
                    <SkipPreviousOutlinedIcon style={{ fontSize: 40 }} />
                </IconButton>
                <img src={playBtn} className='playBtn' alt="" />
                <IconButton>
                    <SkipNextOutlinedIcon style={{ fontSize: 40 }} />
                </IconButton>
            </div>
            <div className="playlistOptions">
                <IconButton>
                    <LoopIcon />
                </IconButton>
                <IconButton>
                    <MenuSharpIcon />
                </IconButton>
                <IconButton>
                    <ShuffleSharpIcon />
                </IconButton>
                <CircularProgress size={80} className='preloader' />
            </div>
        </div>
    )
}