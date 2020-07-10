import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { LoginPage, SignUpPage, HomePage, ProfilePage, UserPage, UsersPage, ContactsPage } from "pages";
import { useInitialization } from 'lib/hooks/useInitialization';

export const Routes = () => {
    useInitialization()

    return (
        <Switch>
            <Route exact path={'/login'} component={LoginPage} />
            <Route exact path={'/signUp'} component={SignUpPage} />
            <Route path={'/profile'} component={ProfilePage} />
            <Route path={'/users/:userHandle'} component={UserPage} />
            <Route path={'/users'} component={UsersPage} />
            <Route path={'/contacts'} component={ContactsPage} />
            <Route path={'/'} component={HomePage} />
        </Switch>
    )
}