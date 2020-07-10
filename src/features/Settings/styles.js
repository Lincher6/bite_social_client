import { makeStyles } from "@material-ui/core/styles";
import { theme } from 'ui/theme'
import transitions from "@material-ui/core/styles/transitions";

export const useStyles = makeStyles({
    settingsIcon: {
        transition: 'all 1s',
        '&:hover': {
            transform: `rotate(180deg)`,
            transition: 'all 1s'
        }
    },

    menu: {
        '& .item': {
            height: 25,
            width: 150,
            display: `flex`,
            justifyContent: `space-between`
        }
    },
})