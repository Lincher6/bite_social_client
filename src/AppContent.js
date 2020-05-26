import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { AuthRoute } from './components/common/AuthRoute'
import { Login } from "./pages/login/Login";
import { SignUp } from "./pages/signUp/SignUp";
import { Home } from "./pages/home/Home";
import { NavBar } from "./components/NavBar/NavBar";
import { useInitialization } from './hooks/useInitialization'

export const AppContent = () => {
    useInitialization()

    return (
        <React.Fragment>
            <NavBar />
            <div className='contentContainer'>
                <Switch>
                    <Route exact path={'/login'} component={Login} />
                    <Route exact path={'/signUp'} component={SignUp} />
                    <Route path={'/'} component={Home} />
                </Switch>
            </div>
        </React.Fragment>
    )
}