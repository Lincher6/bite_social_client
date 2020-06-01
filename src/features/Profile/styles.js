import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
    profile: {
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
        '& button': {
            position: 'absolute',
            top: '80%',
            left: '80%'
        },
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

    profileGalery: {
        overflowY: `scroll`,
        padding: 20,
        minHeight: 200,
        maxHeight: 400,
        '& .header': {
            display: `flex`,
            justifyContent: `space-between`,
            alignItems: `center`
        },
        '& .body': {
            display: `flex`,
            flexWrap: `wrap`,
            '& .image': {
                width: 80,
                height: 80,
                borderRadius: `2px`,
                margin: 1
            }
        }
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
        position: `absolute`,
        top: 0,
        right: 0
    }
})