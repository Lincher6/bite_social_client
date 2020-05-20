import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
    profile: {
        '& .image-wrapper': {
            textAlign: 'center',
            position: 'relative',
            '& button': {
                position: 'absolute',
                top: '80%',
                left: '70%'
            }
        },
        '& .profile-image': {
            width: '200px',
            height: '200px',
            objectFit: 'cover',
            maxWidth: '100%',
            borderRadius: `50%`
        },
        '& hr': {
            border: 'none',
            marginBottom: '5px'
        },
        '& .profile-details': {
            textAlign: 'center',
            '& svg, span': {
                verticalAlign: 'middle'
            },
            '& a': {
                color: '#00bcd4'
            },
            '& svg.button': {
                '&:hover': {
                    cursor: 'pointer'
                }
            }
        }
    }
})