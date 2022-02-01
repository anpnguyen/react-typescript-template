import { useAuth0, User } from '@auth0/auth0-react';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../button/Button';
import './Landing.css';

export default function Landing() {
    const { loginWithRedirect } = useAuth0<User>();
    return (
        <main className="landing">
            <div className="landing_container">
                <div className="landing_header">
                    <h1>Hi there welcome to JSD Dev Hub.</h1>
                    <p>Please login to get started.</p>
                </div>

                <div className="landing_button">
                    <Button
                        title="Login"
                        icon={faSignInAlt}
                        onClick={loginWithRedirect}
                    />
                </div>
            </div>
        </main>
    );
}
