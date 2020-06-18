import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { AppContent } from './AppContent'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from "@material-ui/core/CssBaseline";
import { theme, darkTheme } from "./theme";
import { Provider } from 'react-redux'
import { store } from './lib/store'

console.log(darkTheme.overrides.MuiDialog)

export const App = () => (
    <ThemeProvider theme={darkTheme}>
        <Provider store={store}>
            <CssBaseline>
                <Router>
                    <AppContent />
                </Router>
            </CssBaseline>
        </Provider>
    </ThemeProvider>

)
