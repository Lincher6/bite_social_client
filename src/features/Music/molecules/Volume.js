import React, { useEffect } from 'react';
import { useStyles } from '../styles'
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';
import { musicSelectors } from '../model';
import { useSelector } from 'react-redux';

export const Volume = () => {
    const classes = useStyles();
    const audio = useSelector(musicSelectors.audio)
    const [value, setValue] = React.useState(localStorage.getItem('volume') ? Number(localStorage.getItem('volume')) : 50);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        localStorage.setItem('volume', value)
        audio.volume = value / 100
    }, [audio, value])

    return (
        <div className={classes.volume}>
            <div>
                <VolumeDown onClick={() => { setValue(0) }} style={{ cursor: `pointer` }} />
            </div>
            <div>
                <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" className='slider' />
            </div>
            <div>
                <VolumeUp onClick={() => { setValue(100) }} style={{ cursor: `pointer` }} />
            </div>
        </div>
    );
}