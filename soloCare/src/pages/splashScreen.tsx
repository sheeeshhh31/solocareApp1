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
        <IonPage>
            <IonContent className="splashscreen">
                <IonImg  className="logo-image" 
                src="/solocarelogo-white.png"></IonImg>
            </IonContent>
        </IonPage>
    )
}

export default splashScreen;