import React, { useRef, useCallback } from 'react'
import { useStyles } from "../../styles";
import { useDispatch } from 'react-redux'
import imageEdit from '../../../../assets/imageEdit.png'
import Tooltip from "@material-ui/core/Tooltip"
import { profileActions } from '../../model'

export const Picture = ({ imageUrl }) => {
    const classes = useStyles()
    let imageFile = useRef(null)
    const dispatch = useDispatch()

    const uploadImage = useCallback((event) => {
        dispatch(profileActions.uploadImage(event.target.files[0]))
    }, [])

    return (
        <div className={classes.profilePicture}>
            <div className='image-wrapper'>
                <img src={imageUrl} alt={'imageUrl'} className='profile-image' />
                <input
                    type='file'
                    ref={imageFile}
                    hidden='hidden'
                    onChange={uploadImage}
                />
                <Tooltip placement='top' title={'Добавить фото'}>
                    <img
                        src={imageEdit}
                        alt={'imageUrl'}
                        className='image-edit'
                        onClick={() => imageFile.current.click()} />
                </Tooltip>
            </div>
        </div>
    )
}