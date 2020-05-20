import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
    card: {
        display: 'flex',
        marginBottom: 20,
    },
    image: {
        minWidth: 150,
        minHeight: 150,
        objectFit: 'contain'
    },
    content: {
        padding: 20
    }
})