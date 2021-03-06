import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#33c9dc',
            main: '#00e5ff',
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
            main: '#ff6000',
            dark: '#a74103',
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
                fontSize: ".9em",
                color: "#ccc",
                backgroundColor: "#131d28",
                margin: `0px !important`
            }
        },

        MuiIconButton: {
            root: {
                padding: 10,
                [theme.breakpoints.down('xs')]: {
                    padding: 7,
                },
                '&:hover': {
                    backgroundColor: "inherit",
                    opacity: .7,
                }
            },
        },

        MuiCardContent: {
            root: {
                [theme.breakpoints.down('xs')]: {
                    padding: 10,
                },
            }
        },

        MuiDialog: {
            paper: {
                margin: 10,
                padding: 0,
                width: 1000
            },
        },

        MuiDialogContent: {
            root: {
                padding: 20,
                [theme.breakpoints.down('xs')]: {
                    padding: 10,
                },
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
        fontSize: '0.9rem',
    },
}

darkTheme.typography.body2 = {
    fontSize: '0.9rem',
    [darkTheme.breakpoints.down('md')]: {
        fontSize: '0.8rem',
    },
    [darkTheme.breakpoints.down('xs')]: {
        fontSize: '0.8rem',
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

darkTheme.typography.h6 = {
    fontSize: '1.3rem',
    fontWeight: 400,
    [darkTheme.breakpoints.down('xs')]: {
        fontSize: '1.1rem',
        fontWeight: 400,
    },
}
