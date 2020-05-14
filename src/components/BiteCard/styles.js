import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
    card: {
        display: 'flex',
        marginBottom: 20,
    },
    image: {
        minWidth: 200,
        minHeight: 200,
        objectFit: 'contain'
    },
    content: {
        padding: 20
    }
})