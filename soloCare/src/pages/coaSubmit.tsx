import { IonButton, IonContent, IonIcon, IonPage, IonText } from "@ionic/react";
import './main.css'
import React from "react";
import { checkmarkCircleOutline } from "ionicons/icons";

const coaSubmit : React.FC = () => {
    return(
        <IonPage>
            <IonContent>
            <IonIcon src={checkmarkCircleOutline} className="check-icon"></IonIcon>
                <div className="text-box">
                    <div className="main-text">
                        <p>WE HAVE RECEIVED YOUR CERTIFICATE OF APPROVAL</p>
                    </div>
                </div>
                <div className="text-box2">
                    <div className="main-text3">
                        <p>YOU CAN SUBMIT THE FOLLOWING REQUIREMENTS:</p>
                    </div>
                </div>
                <IonText className="req-text">
                    <ul className="req-list">
                        <li><i>Barangay Certificate</i></li>
                        <br></br>
                        <li><i>PSA Birth Certificate of your child/children</i></li>
                        <br></br>
                        <li><i>Proof of Financial Status</i></li>
                        <br></br>
                        <li><i>Certification from Barangay Captain</i></li>
                        <br></br>
                        <li><i>Supporting Documents or Certificates:</i></li>
                    </ul>
                    <ul className="req-sublist">
                        <li><i>Declaration of Nullity of Marriage</i></li>
                        <br></br>
                        <li><i>Certificate of No Marriage (CENOMAR)</i></li>
                        <br></br>
                        <li><i>Death Certificate of Spouse</i></li>
                        <br></br>
                        <li><i>Medical Certificate (as proof of mental capacity if incapacitated.)</i></li>
                        <br></br>
                        <li><i>Jail Records/Certificate of Detention</i></li>
                        <br></br>
                        <li><i>VAWC Report in case of abandonment</i></li>
                    </ul>
                </IonText>
                <IonButton
                className="uploadsubmit-button"
                shape="round" expand="block"
                color="custom-color"
                routerLink="/uploadRequirements">
                    Next
                </IonButton>
            </IonContent>
        </IonPage>
    )
}

export default coaSubmit;