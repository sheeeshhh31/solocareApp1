import { IonContent, 
    IonIcon, 
    IonImg, 
    IonPage } from "@ionic/react";
import React, { useEffect } from "react";
import { useHistory } from 'react-router-dom';
import './main.css'

const splashScreen : React.FC = () => {
    const history = useHistory();

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          history.push('/landingPage');
        }, getRandomDelay());

        return () => clearTimeout(timeoutId);
    }, [history]);
  
    const getRandomDelay = () => Math.floor(Math.random() * (5000 - 3000 + 1) + 3000);


    return (
        <div className="">
            <div className="splashscreen">
                <img src="/solocare-blacklogo.png" alt="Logo" />
            </div>
        </div>
    )
}

export default splashScreen;