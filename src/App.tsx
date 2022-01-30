import React from 'react';
import './App.css';
import { Layout } from './components/layout/Layout';
import LandingPage from './pages/LandingPage';
import { useAuth0, User } from '@auth0/auth0-react';

function App(): JSX.Element {
    const { isAuthenticated } = useAuth0<User>();

    const userLogedIn: boolean = isAuthenticated;
    return (
        <div className="App">{userLogedIn ? <Layout /> : <LandingPage />}</div>
    );
}

export default App;
