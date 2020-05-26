import { makeStyles } from "@material-ui/core/styles";
import { theme } from '../../../theme'

export const useStyles = makeStyles({
    helperText: {
        color: theme.palette.primary.main,
        fontSize: `1em`,
        cursor: `pointer`
    }
})