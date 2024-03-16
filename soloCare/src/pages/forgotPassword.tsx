import React, { useState } from 'react';
import { IonContent, IonPage, IonInput, IonLabel, IonButton } from '@ionic/react';

const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    console.log(`Initiate password reset for email: ${email}`);
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonLabel position="floating">Email</IonLabel>
        <IonInput
          type="email"
          value={email}
          onIonChange={(e) => setEmail(e.detail.value!)}
        />

        <IonButton expand="full" color="primary" onClick={handleResetPassword}>
          Reset Password
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default ForgotPasswordPage;
