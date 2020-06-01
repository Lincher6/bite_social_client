import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
    title: {
        textShadow: "1px 1px 2px black"
    },

    form: {
        textAlign: 'center',
        padding: 10
    },

    logo: {
        width: 300,
        height: 100
    },

    textField: {
        margin: `10px auto !important`
    },

    button: {
        marginTop: `25px !important`
    },

    loader: {
        position: `absolute`
    },

    link: {
        color: `var(--primary)`
    }
})