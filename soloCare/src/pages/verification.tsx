import { IonBackButton, 
    IonButton, 
    IonButtons, 
    IonCol, 
    IonContent, 
    IonGrid, 
    IonInput, 
    IonItem, 
    IonLabel, 
    IonPage, 
    IonRow, 
    IonText, 
    IonToolbar } from "@ionic/react";
import { chevronBackOutline } from 'ionicons/icons';
import React, { useState } from "react";
import { useMaskito } from '@maskito/react';
import './main.css'

const verification : React.FC = () => {
    const [phoneNumber, setPhoneNumber] = useState('');

    
      const phoneMask = useMaskito({
        options: {
          mask: [/\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/],
        },
      });

      
    
    return(
        <IonPage>
            <IonToolbar>
                    <IonButtons slot="start" >
                        <IonBackButton defaultHref="/landingPage" 
                        icon={chevronBackOutline} 
                        text="Back"></IonBackButton>
                    </IonButtons>
                </IonToolbar>
            <IonContent>
                <h1>
                    Verification
                </h1>
                <div className="box-box">
                    <div className="text-text">
                        <p>
                            We will send you a One Time Password (OTP) on your phone number for verification.
                        </p>
                        </div>
                        </div>
                        <IonItem lines="none">
                        <IonInput
                        labelPlacement="fixed"
                        className="contact-number"
                        value={phoneNumber}
                        type="tel"
                        onIonChange={(e) => setPhoneNumber(e.detail.value!)}
                        ref={async (phoneInput) => {
                        if (phoneInput) {
                        const input = await phoneInput.getInputElement();
                        phoneMask(input);
                        }
                         }}
                         placeholder="Enter your phone number.">
                            <div slot="label" className="countryCode">+63</div>
                    </IonInput>
                    </IonItem>
                    <IonItem lines="none">
                        <IonButton
                        className="getotp-button" 
                        shape="round" expand="block" 
                        color="custom-color"
                        routerLink="/getOtp">
                            Get OTP
                        </IonButton>
                    </IonItem>
                </IonContent>
            </IonPage>
    )
    }
                
            

export default verification;
