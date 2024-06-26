import React, { useState, useRef, ChangeEvent } from "react";
import "./main.css";
import Back from "../components/Back";
import { useHistory } from "react-router";
import RegisterPartTwo from "../components/RegisterPartTwo";
import { IonPage,IonContent } from "@ionic/react";
const NextRegister = () => {
  const router = useHistory();
  return (
    <IonPage>
      <IonContent>
        <div className="w-screen h-screen p-5 overflow-y-auto">
          <Back
            func={() => {
              router.goBack();
            }}
          />
          <div className="scroll-content">
            <h1 className="text-4xl font-bold text-blue-900">Register</h1>
            <RegisterPartTwo />
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default NextRegister;
