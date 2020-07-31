import { makeStyles } from "@material-ui/core/styles";
import { theme } from '../../ui/theme'

export const useStyles = makeStyles({
    userProfile: {
        marginTop: 130,
        marginBottom: 20,
        textAlign: `center`,
        padding: 20,
        position: `relative`,
    },

    userList: {
        textAlign: `center`,
        display: `flex`,
        justifyContent: `space-evenly`,
        flexWrap: `wrap`
    },

    user: {
        padding: 10,
        width: 230,
        [theme.breakpoints.down('xs')]: {
            width: 300,
        },
        margin: 5,
        textAlign: `center`,
        '& svg, span': {
            verticalAlign: 'middle'
        },
        '& .image': {
            position: `relative`,
            borderRadius: `50% `,
            width: 100,
            minWidth: 100,
            height: 100,
            margin: `0 auto`,
            objectFit: 'cover',
            [theme.breakpoints.down('sm')]: {
                width: 100,
                minWidth: 100,
                height: 100,
            },
            '& .isOnline': {
                position: "absolute",
                right: `7%`,
                bottom: `7%`,
                height: 15,
                width: 15,
                backgroundColor: `var(--primary)`,
                borderRadius: `50%`,
                border: `2px solid white`
            }
        },
        '& .info': {
            verticalAlign: 'middle',
            overflow: `hidden`
        },
        '& .actions': {
            display: `flex`,
            justifyContent: 'center',
            alignItems: `center`,
            width: `100%`,
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

    saerchForm: {
        width: 350,
        textAlign: 'center',
        padding: 20,
        '& .field': {
            marginBottom: 20,
            position: `relative`,
            [theme.breakpoints.down('xs')]: {
                marginBottom: 10,
            },
        },
        '& .icon': {
            position: `absolute`,
            right: 0,
            bottom: `10%`
        }
    },
})