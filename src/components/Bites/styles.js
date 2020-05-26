import { makeStyles } from "@material-ui/core/styles";
import { theme } from '../../theme'

export const useStyles = makeStyles({
    card: {
        position: `relative`,
        textAlign: `left`,
        display: 'flex',
        marginBottom: 20,
    },

    image: {
        margin: 10,
        boxShadow: `4px 4px 4px 0 rgba(200, 200, 200, 1)`,
        width: 165,
        minWidth: 165,
        height: 165,
        objectFit: 'contain'
    },

    content: {
        marginBottom: `30px !important`,
        width: `100%`
    },

    body: {
        wordWrap: "break-word",
    },

    list: {
        textAlign: `center`
    },

    actions: {
        position: 'absolute',
        bottom: -10,
        right: 0
    },

    delete: {
        position: 'absolute',
        top: -10,
        right: -10,
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

    [theme.breakpoints.down('sm')]: {
        image: {
            width: 100,
            minWidth: 100,
            height: 100,
            objectFit: 'contain'
        },

    },
})