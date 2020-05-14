import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {login} from "./pages/login/login";
import {signUp} from "./pages/signUp/signUp";
import {Home} from "./pages/home/Home";
import {NavBar} from "./components/NavBar/NavBar";
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from "@material-ui/core/CssBaseline";
import {theme} from "./_settings/theme";

export const App = () => (
    <ThemeProvider theme={theme}>
        <CssBaseline>
            <Router>
                <NavBar/>
                <div className='contentContainer'>
                    <Switch>
                        <Route exact path={'/login'} component={login}/>
                        <Route exact path={'/signUp'} component={signUp}/>
                        <Route path={'/'} component={Home}/>
                    </Switch>
                </div>
            </Router>
        </CssBaseline>
    </ThemeProvider>

)
