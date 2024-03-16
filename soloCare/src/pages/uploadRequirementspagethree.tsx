import React from "react";
import './main.css'
import { IonBackButton, IonButton, IonButtons, IonCheckbox, IonCol, IonContent, IonGrid, IonIcon, IonPage, IonRow, IonText, IonToolbar } from "@ionic/react";
import { chevronBackOutline, imageOutline } from "ionicons/icons";

const uploadRequirementspagethree : React.FC = () => {
    return (
        <IonPage>
            <IonToolbar>
                    <IonButtons slot="start" >
                        <IonBackButton defaultHref="/uploadRequirementspagetwo" 
                        icon={chevronBackOutline} 
                        text="Back"></IonBackButton>
                    </IonButtons>
            </IonToolbar>
            <IonContent className="scroll-content">
                    <h1>
                        Upload
                    </h1>
                    <div className="box-box">
                        <div className="text-text">
                            <p>
                            Upload required requirements. 
                            </p>
                        </div>
                    </div>
                    <IonGrid>
                        <IonRow className="box1">
                            <IonCol>
                                <IonText className="text1">
                                    <ul className="list-list">
                                        <li><i>Maximum file size is 5MB.</i></li>
                                        <li><i>Photos must be in PNG, JPG, JPEG, HEIC, or PDF.</i></li>
                                        <li><i>Make sure your photos are not blurred or cropped.</i></li>
                                    </ul>
                                </IonText>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonIcon src={imageOutline} className="image-icon"></IonIcon>
                            </IonCol>
                            <IonCol>
                                <IonRow>
                                    <IonText className="pic-text4">
                                    Medical Certificate <span className="span-text">(as proof ㅤㅤ of mental capacity if incapacitated.)</span>
                                    </IonText>
                                </IonRow>
                                <IonRow>
                                    <IonButton
                                    className="upload-button"
                                    expand="block"
                                    color="white"
                                    routerLink="">
                                        Upload a photo.
                                    </IonButton>
                                </IonRow>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonIcon src={imageOutline} className="image1-icon"></IonIcon>
                            </IonCol>
                            <IonCol>
                                <IonRow>
                                    <IonText className="pic-text1">
                                    Jail Records/Certificate of Detention
                                    </IonText>
                                </IonRow>
                                <IonRow>
                                    <IonButton
                                    className="upload1-button"
                                    expand="block"
                                    color="white"
                                    routerLink="">
                                        Upload a photo.
                                    </IonButton>
                                </IonRow>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonIcon src={imageOutline} className="image1-icon"></IonIcon>
                            </IonCol>
                            <IonCol>
                                <IonRow>
                                    <IonText className="pic-text5">
                                    VAWC Report in case of abandonment
                                    </IonText>
                                </IonRow>
                                <IonRow>
                                    <IonButton
                                    className="upload1-button"
                                    expand="block"
                                    color="white"
                                    routerLink="">
                                        Upload a photo.
                                    </IonButton>
                                </IonRow>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                    <IonCheckbox labelPlacement="end" className="agreement-check">
                                    </IonCheckbox>
                            </IonCol>
                            <IonCol>
                                <div className="agreement-box">
                                    <div className="agreement-text">  
                                        <p><i>I hereby certify that the given above is true and correct. I further understand that any misinterprentation that may have made will subject me to criminal and civil liabilities provided by existing. <span className="asterisk"> *</span></i></p>
                                    </div>
                                </div> 
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonButton
                            expand="block" shape="round"
                            color="custom-color"
                            className="req-button"
                            routerLink="requirementSubmit">
                                Submit
                            </IonButton>
                        </IonRow>
                    </IonGrid>
                </IonContent>
        </IonPage>
    )
}

export default uploadRequirementspagethree;