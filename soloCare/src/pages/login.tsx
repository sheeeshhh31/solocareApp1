import React, { useState, useEffect } from "react";
import './main.css'
import { chevronBackOutline } from 'ionicons/icons';
import { IonBackButton, IonButton, IonButtons, IonCheckbox, IonContent, IonInput, IonItem, IonLabel, IonPage, IonRouterLink, IonToolbar } from "@ionic/react";
import ForgotPasswordPage from "./forgotPassword";

const login :  React.FC =() => {
    const [idNumber, setidNumber] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    useEffect(() => {
        const storedRememberMe = localStorage.getItem('rememberMe');
        if (storedRememberMe) {
          setRememberMe(true);
          const storedidNumber= localStorage.getItem('idNumber');
          if (storedidNumber) {
            setidNumber(storedidNumber);
          }

        }
      }, []);

      const handleLogin = () => {
    
        localStorage.setItem('idNumber', idNumber);
        localStorage.setItem('rememberMe', rememberMe.toString());

       

      };
    
    return(
        <IonPage>
            <IonToolbar>
                    <IonButtons slot="start" >
                        <IonBackButton defaultHref="/landingPage" icon={chevronBackOutline} text="Back"></IonBackButton>
                    </IonButtons>
                </IonToolbar>
            <IonContent>    
                <h1>
                    Log In
                </h1>
                <IonItem lines="none">
                    <IonInput
                    type="text"
                    placeholder="Solo Parent ID Number"
                    label="Solo Parent ID Number"
                    labelPlacement="floating"
                    clearInput={true}
                    value={idNumber}
                    onIonChange={(e) => setidNumber(e.detail.value!)}
                    className="idnumber-form">
                    </IonInput>
                </IonItem>
                <IonItem lines="none">
                    <IonInput
                    type="password"
                    placeholder="Password"
                    label="Password"
                    labelPlacement="floating"
                    className="password-form"
                    value={password}
                    onIonChange={(e) => setPassword(e.detail.value!)}
                    clearInput={true}>
                    </IonInput>
                </IonItem>
                <IonItem lines="none">
                    <IonCheckbox
                    className="rememberme-checkbox"
                    checked={rememberMe}
                    onIonChange={(e) => setRememberMe(e.detail.checked)}>
                    </IonCheckbox>
                    <IonLabel className="remember-label" >
                    Remember Me
                    </IonLabel>
                </IonItem>
                <IonItem lines="none">
                    <IonButton
                    className="login2-button"
                    shape="round"
                    expand="block"
                    onClick={handleLogin}
                    color="custom-color"
                    routerLink="/verification">
                        Log in
                    </IonButton>
                </IonItem>
                <IonItem lines="none">
                    <IonRouterLink routerLink="/forgotPassword">
                        <p className="forgot-password"><i>Forgot Password?</i></p>
                    </IonRouterLink>
                </IonItem>
                <hr className="divider" />
                <IonItem lines="none">
                <p className="notAmember"><i>Not a member?</i></p>
                </IonItem>
                <IonItem lines="none">
                    <IonButton
                    className="register2-button" 
                    shape="round" expand="block" 
                    color="custom-color"
                    routerLink="/verification">
                        Register
                    </IonButton>
                </IonItem>
            </IonContent>
        </IonPage>
    )
}

export default login;