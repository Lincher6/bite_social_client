import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { LoginPage, SignUpPage, HomePage, ProfilePage, UserPage, UsersPage } from "./pages";
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
                    <Route exact path={'/profile'} component={ProfilePage} />
                    <Route path={'/users/:userHandle'} component={UserPage} />
                    <Route path={'/users'} component={UsersPage} />
                    <Route path={'/'} component={HomePage} />
                </Switch>
            </div>
        </React.Fragment>
    )
}