import React, { useRef, useCallback } from 'react'
import { useStyles } from "../../styles";
import { useDispatch, useSelector } from 'react-redux'
import imageEdit from '../../../../assets/imageEdit.png'
import Tooltip from "@material-ui/core/Tooltip"
import { profileActions, profileSelectors } from '../../model'
import Carousel from 'react-material-ui-carousel'

export const Picture = ({ variant = '' }) => {
    const classes = useStyles()
    let imageFile = useRef(null)
    const { imageUrl } = useSelector(profileSelectors.credentials)
    const dispatch = useDispatch()

    const uploadImage = useCallback((event) => {
        dispatch(profileActions.uploadImage(event.target.files[0]))
    }, [dispatch])

    return (
        <div className={classes[`profilePicture${variant}`]}>
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