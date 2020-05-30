import { makeStyles } from "@material-ui/core/styles";
import { theme } from '../../theme'

export const useStyles = makeStyles({
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