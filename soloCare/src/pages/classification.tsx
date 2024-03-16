import { IonBackButton, IonButton, IonButtons, IonCard, IonCheckbox, IonCol, IonContent, IonGrid, IonItem, IonLabel, IonList, IonPage, IonRow, IonToolbar } from "@ionic/react";
import React from "react";
import { chevronBackOutline, alertCircleOutline, addCircleOutline } from 'ionicons/icons';
import './main.css'

const classification : React.FC = () => {
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
                <p className="fam-info">Family Composition</p>
                <p className="sub-text"><i>(Category of being a Solo Parent)</i></p>
                <IonCard className="classification-card">
                    <IonGrid>
                        <IonRow>
                            <IonCol>
                                    <IonCheckbox labelPlacement="end" className="top-check">
                                    </IonCheckbox>
                            </IonCol>
                            <IonCol>
                                <div className="box-box2">
                                    <div className="text-text2">  
                                        <p>Biyuda/Biyudo</p>
                                    </div>
                                </div> 
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                    <IonCheckbox labelPlacement="end" className="top-check">
                                    </IonCheckbox>
                            </IonCol>
                            <IonCol>
                                <div className="box-box2">
                                    <div className="text-text2">  
                                        <p>Hiwalay sa asawa (for at least 6 months)</p>
                                    </div>
                                </div> 
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                    <IonCheckbox labelPlacement="end" className="top-check">
                                    </IonCheckbox>
                            </IonCol>
                            <IonCol>
                                <div className="box-box2">
                                    <div className="text-text2">  
                                        <p>Napakawalang bisa o annuled and kasal</p>
                                    </div>
                                </div> 
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                    <IonCheckbox labelPlacement="end" className="top-check">
                                    </IonCheckbox>
                            </IonCol>
                            <IonCol>
                                <div className="box-box3">
                                    <div className="text-text2">  
                                        <p>Inabandona o iniwan ng kinakasama (for at least 6 months)</p>
                                    </div>
                                </div> 
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                    <IonCheckbox labelPlacement="end" className="top-check">
                                    </IonCheckbox>
                            </IonCol>
                            <IonCol>
                                <div className="box-box4">
                                    <div className="text-text2">  
                                        <p>Sinumang indibidwal na tumatayo na magulang ng bata/ ng mga bata </p>
                                    </div>
                                </div> 
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                    <IonCheckbox labelPlacement="end" className="top-check">
                                    </IonCheckbox>
                            </IonCol>
                            <IonCol>
                                <div className="box-box5">
                                    <div className="text-text2">  
                                        <p>Sinumang miyembro ng pamilya na tumatayo bilang head of the family bunga ng pag-abandona, pagkawala o matagal na pagkakahiwalay ng magulang o Solo Parent</p>
                                    </div>
                                </div> 
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                    <IonCheckbox labelPlacement="end" className="top-check">
                                    </IonCheckbox>
                            </IonCol>
                            <IonCol>
                                <div className="box-box6">
                                    <div className="text-text2">  
                                        <p>Biktima ng panggagahasa</p>
                                    </div>
                                </div> 
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                    <IonCheckbox labelPlacement="end" className="top-check">
                                    </IonCheckbox>
                            </IonCol>
                            <IonCol>
                                <div className="box-box3">
                                    <div className="text-text2">  
                                        <p>Asawa ng nakulong at/o hinatulan na mabilanggo (for at least  months)</p>
                                    </div>
                                </div> 
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                    <IonCheckbox labelPlacement="end" className="top-check">
                                    </IonCheckbox>
                            </IonCol>
                            <IonCol>
                                <div className="box-box7">
                                    <div className="text-text2">  
                                        <p>Hindi sapatang mental o pisikal ng asawa/kinakasama/anak (with Doctor's Certificate)</p>
                                    </div>
                                </div> 
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonCard>
                <IonGrid>
                    <IonRow>
                        <IonItem lines="none">
                            <IonButton
                            className="next5-button" 
                            shape="round" expand="block" 
                            color="custom-color"
                            routerLink="/applicationSubmit">
                                Next
                            </IonButton>
                        </IonItem>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}

export default classification;