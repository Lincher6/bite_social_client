import { makeStyles } from "@material-ui/core/styles";
import { theme } from '../../theme'
import { keyframes } from "styled-components";

export const useStyles = makeStyles({
    profile: {
        marginTop: 130,
        marginBottom: 20,
        textAlign: `center`,
        padding: 20,
        position: `relative`,
    },

    grid: {
        display: `grid`,
        gridTemplateAreas: `
            'a b b c'
            `,
        [theme.breakpoints.down('xs')]: {
            gridTemplateAreas: `
            'b b b b'
            'a a c c'
            `,
        },

    },

    profileCard: {
        textAlign: `center`,
        padding: 20,
        position: `relative`,
        '& button': {
            margin: 10
        }
    },

    profileInfo: {
        textAlign: 'center',
        '& svg, span': {
            verticalAlign: 'middle'
        },
        '& a': {
            color: 'var(--primary)'
        },
        '& hr': {
            border: 'none',
            marginBottom: 5
        },
        '& svg.button': {
            '&:hover': {
                cursor: 'pointer'
            }
        }
    },

    profilePicture: {
        textAlign: 'center',
        position: 'relative',
        marginBottom: 10,
        '& .profile-image': {
            width: '200px',
            height: '200px',
            objectFit: 'cover',
            maxWidth: '100%',
            borderRadius: `50%`,
        },
        '& .image-edit:hover': {
            opacity: .4,
            transition: `opacity .3s`,
            cursor: 'pointer'
        },
        '& .image-edit': {
            opacity: 0,
            transition: `opacity .3s`,
            width: '200px',
            height: '200px',
            objectFit: 'cover',
            maxWidth: '100%',
            borderRadius: `50%`,
            position: 'absolute',
            margin: 'auto',
            top: 0, left: 0, bottom: 5, right: 0
        }
    },

    profilePictureBig: {
        textAlign: 'center',
        position: 'relative',
        marginBottom: 10,
        marginTop: -120,
        '& .profile-image': {
            border: `5px solid ivory`,
            width: '200px',
            height: '200px',
            objectFit: 'cover',
            maxWidth: '100%',
            boxShadow: `0 15px 30px 0 rgba(0, 0, 0, .5)`,
        },
        '& .image-edit:hover': {
            opacity: .4,
            transition: `opacity .3s`,
            cursor: 'pointer'
        },
        '& .image-edit': {
            opacity: 0,
            transition: `opacity .3s`,
            width: '200px',
            height: '200px',
            objectFit: 'cover',
            maxWidth: '100%',
            position: 'absolute',
            margin: 'auto',
            top: 0, left: 0, bottom: 5, right: 0
        }
    },

    album: {
        margin: 10,
    },

    carousel: {
        color: `var(--primary)`
    },

    noProfile: {
        '& .buttons': {
            margin: 5
        },
        textAlign: "center",
    },

    loading: {
        textAlign: "center",
    },

    exitButton: {
        position: `absolute !important`,
        top: 0,
        right: 0
    }
})