import React, { useState, useRef } from "react";
import './main.css'
import { chevronBackOutline, 
    alertCircleOutline, 
    maleOutline, 
    femaleOutline } from 'ionicons/icons';
import { IonAlert, 
    IonBackButton, 
    IonButton, 
    IonButtons, 
    IonCheckbox, 
    IonCol, 
    IonContent, 
    IonDatetime, 
    IonGrid, 
    IonIcon, 
    IonInput, 
    IonItem, 
    IonLabel, 
    IonList, 
    IonPage, 
    IonPopover, 
    IonRadio, 
    IonRadioGroup, 
    IonRow, 
    IonSearchbar, 
    IonSegment, 
    IonSegmentButton, 
    IonSelect, 
    IonSelectOption, 
    IonText, 
    IonToolbar } from "@ionic/react";
import '@ionic/react/css/core.css';
import { useMaskito } from '@maskito/react';


const register : React.FC = () =>{
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [showPopover, setShowPopover] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');const [age, setAge] = useState<number | undefined>(undefined);

    
      const phoneMask = useMaskito({
        options: {
          mask: [/\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/],
        },
      });


      const datepickerRef = useRef<HTMLIonPopoverElement>(null);
    
        const handleDateChange = (event: CustomEvent) => {
          const selectedDate = new Date(event.detail.value!);
          const newDate = new Date(event.detail.value);
          setSelectedDate(newDate);
          calculateAge(selectedDate);
        };
  
      const calculateAge = (birthdate: Date) => {
      const currentDate = new Date();
      const ageDiff = currentDate.getFullYear() - birthdate.getFullYear();
  
      setAge(ageDiff);
    };
  
    const openPopover = () => {
      setShowPopover(true);
    };
  
    const closePopover = () => {
      setShowPopover(false);
    };
  
    const formattedDate = selectedDate ? selectedDate.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' }) : '';

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
                        <div className="surname-text">Surname <IonText color="danger"> * </IonText></div>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonInput
                                type="text"
                                placeholder="Surname"
                                className="surname-form"
                                fill="outline"
                                clearInput={true}>
                                </IonInput>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <div className="name-text">Given Name <IonText color="danger"> * </IonText></div>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonInput
                                type="text"
                                placeholder="Given Name"
                                className="name-form"
                                fill="outline"
                                clearInput={true}>
                                </IonInput>
                            </IonCol>
                            <IonCol>
                                <IonRow>
                                    <div className="suffix-text">Suffix <IonText color="danger"> * </IonText></div>
                                </IonRow>
                                <IonRow>
                                    <IonCol>
                                        <IonSelect
                                        fill="outline"
                                        name="text"
                                        placeholder="N/A"
                                        className="suffix-form">
                                            <IonSelectOption value="option1">N/A</IonSelectOption>
                                            <IonSelectOption value="option2">II</IonSelectOption>
                                            <IonSelectOption value="option3">III</IonSelectOption>
                                            <IonSelectOption value="option4">JR</IonSelectOption>
                                            <IonSelectOption value="option5">SR</IonSelectOption>
                                        </IonSelect>
                                    </IonCol>
                                </IonRow>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <div className="middle-text">Middle Name <IonText color="danger"> * </IonText></div>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonInput
                                type="text"
                                placeholder="Middle Name"
                                className="middle-form"
                                fill="outline"
                                clearInput={true}>
                                </IonInput>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol size="9">
                                <IonItem lines="none">
                                    <IonCheckbox
                                    className="rememberme1-checkbox">
                                    </IonCheckbox>
                                    <IonLabel className="middle-label" >
                                        <i className="middle-name-text">I have no middle name.</i>
                                    </IonLabel>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                        <div className="age-text">Age <IonText color="danger"> * </IonText></div>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonInput
                            type="text"
                            placeholder="Age"
                            className="age-form"
                            fill="outline"
                            value={age !== undefined ? age.toString() : ''}
                            readonly>
                            </IonInput>
                        </IonCol>
                        <IonCol>
                            <IonRow>
                                <div className="birthday-text">Date of Birth <IonText color="danger"> * </IonText></div>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                <IonInput
                                clearInput={true}
                                fill="outline"
                                className="birthday-form"
                                value={formattedDate}
                                placeholder="Date of Birth"
                                onIonChange={() => { }}
                                onClick={openPopover}>
                                    <IonPopover
                                    ref={datepickerRef}
                                    isOpen={showPopover}
                                    onDidDismiss={closePopover}>
                                        <IonDatetime
                                        presentation="date"
                                        showDefaultButtons={true}
                                        value={selectedDate?.toISOString()}
                                        onIonChange={handleDateChange}>
                                        </IonDatetime>
                                    </IonPopover>
                                </IonInput>
                            </IonCol>
                        </IonRow>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <div className="pob-text">Place of Birth <IonText color="danger"> * </IonText></div>
                </IonRow>
                <IonRow>
                    <IonInput 
                    className="pob-form"
                    fill="outline"
                    placeholder="Place of Birth"
                    clearInput={true}></IonInput>
                </IonRow>
                <IonRow>
                    <div className="sex-text">Sex <IonText color="danger"> * </IonText></div>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonRadioGroup allowEmptySelection={true}>
                            <IonItem className="gender-container">
                                <IonLabel className="gender-text">Male</IonLabel>
                                <IonRadio value="male" className="gender-button" slot="end" ></IonRadio>
                            </IonItem>
                        </IonRadioGroup>
                    </IonCol>
                    <IonCol >
                        <IonRadioGroup allowEmptySelection={true}>
                            <IonItem className="female-container">
                                <IonLabel className="gender-text">Female</IonLabel>
                                <IonRadio value="female" className="gender-button" slot="end" ></IonRadio>
                            </IonItem>
                        </IonRadioGroup>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <div className="contact-text">Contact Number <IonText color="danger"> * </IonText></div>
                </IonRow>
                <IonRow>
                    <IonInput
                    clearInput={true}
                    labelPlacement="fixed"
                    className="contact-form"
                    value={phoneNumber}
                    type="tel"
                    onIonChange={(e) => setPhoneNumber(e.detail.value!)}
                    ref={async (phoneInput) => {
                        if (phoneInput) {
                            const input = await phoneInput.getInputElement();
                            phoneMask(input);
                        }
                        }}
                        placeholder="Contact Number">
                            <div slot="label" className="countryCode1">+63</div>
                    </IonInput>
                </IonRow>
                <IonRow>
                    <IonItem lines="none">
                        <IonButton
                        className="next1-button" 
                        shape="round" expand="block"
                        color="custom-color"
                        routerLink="/nextRegister">
                            Next
                        </IonButton>
                    </IonItem>
                </IonRow>
            </IonGrid>  
        </IonContent>
    </IonPage>
)
}

export default register;