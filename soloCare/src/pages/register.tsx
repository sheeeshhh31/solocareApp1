import React, { useState, useRef, ChangeEvent } from "react";
import "./main.css";
import { ChevronBackOutline, AlertCircleOutline } from "react-ionicons";
import { useMaskito } from "@maskito/react";
import InputWrapper from "../components/InputWrapper";
import { useForm } from "react-hook-form";
import { memberRegItem } from "../types/types";
import RegisterPartOne from "../components/RegisterPartOne";
import { useHistory } from "react-router";
import Back from "../components/Back";
import { IonPage, IonContent } from "@ionic/react";
const Register = () => {
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
            <RegisterPartOne />
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Register;
