import { IonButton, IonContent, IonIcon, IonPage, IonText } from "@ionic/react";
import './main.css'
import React from "react";
import { checkmarkCircleOutline } from "ionicons/icons";

const requirementSubmit : React.FC = () => {
    return (
        <IonPage>
            <IonContent className="scroll-content">
                <IonIcon src={checkmarkCircleOutline} className="check-icon"></IonIcon>
                <div className="text-box">
                    <div className="main-text">
                        <p>WE HAVE RECEIVED YOUR REQUIREMENTS</p>
                    </div>
                </div>
                <div className="text-box2">
                    <div className="main-text2">
                        <p>WE WILL NOTIFY YOU REGARDING YOUR STATUS. THANK YOU</p>
                    </div>
                </div>
                <div className="applicationStatus-box">
                    <p className="applicationStatus-text">Application Status: <IonText className="applicationStatus"> PENDING</IonText></p>
                </div>
                <IonButton
                className="status-button"
                shape="round" expand="block"
                color="custom-color"
                routerLink="/requirementStatuspending">
                    Status
                </IonButton>
            </IonContent>
        </IonPage>
    )
}

export default  requirementSubmit;