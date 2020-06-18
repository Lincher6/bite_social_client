import { makeStyles } from "@material-ui/core/styles";
import { theme } from '../../theme'

export const useStyles = makeStyles({
    userProfile: {
        marginTop: 130,
        marginBottom: 20,
        textAlign: `center`,
        padding: 20,
        position: `relative`,
    },

    list: {
        textAlign: `center`
    },

    user: {
        marginBottom: 20,
        padding: 20,
        '& .container': {
            display: `flex`,
        },
        '& .image': {
            borderRadius: `50% `,
            width: 140,
            minWidth: 140,
            height: 140,
            marginRight: 20,
            objectFit: 'cover',
            [theme.breakpoints.down('sm')]: {
                width: 100,
                minWidth: 100,
                height: 100,
            },
        },
        '& .content': {
            flexGrow: 1
        },
        '& .title': {
            display: `flex`,
            justifyContent: 'space-between',
            alignItems: `center`,
            flexGrow: 1,
            flexWrap: `wrap`,
            '& svg, span': {
                verticalAlign: 'middle'
            },
        },
        '& .body': {
            textAlign: `left`,
        },
        '& .actions': {
            display: `flex`,
            justifyContent: 'space-between',
            alignItems: `center`,
            width: `100%`,
            marginTop: 20
        },
    },
    loading: {
        textAlign: "center",
    },

    exitButton: {
        position: `absolute`,
        top: 0,
        right: 0
    },

    form: {
        textAlign: 'center',
        padding: 20,
        [theme.breakpoints.down('xs')]: {
            padding: 10,
        },
        '& .field': {
            marginBottom: 20,
            [theme.breakpoints.down('xs')]: {
                marginBottom: 10,
            },
        }
    },
})