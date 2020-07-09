import { makeStyles } from "@material-ui/core/styles";
import { theme } from '../../ui/theme'

export const useStyles = makeStyles({
    notificationsList: {
        maxHeight: 400,
        overflowY: `scroll`
    },

    notification: {
        display: `flex`,
        alignItems: `center`,
        '& .icon': {
            marginRight: 10
        },
        '& .date': {
            opacity: .5
        }
    }
})