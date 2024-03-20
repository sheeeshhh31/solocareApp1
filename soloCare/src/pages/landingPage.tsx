import React from "react";
import { useHistory } from 'react-router-dom';
import './main.css';

const LandingPage = () => {
    const history = useHistory();

    const handleLoginClick = () => {
        history.push('/login'); 
    };

    const handleRegisterClick = () => {
        history.push('/verification');
    };

    const handleApplicationClick = () => {
        history.push('/applicationStatusapproved');
    };

    return (
        <div className="landingpage">
            <img className="landing-logo" src="/solocare-blacklogo.png" alt="Logo" />
            <button className="login-button" onClick={handleLoginClick}>
                Log in
            </button>
            <button className="register-button" onClick={handleRegisterClick}>
                Register
            </button>
            <p className="application-status" onClick={handleApplicationClick}><b>Application Status</b></p>
        </div>
    );
};

export default LandingPage;
