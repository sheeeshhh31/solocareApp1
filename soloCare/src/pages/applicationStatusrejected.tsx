import React from "react";
import './main.css'
import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCol, IonContent, IonGrid, IonImg, IonItem, IonItemDivider, IonPage, IonRow, IonText, IonToolbar } from "@ionic/react";
import { chevronBackOutline } from "ionicons/icons";

const applicationStatusrejected : React.FC = () => {
    return(
        <IonPage>
            <IonToolbar>
                    <IonButtons slot="start" >
                        <IonBackButton defaultHref="/landingPage" 
                        icon={chevronBackOutline} 
                        text="Back"></IonBackButton>
                    </IonButtons>
                </IonToolbar>
            <IonContent className="scroll-content">
                <h1>
                    Status
                </h1>
                <div className="applicationStatus-box1">
                    <p className="applicationStatus-text1">Application Status: <IonText className="applicationStatus1"> REJECTED</IonText></p>
                </div>
                <IonCard className="ticketId">
                    <IonCardHeader className="ticketIdHeader">Ticket ID No. 00000</IonCardHeader>
                        <IonCardContent>
                            <div className="divider1" />
                                <IonGrid>
                                    <IonRow>
                                        <IonCol size="4.5">
                                            <IonImg className="ticketIdLogo" src="/solocare.png"></IonImg>
                                        </IonCol>
                                        <IonCol>
                                            <div className="ticketIdName-container">
                                                <IonText className="ticketId-name">Dela Cruz, Jane. A.</IonText>
                                            </div>
                                            <IonRow>
                                                <div className="ticketIdbrgy-container">
                                                    <IonText className="ticketId-brgy"><i>Brgy. Malinta</i></IonText>
                                                </div>
                                            </IonRow>
                                        </IonCol>
                                    </IonRow>
                                    <IonRow>
                                        <IonCol>
                                            <IonCol>
                                                <IonRow>
                                                    <IonText className="ticketId-date">N/A</IonText>
                                                </IonRow>
                                                <IonRow>
                                                    <IonText className="ticketId-datelabel"><i>Pick-up Date</i></IonText>
                                                </IonRow>
                                            </IonCol>
                                        </IonCol>
                                        <IonCol>
                                            <IonCol>
                                                <IonRow>
                                                    <IonText className="ticketId-time">N/A</IonText>
                                                </IonRow>
                                                <IonRow>
                                                    <IonText className="ticketId-timelabel"><i>Pick-up Time</i></IonText>
                                                </IonRow>
                                            </IonCol>
                                        </IonCol>
                                    </IonRow>
                            </IonGrid>
                        </IonCardContent>
                    </IonCard>
                    <IonRow>
                        <IonButton
                        className="statuspending-button"
                        shape="round" expand="block"
                        color="custom-color"
                        routerLink="/register">
                            Restart Application
                        </IonButton>
                    </IonRow>
                </IonContent>
            </IonPage>
        )
    }

export default applicationStatusrejected;