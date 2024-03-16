import React, {useState} from "react";
import './main.css'
import { IonBackButton, IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonIcon, IonInput, IonItem, IonList, IonPage, IonRouterLink, IonRow, IonText, IonToolbar } from "@ionic/react";
import { chevronBackOutline, alertCircleOutline, addCircleOutline } from 'ionicons/icons';
import { useHistory } from "react-router";
import { useMaskito } from "@maskito/react";

const familyCompositionList : React.FC = () =>{
    const [phoneNumber, setPhoneNumber] = useState('');const [age, setAge] = useState<number | undefined>(undefined);

    
      const phoneMask = useMaskito({
        options: {
          mask: [/\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/],
        },
      });

    return(
        <IonPage>
            <IonToolbar>
                    <IonButtons slot="start" >
                        <IonBackButton defaultHref="/nextRegister" icon={chevronBackOutline} text="Back"></IonBackButton>
                    </IonButtons>
            </IonToolbar>
            <IonContent className="scroll-content">
                <h1>
                    Register
                </h1>
                <p className="fam-info">Family Composition</p>
                    <IonCard className="fam-card">
                        <IonList>
                            <IonText className="ion-padding name-list">Name: <IonText></IonText></IonText>
                        </IonList>
                        <IonList>
                            <IonText className="ion-padding rs-list">Relationship: <IonText></IonText></IonText>
                        </IonList>
                        <IonList>
                            <IonText className="ion-padding age-list">Age: <IonText></IonText></IonText>
                            <IonText  className="ion-padding dob-list">Date of Birth: <IonText></IonText></IonText>
                        </IonList>
                        <IonList>
                            <IonText className="ion-padding status-list">Status: <IonText></IonText></IonText>
                        </IonList>
                        <IonList>
                            <IonText className="ion-padding educ-list">Educational Attainment: <IonText></IonText></IonText>
                        </IonList>
                        <IonList className="ion-padding school-list">Name of School: <IonText></IonText></IonList>
                        
                    </IonCard>
                <IonRow>
                    <IonCard className="fam-card">
                        <IonRouterLink routerLink="/familyComposition"><IonIcon src={addCircleOutline} className="add-icon"></IonIcon></IonRouterLink>
                    </IonCard>
                </IonRow>
                <IonRow>
                    <div className="person-text">Contact Person in case of Emergency <IonText color="danger"> * </IonText></div>
                </IonRow>
                <IonRow>
                    <IonInput
                    type="text"
                    placeholder="Contact Person"
                    className="person-form"
                    fill="outline"
                    clearInput={true}>
                    </IonInput>
                </IonRow>
                <IonRow>
                    <div className="emergencyContact-text">Contact Number <IonText color="danger"> * </IonText></div>
                </IonRow>
                <IonRow>
                    <IonInput
                    clearInput={true}
                    labelPlacement="fixed"
                    className="emergencyContact-form"
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
                        className="next4-button" 
                        shape="round" expand="block" 
                        color="custom-color"
                        routerLink="/classification">
                            Next
                        </IonButton>
                    </IonItem>
                </IonRow>
            </IonContent>
        </IonPage>
    )
}

export default familyCompositionList;