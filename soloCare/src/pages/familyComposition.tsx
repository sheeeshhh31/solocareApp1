import { IonBackButton, 
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
    IonPage, 
    IonPopover, 
    IonRow, 
    IonSelect, 
    IonSelectOption, 
    IonText, 
    IonToolbar } from "@ionic/react";
import { chevronBackOutline, alertCircleOutline, } from 'ionicons/icons';
import  './main.css'
import React, { useState, useRef } from "react";
import { useHistory } from "react-router";

const familyComposition : React.FC = () => {

    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [showPopover, setShowPopover] = useState(false);
    const [age, setAge] = useState<number | undefined>(undefined);
    

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
                        <IonBackButton defaultHref="/familyCompositionList" icon={chevronBackOutline} text="Back"></IonBackButton>
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
                        <p className="fam-info">Family Composition</p>
                        <form>
                            <IonGrid>
                                <IonRow>
                                    <div className="fam-surname-text">Surname <IonText color="danger"> * </IonText></div>
                                </IonRow>
                                <IonRow>
                                    <IonCol>
                                        <IonInput
                                        type="text"
                                        placeholder="Surname"
                                        className="fam-surname-form"
                                        fill="outline"
                                        clearInput={true}>
                                        </IonInput>
                                    </IonCol>
                                </IonRow>
                                <IonRow>
                                    <div className="fam-name-text">Given Name <IonText color="danger"> * </IonText></div>
                                </IonRow>
                                <IonRow>
                                    <IonCol>
                                        <IonInput
                                        type="text"
                                        placeholder="Given Name"
                                        className="fam-name-form"
                                        fill="outline"
                                        clearInput={true}>
                                        </IonInput>
                                    </IonCol>
                                    <IonCol>
                                <IonRow>
                                    <div className="fam-suffix-text">Suffix <IonText color="danger"> * </IonText></div>
                                </IonRow>
                                <IonRow>
                                    <IonCol>
                                        <IonSelect
                                        fill="outline"
                                        name="text"
                                        placeholder="N/A"
                                        className="fam-suffix-form">
                                            <IonSelectOption value="suffix-option1">N/A</IonSelectOption>
                                            <IonSelectOption value="suffix-option2">II</IonSelectOption>
                                            <IonSelectOption value="suffix-option3">III</IonSelectOption>
                                            <IonSelectOption value="suffix-option4">JR</IonSelectOption>
                                            <IonSelectOption value="suffix-option5">SR</IonSelectOption>
                                        </IonSelect>
                                    </IonCol>
                                </IonRow>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <div className="fam-middle-text">Middle Name <IonText color="danger"> * </IonText></div>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonInput
                                type="text"
                                placeholder="Middle Name"
                                className="fam-middle-form"
                                fill="outline"
                                clearInput={true}>
                                </IonInput>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol size="9">
                                <IonItem lines="none">
                                    <IonCheckbox
                                    className="fam-rememberme1-checkbox">
                                    </IonCheckbox>
                                    <IonLabel className="fam-middle-label" >
                                        <i className="fam-middle-name-text">I have no middle name.</i>
                                    </IonLabel>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <div className="fam-relationship-text">Relationship <IonText color="danger"> * </IonText></div>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonSelect
                                    fill="outline"
                                    name="text"
                                    placeholder="Relationship"
                                    className="fam-relationship-form">
                                        <IonSelectOption value="rs-option1">Son</IonSelectOption>
                                        <IonSelectOption value="rs-option2">Daughter</IonSelectOption>
                                </IonSelect>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <div className="fam-age-text">Age <IonText color="danger"> * </IonText></div>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonInput
                                type="text"
                                placeholder="Age"
                                className="fam-age-form"
                                fill="outline"
                                value={age !== undefined ? age.toString() : ''}
                                readonly>
                                </IonInput>
                            </IonCol>
                            <IonCol>
                                <IonRow>
                                    <div className="fam-birthday-text">Date of Birth <IonText color="danger"> * </IonText></div>
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
                            <div className="fam-status-text">Status <IonText color="danger"> * </IonText></div>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonSelect
                                    fill="outline"
                                    name="text"
                                    placeholder="Status"
                                    className="fam-status-form">
                                        <IonSelectOption value="status-option1">Single</IonSelectOption>
                                        <IonSelectOption value="status-option2">Married</IonSelectOption>
                                        <IonSelectOption value="status-option1">Separated</IonSelectOption>
                                        <IonSelectOption value="status-option2">Divorced</IonSelectOption>
                                        <IonSelectOption value="status-option2">Widowed</IonSelectOption>
                                </IonSelect>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <div className="fam-hea-text">Educational Attainment <IonText color="danger"> * </IonText></div>
                        </IonRow>
                        <IonRow>
                            <IonSelect
                            fill="outline"
                            name="text"
                            placeholder="Educational Attainment"
                            className="fam-hea-form">
                                <IonSelectOption value="fam-hea-option1">N/A</IonSelectOption>
                                <IonSelectOption value="fam-hea-option2">Elementary Undergraduate</IonSelectOption>
                                <IonSelectOption value="fam-hea-option3">Elementary Graduate</IonSelectOption>
                                <IonSelectOption value="fam-hea-option4">High School Undergraduate</IonSelectOption>
                                <IonSelectOption value="fam-hea-option5">High School Graduate</IonSelectOption>
                                <IonSelectOption value="fam-hea-option6">College Undergraduate</IonSelectOption>
                                <IonSelectOption value="fam-hea-option7">College Graduate</IonSelectOption>
                            </IonSelect>
                        </IonRow>
                        <IonRow>
                                <div className="fam-school-text">Name of School <IonText color="danger"> * </IonText></div>
                        </IonRow>
                        <IonRow>
                            <IonInput
                            type="text"
                            placeholder="Name of School"
                            className="fam-school-form"
                            fill="outline"
                            clearInput={true}>
                            </IonInput>
                        </IonRow>
                        <IonRow>
                            <IonItem lines="none">
                                <IonButton
                                className="next3-button" 
                                shape="round" expand="block" 
                                color="custom-color"
                                routerLink="/familyCompositionList">
                                        Next
                                </IonButton>
                            </IonItem>
                        </IonRow>
                    </IonGrid>
                </form>
                </IonContent>
            </IonPage>
        )
    }

export default familyComposition;