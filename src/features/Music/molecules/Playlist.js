import React from 'react'
import { useStyles } from '../styles'
import LoopIcon from '@material-ui/icons/Loop';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import ShuffleSharpIcon from '@material-ui/icons/ShuffleSharp';
import { PlayerButton } from '../atoms/PlayerButton'
import { useSelector, useDispatch } from 'react-redux';
import { musicSelectors, musicActions } from '../model';

export const Playlist = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const { looped, listOpen, random } = useSelector(musicSelectors.music)
    const { setLooped, setRandom, setListOpen } = musicActions


    const toggleLooped = () => {
        localStorage.setItem('looped', !looped)
        dispatch(setLooped(!looped))
    }

    const toggleRandom = () => {
        localStorage.setItem('random', !random)
        dispatch(setRandom(!random))
    }

    const toggleListOpen = () => {
        dispatch(setListOpen(!listOpen))
    }


    return (
        <div className={classes.playlist}>
            <PlayerButton Icon={LoopIcon} active={looped} clickHandler={toggleLooped} />
            <PlayerButton Icon={MenuSharpIcon} active={listOpen} clickHandler={toggleListOpen} />
            <PlayerButton Icon={ShuffleSharpIcon} active={random} clickHandler={toggleRandom} />
        </div>
    )
}