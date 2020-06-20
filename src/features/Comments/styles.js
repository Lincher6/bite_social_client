import { makeStyles } from "@material-ui/core/styles";
import { theme } from '../../theme'

export const useStyles = makeStyles({
    comment: {
        backgroundColor: `var(--darkBackground)`,
        borderRadius: 5,
        padding: 15,
        borderBottom: `1px solid #263b57`,
        borderRight: `1px solid #263b57`,
        marginBottom: 15,
        '& .image': {
            width: 75,
            height: 75,
            objectFit: 'cover',
            borderRadius: `50%`,
            [theme.breakpoints.down('xs')]: {
                marginRight: 10,
                width: 60,
                height: 60,
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