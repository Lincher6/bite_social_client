import { makeStyles } from "@material-ui/core/styles";
import { theme } from '../../theme'

export const useStyles = makeStyles({
    bite: {
        position: `relative`,
        textAlign: `left`,
        display: 'flex',
        marginBottom: 20,
        '& .image': {
            boxShadow: `3px 3px 4px 1px var(--darkBackground)`,
            width: 185,
            minWidth: 185,
            height: 185,
            objectFit: 'contain',
            [theme.breakpoints.down('xs')]: {
                margin: 10,
                width: 100,
                minWidth: 100,
                height: 100,
                borderRadius: `50%`,
                objectFit: 'contain',
                border: `none`,
                boxShadow: `none`,


            },
        },
        '& .content': {
            marginBottom: `35px !important`,
            width: `100%`,
            '& .body': {
                wordWrap: "break-word"
            },
            '& .date': {
                opacity: .6
            }
        },
        '& .actions': {
            position: 'absolute',
            bottom: -8,
            right: 0
        },
        '& .delete': {
            position: 'absolute',
            top: -10,
            right: -10,
        },
    },

    biteDetails: {
        padding: 20,
        wordWrap: "break-word",
        position: `relative`,
        '& .loader': {
            margin: 30,
            textAlign: `center`
        },
        '& .image-wrapper': {
            textAlign: `center`,
            marginBottom: 10,
            '& .image': {
                width: 180,
                minWidth: 180,
                height: 180,
                borderRadius: `50%`,
                objectFit: 'cover',
            }
        },
        '& .userHandle': {
            marginBottom: 10,
            textAlign: `center`,
            color: `var(--primary)`
        },
        '& .date': {
            marginBottom: 7,
            opacity: .6,
        },
        '& .body': {

        },
        '& .actions': {
            marginLeft: -10
        },
        '& .comments': {
            '& .title': {
                textAlign: `center`,
                marginBottom: `15px !important`
            }
        },
    },

    list: {
        textAlign: `center`
    },

    addBite: {
        position: `relative`
    },

    close: {
        position: `absolute`,
        top: 0,
        right: 0
    },

    addBiteForm: {
        textAlign: `right`,
        '& .testField': {
            marginBottom: 20,
        },
        '& .button': {
            textAlign: `center`,
        },
        '& .loader': {
            position: `absolute`
        }
    },
})