import { makeStyles } from "@material-ui/core/styles";
import { theme } from '../../theme'

export const useStyles = makeStyles({
    comment: {
        padding: 5,
        marginBottom: 15,
        '& .image': {
            width: 70,
            height: 70,
            objectFit: 'cover',
            borderRadius: `50%`,
            [theme.breakpoints.down('xs')]: {
                width: 50,
                height: 50,
            },
        },
        '& .header': {
            display: `flex`,
            alignItems: `flex-end`,
            flexWrap: `wrap`,
        },
        '& .user-handle': {
            marginRight: 10
        },
        '& .date': {
            opacity: .6
        },
        '& .body': {
            whiteSpace: `pre`
        }
    },

    addCommentForm: {
        textAlign: `center`,
        '& .button': {
            position: `relative !important`,
            textAlign: `center`,
        },
        '& .formLoader': {
            position: `absolute`
        }


    },
})