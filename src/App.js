import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from "@material-ui/core/CssBaseline";
import { theme, darkTheme } from "./ui/theme";
import { Provider } from 'react-redux'
import { store } from './lib/store'
import { NavBar } from './features/Navigation';
import { Routes } from 'Routes';


export const App = () => (
    <ThemeProvider theme={darkTheme}>
        <Provider store={store}>
            <CssBaseline>
                <Router>
                    <React.Fragment>
                        <NavBar />
                        <div className="contentContainer">
                            <Routes />
                        </div>
                    </React.Fragment>
                </Router>
            </CssBaseline>
        </Provider>
    </ThemeProvider>
)
