import * as React from 'react';
import { Redirect, RouteComponentProps } from 'react-router-dom';

const RedirectTest = () => {
    const isAdmin = false;

    return isAdmin ? <h3>Admin</h3> : <Redirect to="/" />
};

export default RedirectTest;