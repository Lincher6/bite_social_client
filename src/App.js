import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AppContent } from './AppContent'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from "@material-ui/core/CssBaseline";
import { theme } from "./theme";
import { Provider } from 'react-redux'
import { store } from './model/store'

export const App = () => (
    <ThemeProvider theme={theme}>S
        <Provider store={store}>
            <CssBaseline>
                <Router>
                    <AppContent />
                </Router>
            </CssBaseline>
        </Provider>
    </ThemeProvider>

)
