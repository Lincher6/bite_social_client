import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#33c9dc',
            main: '#00bcd4',
            dark: '#008394',
            contrastText: '#fff'
        },
        secondary: {
            light: '#ff6333',
            main: '#ff3d00',
            dark: '#b22a00',
            contrastText: '#fff'
        },
        background: {
            default: `#e8f0fe`,
        },
    },

    typography: {
        useNextVariants: true,
    }
})

theme.typography.body1 = {
    fontSize: '1rem',

    [theme.breakpoints.down('md')]: {
        fontSize: '0.9rem',
    },
    [theme.breakpoints.down('xs')]: {
        fontSize: '0.8rem',
    },
};

theme.typography.h5 = {
    fontSize: '1.5rem',
    fontWeight: 400,
    [theme.breakpoints.down('xs')]: {
        fontSize: '1.2rem',
        fontWeight: 400,
    },
};

export const darkTheme = createMuiTheme({
    palette: {
        type: `dark`,
        primary: {
            light: '#2f7274',
            main: '#00e5ff',
            dark: '#00889d',
            contrastText: '#222'
        },
        secondary: {
            light: '#ff6333',
            main: '#ee0092',
            dark: '#ad1457',
            contrastText: '#fff'
        },
        background: {
            default: `var(--darkBackground)`,
            paper: 'var(--paper)'
        },
        alternateTextColor: `blue`
    },

    typography: {
        fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
        useNextVariants: true,
        button: {
            fontWeight: 600,
        },

    },

    overrides: {
        MuiTooltip: {
            tooltip: {
                fontSize: ".8em",
                color: "#ccc",
                backgroundColor: "#131d28",
                margin: `0px !important`
            }
        },

        MuiIconButton: {
            root: {
                '&:hover': {
                    backgroundColor: "inherit",
                    opacity: .7,
                }
            }
        },
    }
})

darkTheme.typography.body1 = {
    fontSize: '1rem',
    [darkTheme.breakpoints.down('md')]: {
        fontSize: '0.9rem',
    },
    [darkTheme.breakpoints.down('xs')]: {
        fontSize: '0.8rem',
    },
}

darkTheme.typography.body2 = {
    fontSize: '0.9rem',
    [darkTheme.breakpoints.down('md')]: {
        fontSize: '0.8rem',
    },
    [darkTheme.breakpoints.down('xs')]: {
        fontSize: '0.7rem',
    },
}

darkTheme.typography.h5 = {
    fontSize: '1.5rem',
    fontWeight: 400,
    [darkTheme.breakpoints.down('xs')]: {
        fontSize: '1.2rem',
        fontWeight: 400,
    },
}