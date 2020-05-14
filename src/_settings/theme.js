import {createMuiTheme} from "@material-ui/core/styles";

export const theme = createMuiTheme({
    palette: {
        type: 'light',
        primary: {
            main: `#455a64`,
            light: `#455a64`,
            dark: `#263238`,
            contrastText: `#fff`
        },
        secondary: {
            main: `#607d8b`,
            light: `#29b6f6`,
            dark: `#01579b`,
            contrastText: `#fff`,
        },
        background: {
            default: `rgba(240, 240, 240, 1)`,
        },
    }
})
