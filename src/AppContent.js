import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { LoginPage } from "./pages/login";
import { SignUpPage } from "./pages/signUp";
import { HomePage } from "./pages/home";
import { ProfilePage } from './pages/profile'
import { NavBar } from "./features/Navigation";
import { useInitialization } from './lib/hooks/useInitialization';

export const AppContent = () => {
    useInitialization()

    return (
        <React.Fragment>
            <NavBar />
            <div className="contentContainer">
                <Switch>
                    <Route exact path={'/login'} component={LoginPage} />
                    <Route exact path={'/signUp'} component={SignUpPage} />
                    <Route path={'/profile'} component={ProfilePage} />
                    <Route path={'/'} component={HomePage} />
                </Switch>
            </div>
        </React.Fragment>
    )
}