import React from "react";
import './main.css'
import { IonBackButton, 
    IonButton, 
    IonButtons, 
    IonCol, 
    IonContent, 
    IonGrid, 
    IonIcon, 
    IonInput, 
    IonItem, 
    IonLabel, 
    IonPage, 
    IonRadio, 
    IonRadioGroup, 
    IonRow, 
    IonSelect, 
    IonSelectOption, 
    IonText, 
    IonToolbar } from "@ionic/react";
import { chevronBackOutline, 
    alertCircleOutline, 
    maleOutline, 
    femaleOutline } from 'ionicons/icons';

const nextRegister : React.FC = () =>{
    return(
        <IonPage>
            <IonToolbar>
                    <IonButtons slot="start" >
                        <IonBackButton defaultHref="/register" icon={chevronBackOutline} text="Back"></IonBackButton>
                    </IonButtons>
            </IonToolbar>
            <IonContent className="scroll-content">
                <h1>
                    Register
                </h1>
                <IonGrid>
                    <IonRow className="box-box1">
                        <IonCol size="1.75">
                            <IonIcon src={alertCircleOutline} className="alert-icon"></IonIcon>
                        </IonCol>
                        <IonCol >
                            <IonText className="text-text1">
                                Fields with <span className="asterisk">*</span> are required.
                            </IonText>
                        </IonCol>
                    </IonRow>
                    </IonGrid>
                        <p className="personal-info">Personal Information</p>  
                    <IonGrid>
                        <IonRow>
                            <div className="hea-text">Highest Educational Attainment <IonText color="danger"> * </IonText></div>
                        </IonRow>
                        <IonRow>
                            <IonSelect
                            fill="outline"
                            name="text"
                            placeholder="Highest Educational Attainment"
                            className="hea-form">
                                <IonSelectOption value="hea-option1">N/A</IonSelectOption>
                                <IonSelectOption value="hea-option2">Elementary Undergraduate</IonSelectOption>
                                <IonSelectOption value="hea-option3">Elementary Graduate</IonSelectOption>
                                <IonSelectOption value="hea-option4">High School Undergraduate</IonSelectOption>
                                <IonSelectOption value="hea-option5">High School Graduate</IonSelectOption>
                                <IonSelectOption value="hea-option6">College Undergraduate</IonSelectOption>
                                <IonSelectOption value="hea-option7">College Graduate</IonSelectOption>
                            </IonSelect>
                        </IonRow>
                        <IonRow>
                            <div className="occupation-text">Occupation <IonText color="danger"> * </IonText></div>
                        </IonRow>
                        <IonRow>
                            <IonInput
                            type="text"
                            placeholder="Occupation"
                            className="occupation-form"
                            fill="outline"
                            clearInput={true}>
                            </IonInput>
                        </IonRow>
                            <IonRow>
                              <div className="mi-text">Monthly Income <IonText color="danger"> * </IonText></div>
                            </IonRow>
                            <IonRow>
                                <IonSelect
                                fill="outline"
                                name="text"
                                placeholder="Monthly Income"
                                className="mi-form">
                                    <IonSelectOption value="mi-option1">Below 10,000</IonSelectOption>
                                    <IonSelectOption value="mi-option2">10,001-25,000</IonSelectOption>
                                    <IonSelectOption value="mi-option3">25,001-50,000</IonSelectOption>
                                    <IonSelectOption value="mi-option4">50,000 above</IonSelectOption>
                                </IonSelect>
                            </IonRow>
                            <IonRow>
                                <div className="presadd-text">Present Address <IonText color="danger"> * </IonText></div>
                            </IonRow>
                            <IonRow>
                                <IonInput
                                type="text"
                                placeholder="Present Address"
                                className="presadd-form"
                                fill="outline"
                                clearInput={true}>
                                </IonInput>
                            </IonRow>
                            <IonRow>
                            <div className="soho-text">Status of Home Occupancy <IonText color="danger"> * </IonText></div>
                            </IonRow>
                            <IonRow>
                                <IonSelect
                                fill="outline"
                                name="text"
                                placeholder="Status of Home Occupancy"
                                className="soho-form">
                                    <IonSelectOption value="soho-option1">Owned</IonSelectOption>
                                    <IonSelectOption value="soho-option2">Rented</IonSelectOption>
                                    <IonSelectOption value="soho-option3">Sharer</IonSelectOption>
                                    <IonSelectOption value="soho-option4">Caretaker</IonSelectOption>
                                </IonSelect>
                            </IonRow>
                            <IonRow>
                                <div className="fourps-text">4Ps Beneficiary <IonText color="danger"> * </IonText></div>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    <IonRadioGroup allowEmptySelection={true}>
                                        <IonItem className="yes-container">
                                            <IonLabel className="yesno-text">Yes</IonLabel>
                                            <IonRadio value="yes" className="yesno-button" slot="end" ></IonRadio>
                                        </IonItem>
                                    </IonRadioGroup>
                                </IonCol>
                                <IonCol>
                                    <IonRadioGroup allowEmptySelection={true}>
                                        <IonItem className="no-container">
                                            <IonLabel className="yesno-text">No</IonLabel>
                                            <IonRadio value="no" className="yesno-button" slot="end" ></IonRadio>

                                        </IonItem>
                                    </IonRadioGroup>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <div className="philhealth-text">Philhealth <IonText color="danger"> * </IonText></div>
                            </IonRow>
                            <IonRow>
                                <IonInput
                                type="text"
                                placeholder="Philhealth"
                                className="philhealth-form"
                                fill="outline"
                                clearInput={true}>
                                </IonInput>
                            </IonRow>
                            <IonRow>
                                <IonItem lines="none">
                                    <IonButton
                                    className="next2-button" 
                                    shape="round" expand="block" 
                                    color="custom-color"
                                    routerLink="/familyCompositionList">
                                        Next
                                    </IonButton>
                                </IonItem>
                            </IonRow>
                        </IonGrid>
                    </IonContent>
                </IonPage>
    )
}
export default nextRegister;