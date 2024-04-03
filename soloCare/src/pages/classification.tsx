import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCheckbox,
  IonCol,
  IonContent,
  IonGrid,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import {
  chevronBackOutline,
  alertCircleOutline,
  addCircleOutline,
} from "ionicons/icons";
import "./main.css";
import { useHistory } from "react-router";
import Back from "../components/Back";
import { memberRegItem } from "../types/types";
import { useForm } from "react-hook-form";
const classification: React.FC = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<memberRegItem>();
  const router = useHistory();

  const classifications = [
    ""
  ]
  return (
    <IonPage>
      <IonContent>
        <div className="main-container">
          <Back
            func={() => {
              router.goBack();
            }}
          ></Back>
          <h1 className="text-4xl font-bold">Register</h1>
          <div className="my-10">
            <p className="underline text-xl font-semibold">Classification</p>
            <p className="italic text-sm">(category of being a solo parent)</p>
          </div>

          <form action="">
            <input  type="checkbox" name="firstopt"/>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default classification;
