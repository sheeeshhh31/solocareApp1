import { IonButton, IonContent, IonImg, IonPage } from "@ionic/react";
import { useHistory } from 'react-router-dom';
import React from "react";
import  './main.css'

const landingPage : React.FC =() => {

    const history = useHistory();

  const handleLoginClick = () => {
    history.push('/login'); 
  };

  const handleRegisterClick = () => {
    history.push('/verification');
  };

  const handleApplicationClick = () => {
    history.push('/applicationStatusapproved')
  }
    
return (
    <IonPage>
        <IonContent className="landingpage">
            <IonImg className="landing-logo" src="/solocare-blacklogo.png"></IonImg>
            <IonButton className="login-button" shape="round" expand="block" onClick={handleLoginClick} color="custom-color">
                Log in
            </IonButton>
            <IonButton className="register-button" shape="round" expand="block" onClick={handleRegisterClick} color="custom-color">
                Register
            </IonButton>
            <p className="application-status" onClick={handleApplicationClick}><b>Application Status</b></p>
        </IonContent> 
    </IonPage>
)

}

export default landingPage;