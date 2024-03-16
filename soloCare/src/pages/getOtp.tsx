import React from "react";
import { IonContent, 
    IonPage, 
    IonToolbar, 
    IonBackButton, 
    IonButtons, 
    IonGrid, 
    IonRow, 
    IonCol, 
    IonInput, 
    IonNote, 
    IonText, 
    IonItem, 
    IonButton, 
    IonRouterLink } from "@ionic/react";
import { chevronBackOutline } from 'ionicons/icons';
import  './main.css'


const getOtp : React.FC = () => {

    return (

        <IonPage>
            <IonToolbar>
                    <IonButtons slot="start" >
                        <IonBackButton defaultHref="/verification" 
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
                        Enter the 4-digit code sent to you at +639 1234 5678.                        </p>
                        </div>
                </div>
                <IonGrid className="inputs">
                    <IonRow>
                        <IonCol size="2">
                            <IonInput type="number" 
                            className="input-1"></IonInput>
                        </IonCol>
                        <IonCol size="2">
                            <IonInput type="number" 
                            className="input-2"></IonInput>
                        </IonCol>
                        <IonCol size="2">
                            <IonInput type="number" 
                            className="input-3"></IonInput>
                        </IonCol>
                        <IonCol size="2">
                            <IonInput type="number" 
                            className="input-4"></IonInput>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <IonItem lines="none">
                    <IonButton
                    className="next-button" 
                    shape="round" expand="block" 
                    color="custom-color"
                    routerLink="/register">
                        Next
                    </IonButton>
                </IonItem>
                <IonItem  lines="none">
                    <IonNote className="notes">
                        <i>Didn’t receive the OTP? </i>
                    </IonNote>
                </IonItem>
                <IonItem lines="none" >
                    <IonText className="message-otp">
                        <IonRouterLink className="resend" routerLink="/getOtp"><b >Resend OTP</b></IonRouterLink> or {' '} <IonRouterLink className="change-number" routerLink="/verification"><b>Change Number</b></IonRouterLink>
                    </IonText>
                </IonItem> 
            </IonContent>
        </IonPage>
    )
}

export default getOtp;