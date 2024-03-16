import React from "react";
import'./main.css'
import { IonButton, IonCol, IonContent, IonGrid, IonIcon, IonPage, IonRouterLink, IonRow, IonText } from "@ionic/react";
import { checkmarkCircleOutline } from "ionicons/icons";

const applicationSubmit : React.FC = () => {
    return(
        <IonPage>
            <IonContent className="scroll-content">
                <IonIcon src={checkmarkCircleOutline} className="check-icon"></IonIcon>
                <div className="text-box">
                    <div className="main-text">
                        <p>WE HAVE RECEIVED YOUR REGISTRATION FORM</p>
                    </div>
                </div>
                <div className="text-box2">
                    <div className="main-text2">
                        <p>WE WILL NOTIFY YOU REGARDING YOUR APPLICATION STATUS. THANK YOU</p>
                    </div>
                </div>
                <div className="applicationStatus-box">
                    <p className="applicationStatus-text">Application Status: <IonText className="applicationStatus"> PENDING</IonText></p>
                </div>
                <IonButton
                className="status-button"
                shape="round" expand="block"
                color="custom-color"
                routerLink="/applicationStatuspending">
                    Status
                </IonButton>
            </IonContent>
        </IonPage>
    )
}

export default applicationSubmit;