import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { AuthRoute } from './components/AuthRoute'
import { Login } from "./pages/login/Login";
import { SignUp } from "./pages/signUp/SignUp";
import { Home } from "./pages/home/Home";
import { NavBar } from "./components/NavBar/NavBar";
import { useInitialization } from './hooks/useInitialization'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';

export const AppContent = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    useInitialization(dispatch, history)

    return (
        <React.Fragment>
            <NavBar />
            <div className='contentContainer'>
                <Switch>
                    <AuthRoute exact path={'/login'} component={Login} />
                    <AuthRoute exact path={'/signUp'} component={SignUp} />
                    <Route path={'/'} component={Home} />
                </Switch>
            </div>
        </React.Fragment>
    )
}