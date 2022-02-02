import React from 'react';
import './App.css';
import { Layout } from './components/layout/Layout';
import { useAuth0, User } from '@auth0/auth0-react';
import { PublicLayout } from './components/public-users/components/public-layout/PublicLayout';

function App(): JSX.Element {
    const { isAuthenticated } = useAuth0<User>();

    const userLogedIn: boolean = isAuthenticated;

    return (
        <div className="App">{userLogedIn ? <Layout /> : <PublicLayout />}</div>
    );
}

export default App;
